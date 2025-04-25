import React from 'react';
import WorkExperienceItem from './WorkExperienceItem';
import { workExperienceData, projectData } from '../../data/data'; // Import project data
import { FaUserGraduate, FaUserTie, FaUserCog, FaUserAstronaut } from 'react-icons/fa';

const WorkExperience = () => {
  const avatarIcons = [FaUserGraduate, FaUserTie, FaUserCog, FaUserAstronaut];
  const avatarColors = ['text-blue-500', 'text-green-500', 'text-yellow-500', 'text-red-500'];

  return (
    <section id="work-experience" className="my-8 p-6 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-2 bg-gray-100 p-2 rounded-md text-center">Work Experience</h2>
      <p className="text-lg text-gray-600 mb-6 text-center">
        A detailed overview of my professional journey and key contributions.
      </p>
      <div className="space-y-8">
        {workExperienceData.map((experience, index) => {
          const Icon = avatarIcons[index % avatarIcons.length];
          const colorClass = avatarColors[index % avatarColors.length];
          const isLeftAligned = index % 2 === 0;

          // Filter projects related to the current job experience based on company and role
          const relatedProjects = projectData.filter(
            project => project.company === experience.company && project.role === experience.title
          );

          return (
            <WorkExperienceItem
              key={index}
              icon={<Icon className={`text-2xl ${colorClass}`} />}
              isLeftAligned={isLeftAligned}
              title={experience.title}
              date={experience.date}
              company={experience.company}
              location={experience.location}
              description={experience.description}
              responsibilities={experience.responsibilities}
              tools={experience.tools}
              projects={relatedProjects} // Pass related projects
            />
          );
        })}
      </div>
    </section>
  );
};

export default WorkExperience;
