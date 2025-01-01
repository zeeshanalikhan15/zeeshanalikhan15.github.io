import React from 'react';
import { educationData } from '../../data/data';

const Education = () => {
    return (
        <section id="education" className="my-8 p-6 bg-matrix-bg shadow-md rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-matrix-green matrix-font">Education</h2>
            <div className="space-y-10">
                {educationData.map((education, index) => (
                    <div key={index} className="relative bg-gray-900 p-8 rounded-md shadow-md text-left">
                        <div className="absolute left-0 top-0 h-full w-1 bg-matrix-green"></div>
                        <div className="relative pl-2 sm:pl-16 mt-2">
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl matrix-font mb-2 text-matrix-green">{education.degree}</h3>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 text-matrix-green matrix-font">{education.institution}</p>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 text-matrix-green matrix-font">{education.location}</p>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 text-matrix-green matrix-font">{education.period}</p>
                            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-matrix-green matrix-font">Courses</h4>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 text-matrix-green matrix-font">{education.courses.join(', ')}</p>
                            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-matrix-green matrix-font">Projects</h4>
                            {education.projects.map((project, projIndex) => (
                                <div key={projIndex} className="mb-4">
                                    <h5 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-matrix-green matrix-font">{project.title}</h5>
                                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 text-matrix-green matrix-font">{project.description}</p>
                                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 text-matrix-green matrix-font">Technologies: {project.technologies}</p>
                                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-matrix-green matrix-font">Features: {project.features}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;