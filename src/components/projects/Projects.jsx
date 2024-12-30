import React from 'react';
import Project from './Project';
import { projectData } from '../../data/data';

const Projects = () => {
  return (
    <section id="projects" className="my-8 p-6 bg-gray-300 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 bg-gray-300 p-2 rounded-md">Projects</h2>
      <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-10">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            features={project.features}
            links={project.links}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
