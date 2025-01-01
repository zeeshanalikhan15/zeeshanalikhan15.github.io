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
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 seconds
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
    <header className="main-header">
      <div className="text-container">
        <h1 className="name matrix-font">
          {displayedText.name}
          {(currentTyping === 'name' || showCursor) && <span className="blinking-cursor">_</span>}
        </h1>
        <h3 className="title matrix-font">
          {displayedText.title}
          {currentTyping === 'title' && <span className="blinking-cursor">_</span>}
        </h3>
        <h5 className="description matrix-font">
          {displayedText.description}
          {currentTyping === 'description' && <span className="blinking-cursor">_</span>}
        </h5>
      </div>
    </header>
  );
};

export default Header;
