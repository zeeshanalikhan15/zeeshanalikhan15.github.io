import './App.css'
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
import Section from './components/section/Section'
import ContactInfo from './components/contact/ContactInfo'
import WorkExperience from './components/work/WorkExperience'

function App() {
 

  return (
    <>    
      <div>
      <Header />
      <Navigation />
      <WorkExperience/>
      <Section
        id="projects"
        title="Projects"
        content={
          // Your projects details go here
          <p>Projects content goes here</p>
        }
      />
      <Section
        id="technologies"
        title="Technologies"
        content={
          // Your technologies details go here
          <p>Technologies content goes here</p>
        }
      />
      <Section
        id="education"
        title="Education"
        content={
          // Your education details go here
          <p>Education content goes here</p>
        }
      />
      <Section
        id="university-projects"
        title="University Projects"
        content={
          // Your university project details go here
          <p>University projects content goes here</p>
        }
      />
      <Section
        id="blogs"
        title="Blogs"
        content={
          // Your blogs go here
          <p>Blogs content goes here</p>
        }
      />
      <ContactInfo />
    </div>
    </>
  )
}

export default App
