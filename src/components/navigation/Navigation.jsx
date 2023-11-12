


function Navigation() {


  return (
    <div>
      <br/>
      <nav className="hidden md:flex underline bg-slate-100 ml-5 mr-5">
        <a href="#work-experience"  className="block hover:bg-sky-500 hover:text-white ml-2">Work Experience</a>
        <a href="#projects" className="block hover:bg-sky-500 hover:text-white ml-4">Projects</a>
        <a href="#technologies" className="block hover:bg-sky-500 hover:text-white ml-4">Technologies</a>
        <a href="#education" className="block hover:bg-sky-500 hover:text-white ml-4">Education</a>
        <a href="#contact" className="block hover:bg-sky-500 hover:text-white ml-4">Contact</a>
      </nav>

      
      <nav className="md:hidden text-left underline bg-slate-100 pl-5 ml-5 mr-5 ">
        <a href="#work-experience"  className="block hover:bg-sky-500 hover:text-white">Work Experience</a>
        <a href="#projects" className="block hover:bg-sky-500 hover:text-white">Projects</a>
        <a href="#technologies" className="block hover:bg-sky-500 hover:text-white">Technologies</a>
        <a href="#education" className="block hover:bg-sky-500 hover:text-white">Education</a>
        <a href="#contact" className="block hover:bg-sky-500 hover:text-white">Contact</a>
      </nav>
    </div>
  );
}

export default Navigation;
