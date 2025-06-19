import React, { useEffect } from 'react';

const FloatingWhatsApp: React.FC = () => {
  useEffect(() => {
    if ((window as any).floatingWhatsAppInitialized) return;
    (window as any).floatingWhatsAppInitialized = true;

    const loadScripts = () => {
      // Load jQuery
      const jqueryScript = document.createElement('script');
      jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
      jqueryScript.onload = () => {
        // Load WhatsApp plugin
        const pluginScript = document.createElement('script');
        pluginScript.src =
          'https://cdn.jsdelivr.net/gh/rafaelbotazini/floating-whatsapp@0.1.0/floating-wpp.min.js';
        pluginScript.onload = () => {
          setTimeout(() => {
            // @ts-ignore
            ($('#WAButton') as any).floatingWhatsApp({
              phone: '+97450343443',
              headerTitle: 'Chat with us on WhatsApp!',
              popupMessage: 'Hello, how can we help you?',
              showPopup: true,
              buttonImage: '<img src="/whatsapp.svg" class="custom-wa-icon" />',
              position: 'right',
            });

            // 🛠 MutationObserver to fix styling issues
            const observer = new MutationObserver(() => {
              const inputBox = document.querySelector('.floating-wpp .input-message') as HTMLInputElement;
              const popupMsg = document.querySelector('.floating-wpp .popup-message') as HTMLElement;

              if (inputBox) {
                inputBox.style.setProperty('background-color', 'white', 'important');
                inputBox.style.setProperty('color', 'black', 'important');
                inputBox.style.setProperty('border', '1px solid #ccc', 'important');
                inputBox.setAttribute('placeholder', 'Type your message...');
              }

              if (popupMsg) {
                popupMsg.style.setProperty('color', 'black', 'important');
              }

              if (inputBox && popupMsg) {
                observer.disconnect();
              }
            });

            observer.observe(document.body, {
              childList: true,
              subtree: true,
            });

            // Optional: Adjust button and icon size
            const waButton = document.querySelector('.floating-wpp-button') as HTMLElement;
            if (waButton) {
              waButton.style.width = '70px';
              waButton.style.height = '70px';
              waButton.style.borderRadius = '50%';
              waButton.style.overflow = 'hidden';
            }

            const waIcon = document.querySelector('.custom-wa-icon') as HTMLElement;
            if (waIcon) {
              waIcon.style.width = '40px';
              waIcon.style.height = '40px';
              waIcon.style.objectFit = 'contain';
              waIcon.style.margin = '0';
              waIcon.style.padding = '0';
              waIcon.style.borderRadius = '50%';
              waIcon.style.display = 'block';
            }
          }, 300); // delay to allow DOM rendering
        };
        document.body.appendChild(pluginScript);
      };
      document.body.appendChild(jqueryScript);

      // Load plugin CSS
      const styleLink = document.createElement('link');
      styleLink.rel = 'stylesheet';
      styleLink.href = 'https://cdn.jsdelivr.net/gh/rafaelbotazini/floating-whatsapp@0.1.0/floating-wpp.min.css';
      document.head.appendChild(styleLink);
    };

    loadScripts();
  }, []);

  return (
    <>
      <style>{`
        #WAButton.floating-wpp .header-title {
          color: white !important;
        }
        #WAButton.floating-wpp .popup-message {
          color: black !important;
        }
      `}</style>
      <div
        id="WAButton"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
        }}
      />
    </>
  );
  
  
};

export default FloatingWhatsApp;
