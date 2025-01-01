import React, { useEffect, useState } from 'react';
import { headerData } from '../../data/data';
import './Header.css';

const Header = () => {
  const [displayedText, setDisplayedText] = useState({ name: '', title: '', description: '' });
  const [currentTyping, setCurrentTyping] = useState(''); // Tracks which line is being typed
  const [showCursor, setShowCursor] = useState(true); // To show cursor before typing starts

  useEffect(() => {
    const typeText = async (text, key, delay) => {
      setCurrentTyping(key); // Set the current line being typed
      for (let i = 0; i <= text.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, delay));
        setDisplayedText((prev) => ({
          ...prev,
          [key]: text.slice(0, i),
        }));
      }
      setCurrentTyping(''); // Clear after typing is done
    };

    const animateTyping = async () => {
      await new Promise((resolve) => setTimeout(resolve, 0)); // Wait for 1 seconds
      setShowCursor(false); // Hide cursor before typing starts
      await typeText(headerData.name, 'name', 100);
      await typeText(headerData.title, 'title', 100);
      await typeText(headerData.description, 'description', 100);
    };

    animateTyping();

    return () => {
      setDisplayedText({ name: '', title: '', description: '' });
      setCurrentTyping('');
    };
  }, []);

  return (
    <header className="bg-matrix-bg text-matrix-green p-4 w-full">
      <div className="flex flex-col items-center mb-6 w-full">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-matrix">
          {displayedText.name}
          {(currentTyping === 'name' || showCursor) && <span className="blinking-cursor">_</span>}
        </h1>
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-matrix">
          {displayedText.title}
          {currentTyping === 'title' && <span className="blinking-cursor">_</span>}
        </h3>
        <h5 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-matrix">
          {displayedText.description}
          {currentTyping === 'description' && <span className="blinking-cursor">_</span>}
        </h5>
      </div>
    </header>
  );
};

export default Header;
