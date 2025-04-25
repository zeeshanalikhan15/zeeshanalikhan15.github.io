import React from 'react';
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
  return (
    <section id="projects" className="my-8 p-6 bg-gray-300 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md shadow-sm text-left">
            <div className="flex items-center mb-2">
              {projectIcons[project.title] || <FaCode className="text-gray-500 mr-2 text-xl" />}
              <h4 className="text-lg font-semibold text-gray-700">{project.title}</h4>
            </div>
            <p className="text-sm text-gray-600">{project.description}</p>
            <h5 className="text-md font-bold text-gray-800 mt-2">Technologies:</h5>
            <p className="text-sm text-gray-600">{project.technologies}</p>
            <h5 className="text-md font-bold text-gray-800 mt-2">Features:</h5>
            <ul className="list-disc list-inside text-gray-600">
              {project.features.split(', ').map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            {project.links && project.links.length > 0 && (
              <>
                <h5 className="text-md font-bold text-gray-800 mt-2">Links:</h5>
                <ul className="list-disc list-inside text-blue-600">
                  {project.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
