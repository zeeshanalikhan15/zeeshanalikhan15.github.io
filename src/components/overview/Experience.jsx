import React from 'react';
import { workExperienceData } from '../../data/data';
import OverviewExperienceItem from './OverviewExperienceItem';

const Experience = () => {
    return (
        <div className="relative bg-matrix-bg p-8 rounded-md shadow-md text-left">
            <h3 className="text-2xl font-bold mb-4 text-matrix-green matrix-font">Work Experience</h3>
            <ul className="list-none p-0 relative pl-12">
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
