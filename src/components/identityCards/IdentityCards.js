import React, { useState } from 'react';
import './IdentityCards.scss';

const IdentityCards = ({ identities }) => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="identity-cards-container">
      <div className="cards-title">
        <h2>My Four Pillars of Identity</h2>
        <p>Click on any pillar to explore deeper</p>
      </div>
      
      <div className="cards-grid">
        {identities.map((identity, index) => (
          <div
            key={index}
            className={`identity-card ${activeCard === index ? 'active' : ''}`}
            onClick={() => setActiveCard(index)}
            style={{ '--card-color': identity.color }}
          >
            <div className="card-background">
              <div className="card-gradient"></div>
              <div className="card-pattern"></div>
            </div>
            
            <div className="card-content">
              <div className="card-icon">
                <span className="icon-emoji">{identity.icon}</span>
                <div className="icon-ring"></div>
              </div>
              
              <div className="card-info">
                <h3 className="card-title">{identity.title}</h3>
                <p className="card-description">{identity.description}</p>
                
                <div className="card-stats">
                  <div className="stat">
                    <span className="stat-number">{identity.experience}</span>
                    <span className="stat-label">Years</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">{identity.level}</span>
                    <span className="stat-label">Level</span>
                  </div>
                </div>
                
                <div className="card-tags">
                  {identity.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="card-footer">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ 
                      width: `${identity.progress}%`,
                      background: identity.color 
                    }}
                  ></div>
                </div>
                <span className="progress-text">{identity.progress}% Mastery</span>
              </div>
            </div>
            
            <div className="card-hover-effect"></div>
          </div>
        ))}
      </div>
      
      {/* Active Card Details */}
      <div className="active-card-details">
        {identities[activeCard] && (
          <div className="details-container">
            <div className="details-header">
              <span className="details-icon">{identities[activeCard].icon}</span>
              <h3>{identities[activeCard].title}</h3>
            </div>
            
            <div className="details-content">
              <div className="details-section">
                <h4>Key Achievements</h4>
                <ul>
                  {identities[activeCard].achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="details-section">
                <h4>Current Focus</h4>
                <p>{identities[activeCard].currentFocus}</p>
              </div>
              
              <div className="details-section">
                <h4>Philosophy</h4>
                <p className="philosophy-text">"{identities[activeCard].philosophy}"</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdentityCards;
