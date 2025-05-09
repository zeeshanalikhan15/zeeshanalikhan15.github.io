import React from 'react';
import { technologiesData } from '../../data/data';
import { FaCode, FaCogs, FaCloud, FaTools, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaReact, FaNodeJs, FaPhoneAlt, FaNetworkWired, FaWindowMaximize, FaGitAlt, FaGithub, FaBitbucket, FaTrello, FaJira, FaSlack, FaMicrosoft, FaHeadset, FaComments } from 'react-icons/fa'; // Added FaComments
import { SiRuby, SiCplusplus, SiDotnet, SiTailwindcss, SiBoost, SiRubyonrails, SiPostman, SiWireshark, SiConfluence, SiAsterisk } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

const categoryIcons = {
  Languages: <FaCode className="text-blue-600 text-3xl mr-4" />,
  Frameworks: <FaCogs className="text-green-600 text-3xl mr-4" />,
  'Development Tools': <FaTools className="text-yellow-600 text-3xl mr-4" />,
  'Contact Center Technologies': <FaDatabase className="text-purple-600 text-3xl mr-4" />,
  'Cloud and Communication Services': <FaCloud className="text-teal-600 text-3xl mr-4" />,
  'Contact Center Platforms': <FaHeadset className="text-purple-600 text-3xl mr-4" />, // Updated to FaHeadset
};

const platformIcons = {
  ININ: <FaComments className="text-blue-500 mr-2 text-xl" />, // Updated to FaComments
  Avaya: <FaPhoneAlt className="text-red-500 mr-2 text-xl" />,
  Twilio: <FaCloud className="text-blue-500 mr-2 text-xl" />,
  Asterisk: <SiAsterisk className="text-orange-500 mr-2 text-xl" />,
  Voxtron: <FaTools className="text-green-500 mr-2 text-xl" />,
};

const languageIcons = {
  'C#': <TbBrandCSharp className="text-blue-600 mr-2 text-xl" />,
  Ruby: <SiRuby className="text-red-600 mr-2 text-xl" />,
  'C++': <SiCplusplus className="text-blue-500 mr-2 text-xl" />,
  JavaScript: <FaJs className="text-yellow-500 mr-2 text-xl" />,
  HTML: <FaHtml5 className="text-orange-600 mr-2 text-xl" />,
  CSS: <FaCss3Alt className="text-blue-500 mr-2 text-xl" />,
  Python: <FaPython className="text-green-500 mr-2 text-xl" />,
  Java: <FaJava className="text-red-500 mr-2 text-xl" />,
  SQL: <FaDatabase className="text-blue-500 mr-2 text-xl" />,
};

const frameworkIcons = {
  'Dot Net framework': <SiDotnet className="text-purple-600 mr-2 text-xl" />,
  'Dot Net core': <SiDotnet className="text-purple-600 mr-2 text-xl" />,
  WPF: <FaWindowMaximize className="text-blue-500 mr-2 text-xl" />,
  WinForms: <FaCode className="text-blue-500 mr-2 text-xl" />,
  'WCF web services REST/SOAP': <FaNetworkWired className="text-blue-500 mr-2 text-xl" />,
  'React.js': <FaReact className="text-blue-500 mr-2 text-xl" />,
  'Node.js': <FaNodeJs className="text-green-500 mr-2 text-xl" />,
  Tailwind: <SiTailwindcss className="text-teal-500 mr-2 text-xl" />,
  Boost: <SiBoost className="text-blue-500 mr-2 text-xl" />,
  'Ruby on Rails (RoR)': <SiRubyonrails className="text-red-500 mr-2 text-xl" />,
  'Network Programming': <FaCode className="text-blue-500 mr-2 text-xl" />,
  'TCP/IP': <FaCode className="text-blue-500 mr-2 text-xl" />,
  'Socket Programming': <FaCode className="text-blue-500 mr-2 text-xl" />,
  'Multi-Threading': <FaCode className="text-blue-500 mr-2 text-xl" />,
  VOIP: <FaPhoneAlt className="text-blue-500 mr-2 text-xl" />,
  SIP: <FaCode className="text-blue-500 mr-2 text-xl" />,
};

const developmentToolsIcons = {
  'Visual Studio': <FaCode className="text-blue-500 mr-2 text-xl" />,
  TFS: <FaCode className="text-blue-500 mr-2 text-xl" />,
  Jira: <FaJira className="text-blue-600 mr-2 text-xl" />,
  Trello: <FaTrello className="text-blue-500 mr-2 text-xl" />,
  Git: <FaGitAlt className="text-orange-500 mr-2 text-xl" />,
  Bitbucket: <FaBitbucket className="text-blue-500 mr-2 text-xl" />,
  Github: <FaGithub className="text-gray-800 mr-2 text-xl" />,
  Postman: <SiPostman className="text-orange-500 mr-2 text-xl" />,
  Rollbar: <FaTools className="text-purple-500 mr-2 text-xl" />,
  Wireshark: <SiWireshark className="text-blue-500 mr-2 text-xl" />,
  'VS Code': <FaCode className="text-blue-500 mr-2 text-xl" />,
  'GitHub Copilot': <FaGithub className="text-gray-800 mr-2 text-xl" />,
  'OpenAI ChatGPT': <FaCode className="text-green-500 mr-2 text-xl" />,
  'Meta.ai': <FaCode className="text-blue-500 mr-2 text-xl" />,
  Confluence: <SiConfluence className="text-blue-500 mr-2 text-xl" />,
  Slack: <FaSlack className="text-purple-500 mr-2 text-xl" />,
  'Microsoft Teams': <FaMicrosoft className="text-blue-500 mr-2 text-xl" />,
};

const Technologies = () => {
  return (
    <section id="technologies" className="my-8 p-6 bg-gray-200 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">Technologies</h2>
      <div className="space-y-8">
        {technologiesData.map((tech, index) => (
          <div key={index} className="relative bg-gray-50 p-6 rounded-md shadow-sm text-left">
            <div className="flex items-center mb-3">
              {categoryIcons[tech.category] || <FaTools className="text-gray-500 text-2xl mr-3" />}
              <h3 className="text-lg font-medium text-gray-800">{tech.category}</h3>
            </div>
            {tech.category === 'Contact Center Platforms' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tech.items.map((platform, platformIndex) => (
                  <div key={platformIndex} className="bg-gray-100 p-4 rounded-md shadow-sm">
                    <div className="flex items-center mb-2">
                      {platformIcons[platform.platform.split(' ')[0]] || <FaDatabase className="text-gray-500 mr-2 text-xl" />}
                      <h4 className="text-lg font-semibold text-gray-700">{platform.platform}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{platform.description}</p>
                    <h5 className="text-md font-bold text-gray-800 mt-2">APIs:</h5>
                    <ul className="list-disc list-inside text-gray-600">
                      {platform.apis.map((api, apiIndex) => (
                        <li key={apiIndex}>{api}</li>
                      ))}
                    </ul>
                    <h5 className="text-md font-bold text-gray-800 mt-2">Components:</h5>
                    <ul className="list-disc list-inside text-gray-600">
                      {platform.components.map((component, componentIndex) => (
                        <li key={componentIndex}>{component}</li>
                      ))}
                    </ul>
                    <h5 className="text-md font-bold text-gray-800 mt-2">Management:</h5>
                    <ul className="list-disc list-inside text-gray-600">
                      {platform.management.map((management, managementIndex) => (
                        <li key={managementIndex}>{management}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="list-disc list-inside text-gray-600 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {tech.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    {languageIcons[item] || frameworkIcons[item] || developmentToolsIcons[item] || <FaCode className="text-gray-500 mr-2 text-lg" />}
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
