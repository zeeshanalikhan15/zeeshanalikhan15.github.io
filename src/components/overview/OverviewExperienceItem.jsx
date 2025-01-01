import React from 'react';

const OverviewExperienceItem = ({ date, title, company, location }) => {
    return (
        <li className="relative pl-2 mb-6">
            <div className="absolute left-0 top-0 h-full w-1 bg-matrix-green"></div>
            <div className="relative pl-2 sm:pl-10 mt-2">
                <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl matrix-font mb-2 text-matrix-green">{title}</h4>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 text-matrix-green matrix-font">{company}</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 text-matrix-green matrix-font">{location}</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 text-matrix-green matrix-font">{date}</p>
            </div>
        </li>
    );
};

export default OverviewExperienceItem;
