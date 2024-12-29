import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Overview from './components/overview/Overview';
import ContactInfo from './components/contact/ContactInfo';
import WorkExperience from './components/work/WorkExperience';
import Projects from './components/projects/Projects';
import Technologies from './components/tech/Technologies';
import Education from './components/education/Education';
import Navigation from './components/navigation/Navigation';

const App = () => {
  return (
    <div className="flex flex-col items-center w-full pt-16">
      <Navigation />
      <Header />
      <div className="w-full">
        <Overview />
        <WorkExperience />
        <Projects />
        <Technologies />
        <Education />
        <ContactInfo />
      </div>
    </div>
  );
};

export default App;
