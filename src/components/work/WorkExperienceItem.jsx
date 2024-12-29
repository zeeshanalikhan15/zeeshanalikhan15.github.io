import React from 'react';

const WorkExperienceItem = ({ date, title, company, location, description, responsibilities, tools }) => {
    return (
        <div className="relative bg-white p-8 rounded-md shadow-md text-left">
            <div className="absolute left-0 top-0 h-full w-1 bg-gray-300"></div>
            <div className="absolute left-0 top-0 -ml-8 mt-2 bg-gray-800 text-white rounded-full px-3 py-1 text-sm font-medium">{date}</div>
            <div className="relative pl-16 mt-2">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-retro mb-2">
                    {title} @ {company}
                    <span className="italic text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"> - {location}</span>
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4">{description}</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-2">Key Responsibilities:</p>
                <ul className="list-disc list-inside text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4">
                    {responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                    ))}
                </ul>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-2">Tools & Technologies:</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4">{tools}</p>
            </div>
        </div>
    );
};

export default WorkExperienceItem;
