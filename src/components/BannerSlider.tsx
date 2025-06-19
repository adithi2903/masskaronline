import React, { useEffect, useState } from 'react';
import '../styles/BannerSlider.css';

const BannerSlider: React.FC = () => {
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationDone(true), 3000); // match CSS duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="banner-container">
      <div className="image-wrapper">
        <div className="banner-image" />
      </div>

      <div className={`banner-text ${animationDone ? 'show' : ''}`}>
        <h1 style={{ color: "#EEEEEE" }}>ORDER NOW</h1>
      </div>
    </div>
  );
};

export default BannerSlider;
