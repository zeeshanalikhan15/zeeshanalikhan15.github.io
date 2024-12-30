import React from 'react';
import { educationData } from '../../data/data';

const Education = () => {
    return (
        <section id="education" className="my-8 p-6 bg-gray-400 shadow-md rounded-lg">
            <h2 className="text-3xl font-bold mb-6 bg-gray-400 p-2 rounded-md">Education</h2>
            <div className="space-y-10">
                {educationData.map((education, index) => (
                    <div key={index} className="relative bg-white p-8 rounded-md shadow-md text-left">
                        <div className="absolute left-0 top-0 h-full w-1 bg-gray-300"></div>
                        <div className="relative pl-2 sm:pl-16 mt-2">
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-retro mb-2">{education.degree}</h3>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4">{education.institution}</p>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4">{education.location}</p>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4">{education.period}</p>
                            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">Courses</h4>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4">{education.courses.join(', ')}</p>
                            <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">Projects</h4>
                            {education.projects.map((project, projIndex) => (
                                <div key={projIndex} className="mb-4">
                                    <h5 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">{project.title}</h5>
                                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4">{project.description}</p>
                                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4">Technologies: {project.technologies}</p>
                                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Features: {project.features}</p>
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