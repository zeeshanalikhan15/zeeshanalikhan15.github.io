import React from 'react';
import { technologiesData } from '../../data/data';

const Technologies = () => {
  return (
    <section id="technologies" className="my-8 p-6 bg-matrix-bg shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-matrix-green matrix-font">Technologies</h2>
      <div className="space-y-10">
        {technologiesData.map((tech, index) => (
          <div key={index} className="relative bg-gray-900 p-8 rounded-md shadow-md text-left">
            <div className="absolute left-0 top-0 h-full w-1 bg-matrix-green"></div>
            <div className="relative pl-2 sm:pl-16 mt-2">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl matrix-font mb-2 text-matrix-green">{tech.category}</h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 text-matrix-green matrix-font">{tech.items.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
