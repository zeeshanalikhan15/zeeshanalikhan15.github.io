import React from 'react';
import Navigation from '../navigation/Navigation';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <Navigation />
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 font-retro">Zeeshan Ali Khan</h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3 font-retro">Software Engineer</p>
        <p className="break-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 font-retro text-center">VoIP & Contact Center Solution Specialist: Aligning Advanced Communication Systems with Business Needs</p>
      </div>
    </header>
  );
};

export default Header;
