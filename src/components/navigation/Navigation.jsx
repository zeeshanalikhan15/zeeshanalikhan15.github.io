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
          <a href="#work-experience"  className="block hover:bg-sky-500 hover:text-white">Work Experience</a>
          <a href="#projects" className="block hover:bg-sky-500 hover:text-white">Projects</a>
          <a href="#technologies" className="block hover:bg-sky-500 hover:text-white">Technologies</a>
          <a href="#education" className="block hover:bg-sky-500 hover:text-white">Education</a>
          <a href="#contact" className="block hover:bg-sky-500 hover:text-white">Contact</a>
        </nav>}
    </div>
  );
}

export default Navigation;
