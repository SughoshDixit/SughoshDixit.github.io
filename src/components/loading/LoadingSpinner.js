import React from "react";
import "./LoadingSpinner.scss";

const LoadingSpinner = ({ size = "medium", color = "primary" }) => {
  return (
    <div className={`loading-spinner ${size} ${color}`}>
      <div className="spinner">
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
      </div>
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default LoadingSpinner;

