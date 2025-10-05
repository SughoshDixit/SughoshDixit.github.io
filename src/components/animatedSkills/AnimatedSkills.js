import React, { useState, useEffect, useRef } from "react";
import "./AnimatedSkills.scss";

const AnimatedSkills = ({ skills }) => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const skillsRef = useRef(null);

  const animateSkills = React.useCallback(() => {
    skills.forEach((skill, index) => {
      setTimeout(() => {
        setVisibleSkills(prev => [...prev, skill]);
      }, index * 200);
    });
  }, [skills]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateSkills();
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [animateSkills]);

  return (
    <section ref={skillsRef} className="animated-skills">
      <div className="skills-container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`skill-card ${visibleSkills.includes(skill) ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-icon">
                <i className={skill.fontAwesomeClassname}></i>
              </div>
              <div className="skill-content">
                <h3>{skill.skillName}</h3>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ 
                      width: visibleSkills.includes(skill) ? `${skill.progressPercentage || 85}%` : '0%',
                      transition: 'width 1.5s ease-in-out'
                    }}
                  ></div>
                </div>
                <span className="skill-percentage">
                  {visibleSkills.includes(skill) ? (skill.progressPercentage || 85) : 0}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedSkills;

