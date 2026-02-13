import React from 'react';
import { headerData } from '../../data/data';
import './Header.css'; // Import the CSS file for animations

const Header = () => {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-dark-200 via-dark to-dark opacity-50"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] -z-10"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading font-bold mb-6 tracking-tight animate-fade-in-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            {headerData.name}
          </span>
        </h1>

        <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mb-8 animate-zoom-in"></div>

        <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {headerData.title}
        </p>

        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {headerData.description}
        </p>

        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a href="#work-experience" className="px-8 py-3 rounded-full bg-white/5 border border-primary/50 text-primary hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all duration-300 font-medium tracking-wide">
            Explore My Work
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
