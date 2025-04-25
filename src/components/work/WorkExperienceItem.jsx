import React from 'react';

const WorkExperienceItem = ({
    icon,
    isLeftAligned,
    title,
    date,
    company,
    location,
    description,
    responsibilities,
    tools,
}) => {
    return (
        <div className={`flex ${isLeftAligned ? 'md:justify-start' : 'md:justify-end'} md:space-x-6`}>
            <div className="w-full md:w-2/3 bg-gray-50 p-5 rounded-md shadow-sm text-left">
                <div className="flex items-center space-x-3 mb-3">
                    {icon}
                    <div>
                        <span className="text-md font-medium text-gray-800">{title}</span>
                        <p className="text-sm text-gray-600">
                            {date} @ {company} - {location}
                        </p>
                    </div>
                </div>
                <div>
                    <p className="text-sm text-gray-600 mb-2">{description}</p>
                    <p className="text-sm font-semibold text-gray-700">Responsibilities:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 mb-2">
                        {responsibilities.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p className="text-sm font-semibold text-gray-700">Tools:</p>
                    <p className="text-sm text-gray-600">{tools}</p>
                </div>
            </div>
        </div>
    );
};

export default WorkExperienceItem;
