import React, { useState, useEffect } from 'react';
import './BeautifulSkills.scss';

const BeautifulSkills = ({ skills }) => {
  const [activeSkill, setActiveSkill] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getSkillIcon = (skill) => {
    if (skill.includes('Data Science')) return '🧠';
    if (skill.includes('Python')) return '🐍';
    if (skill.includes('SQL')) return '🗄️';
    if (skill.includes('React')) return '⚛️';
    if (skill.includes('Oracle')) return '☁️';
    if (skill.includes('Music')) return '🎵';
    if (skill.includes('Football')) return '⚽';
    if (skill.includes('Indian Heritage')) return '🇮🇳';
    return '⭐';
  };

  const getSkillColor = (index) => {
    const colors = [
      '#007ACC', // Data Science Blue
      '#3776ab', // Python Blue
      '#336791', // SQL Blue
      '#61dafb', // React Blue
      '#f80000', // Oracle Red
      '#FFD700', // Music Gold
      '#228B22', // Football Green
      '#FF9933'  // Indian Saffron
    ];
    return colors[index % colors.length];
  };

  const getSkillDescription = (skill) => {
    const descriptions = {
      'Data Science & ML': 'Transforming complex data into actionable insights at Oracle Financial Crime & Compliance using AI/ML',
      'Python & AI': 'Building intelligent systems with Python, machine learning algorithms, and artificial intelligence',
      'SQL & Analytics': 'Extracting meaningful insights from large datasets using advanced SQL queries and analytics',
      'React & Frontend': 'Creating modern, responsive web applications with React and cutting-edge frontend technologies',
      'Oracle Cloud': 'Leveraging Oracle Cloud infrastructure for enterprise-scale applications and data management',
      'Music & Bhajans': 'Devotional singer performing bhajans and patriotic songs, preserving Bharatiya musical traditions',
      'Football Strategy': 'Passionate striker with offensive mindset, Liverpool FC devotee, believer in teamwork and glory',
      'Indian Heritage': 'Proud advocate of Bharatiya civilization, working to eradicate colonial consciousness and rebuild cultural pride'
    };
    return descriptions[skill] || 'Expertise in this domain';
  };

  const getSkillTags = (skill) => {
    const tags = {
      'Data Science & ML': ['AI/ML', 'Python', 'Analytics', 'Machine Learning'],
      'Python & AI': ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
      'SQL & Analytics': ['SQL', 'Data Analysis', 'Business Intelligence', 'Reporting'],
      'React & Frontend': ['React', 'JavaScript', 'HTML/CSS', 'Node.js'],
      'Oracle Cloud': ['Oracle', 'Cloud Computing', 'Database', 'Enterprise'],
      'Music & Bhajans': ['Bhajans', 'Classical Music', 'Spiritual', 'Cultural'],
      'Football Strategy': ['Striker', 'Liverpool FC', 'Teamwork', 'Leadership'],
      'Indian Heritage': ['Culture', 'Civilization', 'Nationalism', 'Heritage']
    };
    return tags[skill] || ['Expertise'];
  };

  return (
    <div className="beautiful-skills-container">
      <div className="skills-header">
        <h2 className="skills-title">Technical Skills & Expertise</h2>
        <p className="skills-subtitle">Mastering cutting-edge technologies while preserving cultural heritage</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`skill-card ${isVisible ? 'visible' : ''} ${activeSkill === index ? 'active' : ''}`}
            style={{ '--skill-color': getSkillColor(index) }}
            onClick={() => setActiveSkill(index)}
          >
            <div className="card-background">
              <div className="card-gradient"></div>
              <div className="card-pattern"></div>
            </div>

            <div className="card-content">
              <div className="skill-icon-section">
                <div className="icon-container">
                  <span className="skill-icon">{getSkillIcon(skill)}</span>
                  <div className="icon-ring"></div>
                </div>
                <div className="expert-badge">Expert</div>
              </div>

              <div className="skill-info">
                <h3 className="skill-name">{skill}</h3>
                <p className="experience-level">3+ Years Experience</p>

                <div className="proficiency-bar">
                  <div className="bar-container">
                    <div 
                      className="bar-fill"
                      style={{ 
                        width: '95%',
                        background: getSkillColor(index) 
                      }}
                    ></div>
                  </div>
                  <span className="proficiency-text">95% Proficiency</span>
                </div>
              </div>

              <div className="skill-tags">
                {getSkillTags(skill).map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="card-hover-effect"></div>
          </div>
        ))}
      </div>

      {/* Active Skill Details */}
      <div className="active-skill-details">
        <div className="details-card">
          <div className="details-header">
            <span className="details-icon">{getSkillIcon(skills[activeSkill])}</span>
            <h3>{skills[activeSkill]}</h3>
          </div>
          
          <div className="details-content">
            <p className="skill-description">{getSkillDescription(skills[activeSkill])}</p>
            
            <div className="skill-highlights">
              <h4>Key Highlights</h4>
              <ul>
                {skills[activeSkill] === 'Data Science & ML' && (
                  <>
                    <li>Built ML models for fraud detection at Oracle</li>
                    <li>Led data extraction for Oracle Cloud HCM projects</li>
                    <li>Masters in Data Science from BITS Pilani</li>
                  </>
                )}
                {skills[activeSkill] === 'Python & AI' && (
                  <>
                    <li>Expert in Python programming and AI frameworks</li>
                    <li>Developed predictive models for financial systems</li>
                    <li>Proficient in TensorFlow, Pandas, and NumPy</li>
                  </>
                )}
                {skills[activeSkill] === 'SQL & Analytics' && (
                  <>
                    <li>Advanced SQL query optimization</li>
                    <li>Business intelligence and data visualization</li>
                    <li>Enterprise reporting and analytics solutions</li>
                  </>
                )}
                {skills[activeSkill] === 'React & Frontend' && (
                  <>
                    <li>Modern React application development</li>
                    <li>Responsive web design and user experience</li>
                    <li>Full-stack JavaScript development</li>
                  </>
                )}
                {skills[activeSkill] === 'Oracle Cloud' && (
                  <>
                    <li>Oracle Cloud infrastructure expertise</li>
                    <li>Enterprise database management</li>
                    <li>Cloud migration and optimization</li>
                  </>
                )}
                {skills[activeSkill] === 'Music & Bhajans' && (
                  <>
                    <li>Weekly bhajan performances</li>
                    <li>Patriotic song renditions</li>
                    <li>Preserving cultural heritage through music</li>
                  </>
                )}
                {skills[activeSkill] === 'Football Strategy' && (
                  <>
                    <li>Offensive footballer with goal-scoring mindset</li>
                    <li>Liverpool FC devotee and analyst</li>
                    <li>Team leadership and strategic thinking</li>
                  </>
                )}
                {skills[activeSkill] === 'Indian Heritage' && (
                  <>
                    <li>Advocate for Bharatiya civilizational values</li>
                    <li>Working to eradicate colonial consciousness</li>
                    <li>Proud of ancient Indian heritage</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautifulSkills;
