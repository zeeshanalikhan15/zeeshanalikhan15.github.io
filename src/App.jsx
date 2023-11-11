import './App.css'
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
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

        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </div>
    </>
  )
}

export default App
