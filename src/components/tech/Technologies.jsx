import React from 'react';
import { technologiesData } from '../../data/data';
import { FaCode, FaCogs, FaCloud, FaTools, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaReact, FaNodeJs, FaPhoneAlt, FaNetworkWired, FaWindowMaximize } from 'react-icons/fa';
import { SiRuby, SiCplusplus, SiDotnet, SiTailwindcss, SiBoost, SiRubyonrails } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

const categoryIcons = {
  Languages: <FaCode className="text-blue-600 text-3xl mr-4" />,
  Frameworks: <FaCogs className="text-green-600 text-3xl mr-4" />,
  'Development Tools': <FaTools className="text-yellow-600 text-3xl mr-4" />,
  'Contact Center Technologies': <FaDatabase className="text-purple-600 text-3xl mr-4" />,
  'Cloud and Communication Services': <FaCloud className="text-teal-600 text-3xl mr-4" />,
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

const Technologies = () => {
  return (
    <section id="technologies" className="my-8 p-6 bg-gray-200 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Technologies</h2>
      <div className="space-y-10">
        {technologiesData.map((tech, index) => (
          <div key={index} className="relative bg-white p-8 rounded-md shadow-md text-left">
            <div className="flex items-center mb-4">
              {categoryIcons[tech.category] || <FaTools className="text-gray-600 text-3xl mr-4" />}
              <h3 className="text-xl font-bold text-gray-800">{tech.category}</h3>
            </div>
            <ul className="list-disc list-inside text-gray-600 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tech.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center">
                  {languageIcons[item] || frameworkIcons[item] || <FaCode className="text-blue-500 mr-2 text-xl" />}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
