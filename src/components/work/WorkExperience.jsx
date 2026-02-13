import React from 'react';
import WorkExperienceItem from './WorkExperienceItem';
import { workExperienceData, projectData } from '../../data/data'; // Import project data
import { FaUserGraduate, FaUserTie, FaUserCog, FaUserAstronaut } from 'react-icons/fa';

const WorkExperience = () => {
  const avatarIcons = [FaUserGraduate, FaUserTie, FaUserCog, FaUserAstronaut];
  const avatarColors = ['text-primary', 'text-secondary', 'text-accent', 'text-primary-dim'];

  return (
    <section id="work-experience" className="my-10 md:my-20 max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <h2 className="text-4xl sm:text-5xl font-heading font-bold text-left mb-16">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Work Experience</span>
      </h2>

      <div className="space-y-8 relative">
        {workExperienceData.map((experience, index) => {
          const Icon = avatarIcons[index % avatarIcons.length];
          const colorClass = avatarColors[index % avatarColors.length];

          // Filter projects related to the current job experience based on company and role (case-insensitive)
          const relatedProjects = projectData.filter(
            project =>
              project.company.toLowerCase() === experience.company.toLowerCase() &&
              project.role.toLowerCase() === experience.title.toLowerCase()
          );

          return (
            <WorkExperienceItem
              key={index}
              icon={<Icon className={`text-2xl ${colorClass}`} />}
              title={experience.title}
              date={experience.date}
              company={experience.company}
              location={experience.location}
              description={experience.description}
              responsibilities={experience.responsibilities}
              tools={experience.tools}
              projects={relatedProjects}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WorkExperience;
