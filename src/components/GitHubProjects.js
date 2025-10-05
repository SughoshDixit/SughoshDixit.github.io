import React, { useState, useEffect } from "react";
import "./GitHubProjects.scss";

export default function GitHubProjects({ section }) {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.github.com/users/${section.username}/repos?sort=updated&per_page=${section.repoCount || 6}`
        );
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const data = await response.json();
        setRepositories(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching GitHub repositories:", err);
      } finally {
        setLoading(false);
      }
    };

    if (section && section.display !== false && section.username) {
      fetchRepositories();
    }
  }, [section]);

  if (!section || section.display === false) {
    return null;
  }

  if (loading) {
    return (
      <section id="github-projects" className="github-projects-section">
        <div className="github-container">
          <h2>{section.title}</h2>
          {section.subtitle && <p className="github-subtitle">{section.subtitle}</p>}
          <div className="loading">Loading repositories...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="github-projects" className="github-projects-section">
        <div className="github-container">
          <h2>{section.title}</h2>
          {section.subtitle && <p className="github-subtitle">{section.subtitle}</p>}
          <div className="error">Error loading repositories: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="github-projects" className="github-projects-section">
      <div className="github-container">
        <h2>{section.title}</h2>
        {section.subtitle && <p className="github-subtitle">{section.subtitle}</p>}
        
        <div className="github-repos-grid">
          {repositories.map((repo) => (
            <div key={repo.id} className="github-repo-card">
              <div className="repo-header">
                <h3 className="repo-name">
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="repo-link"
                  >
                    {repo.name}
                  </a>
                </h3>
                <div className="repo-stats">
                  <span className="repo-stars">
                    ⭐ {repo.stargazers_count}
                  </span>
                  <span className="repo-forks">
                    🍴 {repo.forks_count}
                  </span>
                </div>
              </div>
              
              {repo.description && (
                <p className="repo-description">{repo.description}</p>
              )}
              
              <div className="repo-meta">
                <span className="repo-language">
                  {repo.language && (
                    <span className="language-badge">{repo.language}</span>
                  )}
                </span>
                <span className="repo-updated">
                  Updated {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>
              
              <div className="repo-footer">
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="view-repo-btn"
                >
                  View Repository
                </a>
                {repo.homepage && (
                  <a 
                    href={repo.homepage} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="view-live-btn"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="github-footer">
          <a 
            href={`https://github.com/${section.username}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="view-all-repos"
          >
            View All Repositories on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
