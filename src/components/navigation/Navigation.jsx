import './Navigation.css'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';


function Navigation() {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <div>
      <nav className="hidden md:flex">
        <ul>
          <li><a href="#work-experience">Work Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <button className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
        <Bars3Icon className='h-6 w-6 text-black'/>
      </button>

      {showMenu && 
        <nav className="md:hidden">
          <a href="#work-experience"  className="block">Work Experience</a>
          <a href="#projects" className="block">Projects</a>
          <a href="#technologies" className="block">Technologies</a>
          <a href="#education" className="block">Education</a>
          <a href="#contact" className="block">Contact</a>
        </nav>}
    </div>
  );
}

export default Navigation;
