import React from 'react';

const WorkExperienceItem = ({
    icon,
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
        <div className="w-full relative group">
            <div className="md:glass hover:bg-dark-100/40 p-0 md:p-8 rounded-none md:rounded-3xl transition-all duration-300 md:hover:border-primary/30 md:border md:border-white/5 border-b border-white/10 pb-8 md:pb-8 relative overflow-hidden group-hover:shadow-[0_0_20px_-5px_rgba(0,243,255,0.1)]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[60px] -z-10 group-hover:bg-primary/10 transition-colors"></div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                    <div className="flex items-center gap-6">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-primary text-3xl">
                            {icon}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
                            <div className="flex items-center text-sm text-gray-400 gap-3">
                                <span className="font-medium text-secondary">@ {company}</span>
                                <span>•</span>
                                <span>{location}</span>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary font-mono text-sm whitespace-nowrap self-start md:self-center">
                        {date}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Overview</h4>
                            <p className="text-gray-300 leading-relaxed text-base">{description}</p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities</h4>
                            <ul className="grid grid-cols-1 gap-2">
                                {responsibilities.map((item, index) => (
                                    <li key={index} className="flex items-start text-gray-400 text-sm">
                                        <span className="mr-3 text-primary mt-1.5 text-xs">▹</span>
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Technologies</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">{tools}</p>
                        </div>

                        {projects.length > 0 && (
                            <div>
                                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Related Projects</h4>
                                <div className="flex flex-wrap gap-2">
                                    {projects.map((project, index) => (
                                        <a
                                            key={index}
                                            href={`#${project.anchorId}`}
                                            className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-colors border border-white/10 hover:border-primary/30"
                                        >
                                            {project.title}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkExperienceItem;
