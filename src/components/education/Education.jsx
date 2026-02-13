import React from 'react';
import { educationData } from '../../data/data';
import { FaBook, FaNewspaper, FaCode } from 'react-icons/fa';
import fastLogo from '../../assets/fast-nuces-logo.png';

const Education = () => {
    return (
        <section id="education" className="my-10 md:my-20 max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-left mb-16">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Education</span>
            </h2>
            <div className="space-y-10">
                {educationData.map((education, index) => (
                    <div key={index} className="md:glass p-0 md:p-8 rounded-none md:rounded-3xl relative overflow-hidden md:border md:border-white/5 md:hover:border-primary/30 transition-all duration-300 border-b border-white/10 pb-8 md:pb-8 text-left">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[50px] -z-10"></div>

                        <div className="flex flex-col md:flex-row items-start mb-8 text-left">
                            <div className="p-4 bg-white rounded-2xl mb-4 md:mb-0 md:mr-6">
                                <img src={fastLogo} alt="FAST-NUCES Logo" className="w-16 h-16 object-contain" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1 text-left">{education.degree}</h3>
                                <p className="text-lg text-primary text-left">{education.institution}</p>
                                <p className="text-base text-gray-400 text-left">{education.period}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2 text-left">Key Courses</h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {education.courses.map((course, courseIndex) => (
                                        <li key={courseIndex} className="flex items-center text-gray-300 text-sm">
                                            <FaBook className="text-secondary mr-2" />
                                            {course}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-white mb-4 border-b border-white/10 pb-2 text-left">Academic Projects</h4>
                                <div className="space-y-6">
                                    {education.projects.map((project, projIndex) => (
                                        <div key={projIndex} className="bg-dark-100/30 p-4 rounded-xl border border-white/5 text-left">
                                            <div className="flex items-center mb-2">
                                                <div className="text-accent mr-3 text-xl">
                                                    {project.title.includes('Compiler') ? <FaCode /> : <FaNewspaper />}
                                                </div>
                                                <h5 className="text-md font-bold text-white text-left">{project.title}</h5>
                                            </div>
                                            <p className="text-sm text-gray-400 mb-2 leading-relaxed text-left">{project.description}</p>
                                            <p className="text-xs text-gray-500 font-mono text-left">
                                                <span className="text-primary">Tech:</span> {project.technologies}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;