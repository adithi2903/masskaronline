import { useEffect } from "react";
import "./styles/Preloader.css";

const Preloader = () => {
  useEffect(() => {
    const onLoad = () => {
      const preloader = document.querySelector(".se-pre-con");
      if (preloader) {
        preloader.classList.add("fade-out");
        setTimeout(() => preloader.remove(), 600); // remove after fade out
      }
    };

    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return <div className="se-pre-con" />;
};

export default Preloader;
