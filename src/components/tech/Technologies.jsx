import React from 'react';
import { technologiesData } from '../../data/data';
import { FaCode, FaCogs, FaCloud, FaTools, FaDatabase } from 'react-icons/fa';

const categoryIcons = {
  Languages: <FaCode className="text-blue-600 text-3xl mr-4" />,
  Frameworks: <FaCogs className="text-green-600 text-3xl mr-4" />,
  'Development Tools': <FaTools className="text-yellow-600 text-3xl mr-4" />,
  'Contact Center Technologies': <FaDatabase className="text-purple-600 text-3xl mr-4" />,
  'Cloud and Communication Services': <FaCloud className="text-teal-600 text-3xl mr-4" />,
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
                  <FaCode className="text-blue-500 mr-2 text-xl" /> {/* Default icon */}
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
