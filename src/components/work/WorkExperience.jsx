import React from 'react';
import WorkExperienceItem from './WorkExperienceItem';
import { workExperienceData } from '../../data/data';

const WorkExperience = () => {
  return (
    <section id="work-experience" className="my-8 p-6 bg-black shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 bg-black p-2 rounded-md text-green-500">Work Experience</h2>
      <div className="space-y-10">
        {workExperienceData.map((experience, index) => (
          <WorkExperienceItem
            key={index}
            date={experience.date}
            title={experience.title}
            company={experience.company}
            location={experience.location}
            description={experience.description}
            responsibilities={experience.responsibilities}
            tools={experience.tools}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
