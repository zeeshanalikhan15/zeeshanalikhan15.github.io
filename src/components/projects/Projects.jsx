import React, { useEffect, useState } from 'react';
import { FaCode, FaServer, FaCloud, FaPhoneAlt, FaProjectDiagram, FaSyncAlt, FaCogs, FaDatabase, FaTools, FaNetworkWired, FaHeadset, FaUsers } from 'react-icons/fa'; // Added more unique icons
import { projectData } from '../../data/data';

const projectIcons = {
  'virtualQ.Net': <FaCogs className="text-blue-500 mr-2 text-xl" />,
  'PureConnect / Genesys / ININ Simulator': <FaServer className="text-green-500 mr-2 text-xl" />,
  'X-Agent Application for ININ': <FaPhoneAlt className="text-purple-500 mr-2 text-xl" />,
  'Connector Auto Updater': <FaSyncAlt className="text-orange-500 mr-2 text-xl" />,
  'Avaya Elite Simulator': <FaProjectDiagram className="text-red-500 mr-2 text-xl" />,
  'Avaya CIE Connector': <FaNetworkWired className="text-teal-500 mr-2 text-xl" />,
  'vQube Asterisk Connector': <FaDatabase className="text-indigo-500 mr-2 text-xl" />,
  'Voxtron QConnect': <FaTools className="text-yellow-500 mr-2 text-xl" />,
  'Avaya Elite Connector': <FaHeadset className="text-purple-600 mr-2 text-xl" />, // Added unique icon
  'Avaya AACC Connector': <FaNetworkWired className="text-blue-600 mr-2 text-xl" />, // Added unique icon
  'PureConnect / Genesys / ININ Contact Center Integration with Afiniti': <FaUsers className="text-green-600 mr-2 text-xl" />, // Added unique icon
  'Agent Application for Afiniti': <FaPhoneAlt className="text-orange-600 mr-2 text-xl" />, // Added unique icon
};

const Projects = () => {
  const [highlightedProject, setHighlightedProject] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const anchorId = window.location.hash.replace('#', '');
      setHighlightedProject(anchorId);

      if (anchorId) {
        setTimeout(() => setHighlightedProject(null), 2000); // Remove highlight after 2 seconds
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Trigger on initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section id="projects" className="my-10 md:my-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl sm:text-5xl font-heading font-bold text-left mb-16">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            className={`md:glass p-0 md:p-6 rounded-none md:rounded-2xl relative transition-all duration-300 md:hover:transform md:hover:-translate-y-2 md:hover:shadow-[0_0_25px_-5px_rgba(0,243,255,0.2)] md:border md:border-white/5 border-b border-white/10 pb-8 md:pb-6 ${highlightedProject === project.anchorId ? 'ring-2 ring-primary shadow-[0_0_30px_rgba(0,243,255,0.4)]' : ''
              }`}
          >
            <span id={project.anchorId} className="absolute -top-28"></span> {/* Anchor placement */}

            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full rounded-tr-2xl -z-10"></div>

            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-dark-200 text-primary text-xl">
                {projectIcons[project.title] || <FaCode />}
              </div>
              <h4 className="ml-3 text-lg font-bold text-white leading-tight">{project.title}</h4>
            </div>

            <p className="text-sm text-gray-300 mb-4 line-clamp-3">{project.description}</p>

            <div className="mb-4">
              <h5 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Technologies</h5>
              <p className="text-xs text-gray-400 font-mono">{project.technologies}</p>
            </div>

            <div className="mb-4">
              <h5 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Features</h5>
              <ul className="list-disc list-inside text-xs text-gray-400 space-y-1">
                {project.features.split(', ').slice(0, 3).map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>

            {project.links && project.links.length > 0 && (
              <div className="flex gap-3 mt-auto pt-4 border-t border-white/10">
                {project.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-white hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {link.label} <span aria-hidden="true">&rarr;</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
