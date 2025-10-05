import React, { useState, useEffect } from "react";
import "./Top.scss";

export default function Top() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function TopEvent() {
    setIsAnimating(true);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
    // Reset animation after completion
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  }

  // When the user scrolls down 20px from the top of the document, show the button
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    window.onscroll = scrollFunction;
    window.onload = scrollFunction;
    
    return () => {
      window.onscroll = null;
      window.onload = null;
    };
  }, []);

  return (
    <button 
      onClick={TopEvent} 
      id="topButton" 
      title="Scroll to Top - Multi-Identity Journey!"
      className={`multi-identity-scroll-btn ${isVisible ? 'visible' : ''} ${isAnimating ? 'animating' : ''}`}
    >
      <div className="identity-orb">
        <div className="orb-core">
          <div className="identity-icons">
            <div className="icon data-science-icon">🧠</div>
            <div className="icon musician-icon">🎵</div>
            <div className="icon footballer-icon">⚽</div>
            <div className="icon nationalist-icon">🇮🇳</div>
          </div>
          <div className="orb-center">
            <div className="center-symbol">↑</div>
          </div>
        </div>
        <div className="orb-ring"></div>
        <div className="orb-glow"></div>
      </div>
      <div className="particle-effects">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>
    </button>
  );
}
