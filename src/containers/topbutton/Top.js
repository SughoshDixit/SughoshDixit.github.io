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
    }, 600); // Match the footballKick animation duration
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
      title="Scroll to Top - Football Style!"
      className={`football-scroll-btn ${isVisible ? 'visible' : ''} ${isAnimating ? 'animating' : ''}`}
    >
      <div className="football-icon"></div>
    </button>
  );
}
