// src/components/ProjectsGrid.tsx
import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css'; 
import Portfolio_image from '../assets/portfolio_image.png';

const projects = [
  { title: 'Portfolio', description: 'The Portfolio you are looking now ! This is created out of React', imageUrl: Portfolio_image },
];

const Projects: React.FC = () => {
  return (
    <div className="projectsGrid">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl = {project.imageUrl} 
        />
      ))}
    </div>
  );
};

export default Projects;
