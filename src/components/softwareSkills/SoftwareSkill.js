import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <div className="skill-icon">
                  <i className={skills.fontAwesomeClassname}></i>
                </div>
                <div className="skill-name">
                  <p>{skills.skillName}</p>
                </div>
                <div className="skill-level">
                  <span>Expert</span>
                </div>
                <div className="skill-experience">
                  <span>3+ Years</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
