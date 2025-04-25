import React from 'react';
import WorkExperienceItem from './WorkExperienceItem';
import { workExperienceData } from '../../data/data';
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
      <div className="space-y-12">
        {workExperienceData.map((experience, index) => {
          const Icon = avatarIcons[index % avatarIcons.length];
          const colorClass = avatarColors[index % avatarColors.length];
          return (
            <WorkExperienceItem
              key={index}
              date={experience.date}
              title={
                <div className="flex items-center space-x-3">
                  <Icon className={`text-2xl ${colorClass}`} />
                  <span>{experience.title}</span>
                </div>
              }
              company={experience.company}
              location={experience.location}
              description={experience.description}
              responsibilities={experience.responsibilities}
              tools={experience.tools}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WorkExperience;
