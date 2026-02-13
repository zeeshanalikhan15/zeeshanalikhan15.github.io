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
    <section id="technologies" className="my-10 md:my-20 w-full max-w-none px-4 sm:px-6 md:px-12 lg:px-24">
      <h2 className="text-4xl sm:text-5xl font-heading font-bold text-left mb-16">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Technologies</span>
      </h2>

      <div className="space-y-12">
        {technologiesData.map((tech, index) => (
          <div key={index} className="md:glass p-0 md:p-8 rounded-none md:rounded-3xl relative overflow-hidden transition-all duration-300 md:hover:shadow-[0_0_30px_-10px_rgba(188,19,254,0.3)] md:border md:border-white/5 border-b border-white/10 pb-8 md:pb-8 text-left">
            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-[60px] -z-10"></div>

            <div className="flex items-center mb-8 border-b border-white/10 pb-4">
              <div className="p-3 rounded-xl bg-white/5 text-secondary text-2xl">
                {categoryIcons[tech.category] || <FaTools />}
              </div>
              <h3 className="ml-4 text-2xl font-bold text-white text-left">{tech.category}</h3>
            </div>

            {tech.category === 'Contact Center Platforms' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tech.items.map((platform, platformIndex) => (
                  <div key={platformIndex} className="md:bg-dark-100/50 p-0 md:p-6 md:rounded-xl md:hover:bg-dark-100/80 transition-colors md:border md:border-white/5 text-left border-b border-white/10 md:border-b-0 pb-6 md:pb-0 mb-6 md:mb-0">
                    <div className="flex items-center mb-3">
                      <div className="text-primary text-xl mr-3">
                        {platformIcons[platform.platform.split(' ')[0]] || <FaDatabase />}
                      </div>
                      <h4 className="text-lg font-bold text-white text-left">{platform.platform}</h4>
                    </div>
                    <p className="text-sm text-gray-400 mb-4 text-left">{platform.description}</p>

                    <div className="space-y-3 pt-4 md:pt-0 border-t border-white/5 md:border-t-0 mt-4 md:mt-0">
                      <div>
                        <h5 className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1 text-left">APIs</h5>
                        <div className="flex flex-wrap gap-2 justify-start">
                          {platform.apis.map((api, i) => (
                            <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">{api}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1 text-left">Components</h5>
                        <ul className="list-disc list-inside text-xs text-gray-400 text-left">
                          {platform.components.slice(0, 2).map((comp, i) => (
                            <li key={i}>{comp}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-4 justify-start">
                {tech.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center px-4 py-3 rounded-xl bg-dark-100/50 border border-white/5 hover:border-primary/50 hover:bg-dark-200/80 transition-all duration-300 group">
                    <span className="text-xl mr-3 text-gray-400 group-hover:text-primary transition-colors">
                      {languageIcons[item] || frameworkIcons[item] || developmentToolsIcons[item] || <FaCode />}
                    </span>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
