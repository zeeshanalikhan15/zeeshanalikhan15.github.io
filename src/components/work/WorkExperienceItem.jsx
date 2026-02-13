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
    projects,
}) => {
    return (
        <div className={`flex flex-col md:flex-row ${isLeftAligned ? 'md:flex-row-reverse' : ''} items-center w-full group`}>
            {/* Timeline Dot */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-dark border-2 border-primary z-10 group-hover:scale-150 group-hover:bg-primary transition-all duration-300 shadow-[0_0_10px_rgba(0,243,255,0.5)]"></div>

            <div className={`w-full md:w-1/2 ${isLeftAligned ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className="glass hover:bg-dark-100/40 p-6 rounded-2xl transition-all duration-300 hover:border-primary/30 border border-white/5 relative overflow-hidden group-hover:shadow-[0_0_20px_-5px_rgba(0,243,255,0.1)]">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] -z-10 group-hover:bg-primary/10 transition-colors"></div>

                    <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 rounded-full bg-white/5 border border-white/10 text-primary">
                            {icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">{title}</h3>
                            <p className="text-sm text-primary">{date}</p>
                        </div>
                    </div>

                    <div className="mb-4">
                        <span className="text-sm font-medium text-gray-400">@ {company}</span>
                        <span className="text-sm text-gray-500 mx-2">|</span>
                        <span className="text-sm text-gray-500">{location}</span>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">{description}</p>

                    <div className="mb-4">
                        <p className="text-sm font-semibold text-white mb-2">Responsibilities:</p>
                        <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                            {responsibilities.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-4">
                        <p className="text-sm font-semibold text-white mb-2">Tools:</p>
                        <p className="text-sm text-gray-400">{tools}</p>
                    </div>

                    {projects.length > 0 && (
                        <div>
                            <p className="text-sm font-semibold text-white mb-2">Key Projects:</p>
                            <div className="flex flex-wrap gap-2">
                                {projects.map((project, index) => (
                                    <a
                                        key={index}
                                        href={`#${project.anchorId}`}
                                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors border border-primary/20"
                                    >
                                        {project.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="w-full md:w-1/2"></div>
        </div>
    );
};

export default WorkExperienceItem;
