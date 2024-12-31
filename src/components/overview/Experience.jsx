import React from 'react';
import { workExperienceData } from '../../data/data';
import OverviewExperienceItem from './OverviewExperienceItem';

const Experience = () => {
    return (
        <div className="relative bg-white p-8 rounded-md shadow-md text-left">
            <h3 className="text-2xl font-bold mb-4">Work Experience</h3>
            <ul className="list-none p-0 relative">
                <div className="absolute left-4 top-0 w-1 bg-gray-300 h-full"></div>
                {workExperienceData.map((experience, index) => (
                    <OverviewExperienceItem
                        key={index}
                        date={experience.date}
                        title={experience.title}
                        company={experience.company}
                        location={experience.location}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Experience;
