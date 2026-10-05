import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ui/ProjectCard';

const Projects = () => {
  return (
    <div className='grid grid-flow-row grid-cols-1 gap-2 mb-17 md:grid-cols-2 '>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;