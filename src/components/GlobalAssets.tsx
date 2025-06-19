import React, { useEffect } from 'react';
import '../styles/Loader.css';

const GlobalAssets: React.FC = () => {
  useEffect(() => {
    const hideURLbar = () => window.scrollTo(0, 1);
    window.addEventListener('load', () => setTimeout(hideURLbar, 0));

    const loadScript = (src: string): Promise<void> =>
      new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(script);
      });

    const loadAllScripts = async () => {
      try {
        await loadScript('qfreshstyles/js/jquery-2.2.3.min.js');
        await loadScript('qfreshstyles/js/move-top.js');
        await loadScript('qfreshstyles/js/easing.js');
        await loadScript('qfreshstyles/floating-whatsapp-master/floating-wpp.min.js');
      } catch (err) {
        console.error(err);
      }
    };

    loadAllScripts();

    return () => {
      window.removeEventListener('load', hideURLbar);
      const scriptsToRemove = [
        'jquery-2.2.3.min.js',
        'move-top.js',
        'easing.js',
        'floating-wpp.min.js',
      ];

      scriptsToRemove.forEach((srcPart) => {
        const script = Array.from(document.scripts).find((s) =>
          s.src.includes(srcPart)
        );
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return null;
};

export default GlobalAssets;
