import React from 'react';
import { headerData } from '../../data/data';
import './Header.css'; // Import the CSS file for animations

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 w-full">
      <div className="flex flex-col items-center mb-6 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 font-retro animate-grow">{headerData.name}</h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-3 font-retro animate-grow delay-1">{headerData.title}</p>
        <p className="break-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 font-retro text-center animate-grow delay-2">{headerData.description}</p>
      </div>
    </header>
  );
};

export default Header;
