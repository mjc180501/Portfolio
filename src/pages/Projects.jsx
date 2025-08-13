import React, { useState, useEffect } from 'react';
import { projects } from '../projectsData';
import './Projects.css';

const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))];

function Projects() {
  const [activeTag, setActiveTag] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (activeTag === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.tags.includes(activeTag)));
    }
  }, [activeTag]);

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="filters">
        {allTags.map(tag => (
          <button
            key={tag}
            className={`filter-button ${activeTag === tag ? 'active' : ''}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="card-tags">
                {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;