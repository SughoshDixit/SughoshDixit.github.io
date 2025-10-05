import React, { useState } from "react";
import "./ProjectShowcase.scss";

const ProjectShowcase = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const categories = ["all", ...new Set(projects.map(project => project.category))];

  const filteredProjects = projects.filter(project => 
    filter === "all" || project.category === filter
  );

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="project-showcase">
      <div className="showcase-container">
        <h2>Featured Projects</h2>
        <p>Explore my latest work and creative solutions</p>
        
        {/* Filter Buttons */}
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card" onClick={() => openModal(project)}>
              <div className="project-image">
                <img src={project.image} alt={project.projectName} />
                <div className="project-overlay">
                  <div className="project-actions">
                    <button className="view-btn">
                      <i className="fas fa-eye"></i>
                    </button>
                    {project.footerLink && project.footerLink.length > 0 && (
                      <a 
                        href={project.footerLink[0].url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="external-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.projectName}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.projectDesc}</p>
                <div className="project-tech">
                  {project.technologies && project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="project-modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.projectName} />
              </div>
              <div className="modal-info">
                <h2>{selectedProject.projectName}</h2>
                <p className="modal-category">{selectedProject.category}</p>
                <p className="modal-description">{selectedProject.projectDesc}</p>
                {selectedProject.technologies && (
                  <div className="modal-tech">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
                {selectedProject.footerLink && selectedProject.footerLink.length > 0 && (
                  <div className="modal-actions">
                    <a 
                      href={selectedProject.footerLink[0].url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      {selectedProject.footerLink[0].name}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectShowcase;

