import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Overview from './components/overview/Overview';
import ContactInfo from './components/contact/ContactInfo';
import WorkExperience from './components/work/WorkExperience';
import Projects from './components/projects/Projects';
import Technologies from './components/tech/Technologies';
import Education from './components/education/Education';

const App = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <Overview />
      <div className="w-full">
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
