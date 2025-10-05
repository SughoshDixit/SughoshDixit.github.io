import React, { useState } from "react";
import "./AIGallery.scss";

// AI Gallery component
// This component displays a collection of images and videos.  Images
// are displayed using a custom gallery with modal support.
// Videos are rendered using standard iframe embeds.

export default function AIGallery({ section }) {
  const [selectedImage, setSelectedImage] = useState(null);
  
  if (!section || section.display === false) {
    return null;
  }

  const { title, subtitle, items } = section;

  // Separate images and videos
  const images = items.filter((item) => item.type === "image");
  const videos = items.filter((item) => item.type === "video");

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="ai-gallery" className="ai-gallery-section">
      <div className="ai-container">
        <h2>{title}</h2>
        {subtitle && <p className="ai-subtitle">{subtitle}</p>}
        
        {images.length > 0 && (
          <div className="ai-image-gallery">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className="ai-image-item"
                onClick={() => openModal(img)}
              >
                <img 
                  src={img.original} 
                  alt={img.description || `AI Generated Image ${idx + 1}`}
                  loading="lazy"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <i className="fas fa-search-plus"></i>
                    <p>{img.description || "Click to view"}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {videos.length > 0 && (
          <div className="ai-video-gallery">
            <h3>AI Generated Videos</h3>
            {videos.map((vid, idx) => (
              <div key={idx} className="ai-video-item">
                <iframe
                  width="100%"
                  height="315"
                  src={vid.videoUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={vid.description || `AI video ${idx + 1}`}
                ></iframe>
                {vid.description && <p className="video-description">{vid.description}</p>}
              </div>
            ))}
          </div>
        )}
        
        {images.length === 0 && videos.length === 0 && (
          <div className="ai-empty-state">
            <i className="fas fa-robot"></i>
            <h3>AI Gallery Coming Soon</h3>
            <p>I'm working on creating amazing AI-generated content to showcase here!</p>
          </div>
        )}
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <div className="ai-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <img 
              src={selectedImage.original} 
              alt={selectedImage.description || "AI Generated Image"}
            />
            {selectedImage.description && (
              <div className="modal-description">
                <p>{selectedImage.description}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}