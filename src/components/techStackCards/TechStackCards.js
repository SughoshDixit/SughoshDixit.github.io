import React, { useState } from 'react';
import './TechStackCards.scss';

const TechStackCards = ({ experience }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const getCardColor = (index) => {
    const colors = [
      '#007ACC', // Data Science Blue
      '#FFD700', // Musician Gold
      '#228B22', // Football Green
      '#55198b', // Original Purple
      '#61dafb', // React Blue
      '#28A745'  // Success Green
    ];
    return colors[index % colors.length];
  };

  const getCardIcon = (stack) => {
    if (stack.includes('Data Science') || stack.includes('AI/ML')) return '🧠';
    if (stack.includes('Music') || stack.includes('Cultural Arts')) return '🎵';
    if (stack.includes('Football') || stack.includes('Leadership')) return '⚽';
    if (stack.includes('Cultural Heritage') || stack.includes('Nationalist')) return '🇮🇳';
    if (stack.includes('Full-Stack') || stack.includes('Development')) return '💻';
    if (stack.includes('Financial') || stack.includes('Systems')) return '🔒';
    return '⭐';
  };

  const getExperienceLevel = (percentage) => {
    if (percentage >= 90) return 'Expert';
    if (percentage >= 80) return 'Advanced';
    if (percentage >= 70) return 'Intermediate';
    return 'Beginner';
  };

  const getYearsExperience = (stack) => {
    if (stack.includes('Data Science')) return '4+ Years';
    if (stack.includes('Music')) return '10+ Years';
    if (stack.includes('Football')) return '15+ Years';
    if (stack.includes('Cultural Heritage')) return 'Life';
    if (stack.includes('Full-Stack')) return '3+ Years';
    if (stack.includes('Financial')) return '4+ Years';
    return '2+ Years';
  };

  return (
    <div className="tech-stack-cards-container">
      <div className="tech-stack-header">
        <h2 className="tech-stack-title">Proficiency Levels</h2>
        <p className="tech-stack-subtitle">Click on any card to explore deeper insights into my expertise areas</p>
      </div>
      
      <div className="tech-stack-grid">
        {experience.map((exp, index) => {
          const percentage = parseInt(exp.progressPercentage);
          const color = getCardColor(index);
          const icon = getCardIcon(exp.Stack);
          const level = getExperienceLevel(percentage);
          const years = getYearsExperience(exp.Stack);
          
          return (
            <div
              key={index}
              className={`tech-stack-card ${hoveredCard === index ? 'hovered' : ''}`}
              style={{ '--card-color': color }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-background">
                <div className="card-gradient"></div>
                <div className="card-pattern"></div>
              </div>
              
              <div className="card-content">
                <div className="card-icon-section">
                  <div className="icon-container">
                    <span className="card-icon">{icon}</span>
                    <div className="icon-ring"></div>
                  </div>
                  <div className="level-badge">{level}</div>
                </div>
                
                <div className="card-info">
                  <h3 className="card-title">{exp.Stack}</h3>
                  <p className="card-years">{years} Experience</p>
                  
                  <div className="progress-section">
                    <div className="progress-label">
                      <span>Proficiency</span>
                      <span className="progress-percentage">{percentage}%</span>
                    </div>
                    <div className="progress-bar-container">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ 
                            width: `${percentage}%`,
                            background: color 
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-description">
                    {exp.Stack.includes('Data Science') && 'Building AI models for financial crime detection and analytics'}
                    {exp.Stack.includes('Music') && 'Preserving Bharatiya musical traditions through devotional singing'}
                    {exp.Stack.includes('Football') && 'Liverpool FC devotee with offensive mindset and team leadership'}
                    {exp.Stack.includes('Cultural Heritage') && 'Advocating for Bharatiya civilizational values and pride'}
                    {exp.Stack.includes('Full-Stack') && 'Creating modern web applications with React and Node.js'}
                    {exp.Stack.includes('Financial') && 'Developing secure systems for Oracle Financial Crime & Compliance'}
                  </div>
                </div>
                
                <div className="card-footer">
                  <div className="card-tags">
                    {exp.Stack.includes('Data Science') && (
                      <>
                        <span className="tag">Python</span>
                        <span className="tag">ML</span>
                        <span className="tag">Analytics</span>
                      </>
                    )}
                    {exp.Stack.includes('Music') && (
                      <>
                        <span className="tag">Bhajans</span>
                        <span className="tag">Classical</span>
                        <span className="tag">Spiritual</span>
                      </>
                    )}
                    {exp.Stack.includes('Football') && (
                      <>
                        <span className="tag">Striker</span>
                        <span className="tag">LFC</span>
                        <span className="tag">Strategy</span>
                      </>
                    )}
                    {exp.Stack.includes('Cultural Heritage') && (
                      <>
                        <span className="tag">Heritage</span>
                        <span className="tag">Culture</span>
                        <span className="tag">Pride</span>
                      </>
                    )}
                    {exp.Stack.includes('Full-Stack') && (
                      <>
                        <span className="tag">React</span>
                        <span className="tag">Node.js</span>
                        <span className="tag">JavaScript</span>
                      </>
                    )}
                    {exp.Stack.includes('Financial') && (
                      <>
                        <span className="tag">Security</span>
                        <span className="tag">Compliance</span>
                        <span className="tag">Oracle</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="card-hover-effect"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStackCards;
