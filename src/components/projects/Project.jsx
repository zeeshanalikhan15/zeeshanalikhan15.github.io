import React from 'react';

const Project = ({ title, description, technologies, features, links = [] }) => {
    return (
        <div className="relative bg-white p-8 rounded-md shadow-md text-left overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-1 bg-gray-300"></div>
            <div className="relative pl-16 mt-2">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-retro mb-2 break-words">{title}</h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4">{description}</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-2">Technologies:</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4">{technologies}</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-2">Features:</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4">{features}</p>
                {links.length > 0 && (
                    <>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-2">Links:</p>
                        {links.map((link, index) => (
                            <p key={index} className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 break-words">
                                {link.label}: <a href={link.url} className="text-blue-600 hover:underline">{link.url}</a>
                            </p>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default Project;
