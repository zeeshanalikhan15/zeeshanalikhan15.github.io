import './App.css'
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
import Section from './components/section/Section'
import ContactInfo from './components/contact/ContactInfo'
import WorkExperience from './components/work/WorkExperience'
import Projects from './components/projects/Projects'
import Technologies from './components/tech/Technologies'

function App() {
 

  return (
    <>    
      <div>
      <Header />
      <Navigation />
      <WorkExperience/>
      <Projects/>
      <Technologies/>
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
