import React from 'react';

const Project = ({ title, description, technologies, features, links = [] }) => {
    return (
        <div className="relative bg-gray-900 p-8 rounded-md shadow-md text-left">
            <div className="absolute left-0 top-0 h-full w-1 bg-matrix-green"></div>
            <div className="relative pl-2 sm:pl-16 mt-2">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl matrix-font mb-2 text-matrix-green">{title}</h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 text-matrix-green matrix-font">{description}</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 text-matrix-green matrix-font">Technologies: {technologies}</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 text-matrix-green matrix-font">Features: {features}</p>
                {links.length > 0 && (
                    <>
                        <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-matrix-green matrix-font">Links</h4>
                        <ul className="list-disc list-inside text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 text-matrix-green matrix-font">
                            {links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-matrix-green hover:underline">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};

export default Project;
