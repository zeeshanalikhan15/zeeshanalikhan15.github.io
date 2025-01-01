import React from 'react';

const WorkExperienceItem = ({ date, title, company, location, description, responsibilities, tools }) => {
    return (
        <div className="relative bg-gray-900 p-8 rounded-md shadow-md text-left">
            <div className="absolute left-0 top-0 h-full w-1 bg-matrix-green"></div>
            <div className="relative pl-2 sm:pl-16 mt-2">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl matrix-font mb-2 text-matrix-green">{title}</h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 text-matrix-green matrix-font">{company}</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 text-matrix-green matrix-font">{location}</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 text-matrix-green matrix-font">{date}</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 text-matrix-green matrix-font">{description}</p>
                <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-matrix-green matrix-font">Responsibilities</h4>
                <ul className="list-disc list-inside text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 text-matrix-green matrix-font">
                    {responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-matrix-green matrix-font">Tools</h4>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 text-matrix-green matrix-font">{tools}</p>
            </div>
        </div>
    );
};

export default WorkExperienceItem;
