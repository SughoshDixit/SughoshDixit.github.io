import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  educationInfo,
  bigProjects,
  githubProjectsSection,
  youtubeSection,
  aiGallerySection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewEducation = educationInfo.display;
  const viewProjects = bigProjects.display;
  const viewGitHub = githubProjectsSection.display;
  const viewYouTube = youtubeSection.display;
  const viewAIGallery = aiGallerySection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon multi-identity-menu-btn"
          htmlFor="menu-btn"
        >
          <div className="menu-orb">
            <div className="orb-ring">
              <div className="identity-dots">
                <div className="dot data-science-dot"></div>
                <div className="dot musician-dot"></div>
                <div className="dot footballer-dot"></div>
                <div className="dot nationalist-dot"></div>
              </div>
            </div>
            <div className="orb-center">
              <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
            </div>
          </div>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education">Education</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Experience</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )}
          {viewGitHub && (
            <li>
              <a href="#github">GitHub</a>
            </li>
          )}
          {viewYouTube && (
            <li>
              <a href="#youtube">YouTube</a>
            </li>
          )}
          {viewAIGallery && (
            <li>
              <a href="#ai-gallery">AI Gallery</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
