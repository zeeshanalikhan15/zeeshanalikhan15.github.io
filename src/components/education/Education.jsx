import React from 'react';
import { educationData } from '../../data/data';
import { FaBook, FaNewspaper, FaCode } from 'react-icons/fa'; // Replace SiCompiler with FaCode
import fastLogo from '../../assets/fast-nuces-logo.png';

const Education = () => {
    return (
        <section id="education" className="my-8 p-6 bg-gray-100 shadow-md rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Education</h2>
            <div className="space-y-10">
                {educationData.map((education, index) => (
                    <div key={index} className="relative bg-white p-8 rounded-md shadow-md text-left">
                        <div className="flex items-center mb-4">
                            <img src={fastLogo} alt="FAST-NUCES Logo" className="w-12 h-12 mr-4" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">{education.degree}</h3>
                                <p className="text-lg text-gray-600">{education.institution}</p>
                                <p className="text-sm text-gray-500">{education.period}</p>
                            </div>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-700 mb-2">Courses</h4>
                        <ul className="list-disc list-inside text-gray-600 mb-4">
                            {education.courses.map((course, courseIndex) => (
                                <li key={courseIndex} className="flex items-center">
                                    <FaBook className="text-blue-600 mr-2" />
                                    {course}
                                </li>
                            ))}
                        </ul>
                        <h4 className="text-lg font-semibold text-gray-700 mb-2">Projects</h4>
                        <div className="space-y-4">
                            {education.projects.map((project, projIndex) => (
                                <div key={projIndex} className="flex items-start">
                                    {project.title.includes('Compiler') ? (
                                        <FaCode className="text-green-600 text-2xl mr-4" /> // Use FaCode for compiler projects
                                    ) : (
                                        <FaNewspaper className="text-yellow-600 text-2xl mr-4" />
                                    )}
                                    <div>
                                        <h5 className="text-md font-bold text-gray-800">{project.title}</h5>
                                        <p className="text-sm text-gray-600">{project.description}</p>
                                        <p className="text-sm text-gray-500">
                                            <span className="font-semibold">Technologies:</span> {project.technologies}
                                        </p>
                                    </div>
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