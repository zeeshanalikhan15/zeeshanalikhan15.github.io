import React from 'react';

const OverviewExperienceItem = ({ date, title, company, location }) => {
    return (
        <li className="mb-6 relative pl-8">
            <div className="bg-white p-4 rounded-md shadow-md relative z-10">
                <h4 className="text-xl font-semibold">{date}</h4>
                <p className="text-lg italic">{title} @ {company} - {location}</p>
            </div>
            <div className="absolute left-0 top-4 w-4 h-4 bg-white border-4 border-gray-300 rounded-full"></div>
        </li>
    );
};

export default OverviewExperienceItem;
