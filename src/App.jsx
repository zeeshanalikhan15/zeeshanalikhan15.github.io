import './App.css'
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
import Section from './components/section/Section'
import ContactInfo from './components/contact/ContactInfo'
import WorkExperience from './components/work/WorkExperience'
import Projects from './components/projects/Projects'
import Technologies from './components/tech/Technologies'
import Education from './components/education/Education'

function App() {
 

  return (
    <>    
      <div>
        <Header />
        <Navigation />
        <WorkExperience/>
        <Projects/>
        <Technologies/>
        <Education/>
        <ContactInfo />
      </div>
    </>
  )
}

export default App
