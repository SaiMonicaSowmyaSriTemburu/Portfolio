// src/components/ProjectCard.tsx
import React from 'react';
import '../styles/ProjectCard.css';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="projectCard">
      <img src={imageUrl} alt={title} className="projectCardImage" />
      <div className="projectCardContent">
        <h3 className="projectCardTitle">{title}</h3>
        <p className="projectCardDescription">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
