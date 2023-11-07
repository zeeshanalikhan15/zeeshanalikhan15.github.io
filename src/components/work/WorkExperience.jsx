import Section from '../section/Section'
import './WorkExperience.css'

const WorkExperience = () => {
  return (
    <Section
      id="work-experience"
      title="Work Experience"
      content={
        <div className="work-experience">
          <p><strong>Call Center Developer @ virtualQ</strong></p>
          <p>Aug 2018 – Present</p>
          <p>virtualQ, Remote - Freelance</p>
          <ul>
            <li>Develop and manage integrations of virtualQ system with following ACDs: Avaya Elite, Avaya CIE, Avaya Aura Contact Center (AACC), Voxtron, Twilio, Asterisk</li>
            <li>Manage all clients deployments directly</li>
            <li>Handle client productions for all contact center connector projects.</li>
            <li>Developed and maintained all ACD connector code repositories</li>
            <li>REST web services development and management</li>
            <li>SIP communication management</li>
            <li>TCP/IP Network Programming</li>
          </ul>

          <p><strong>Principal Software Engineer @ Afiniti</strong></p>
          <p>Apr 2021 – Oct 2021</p>
          <p>Afiniti, Lahore, Punjab, Pakistan</p>
          <ul>
            <li>Trained new hires</li>
            <li>Created detailed documentation for the SI code</li>
            <li>Created detailed documentation for ACD implementations</li>
            <li>Trained new teams to get a ground knowledge of ACDs</li>
          </ul>

          <p><strong>Senior Software Engineer @ Afiniti</strong></p>
          <p>Nov 2017 – Mar 2021</p>
          <p>Afiniti, Lahore, Punjab, Pakistan</p>
          <ul>
            <li>Design and development of Afiniti integrations with Contact Center Platforms i.e. ININ and Avaya</li>
            <li>Design and development of network communication protocols</li>
            <li>Work in production with clients</li>
          </ul>

          <p><strong>Software Engineer @ Afiniti</strong></p>
          <p>Sep 2016 – Nov 2017</p>
          <p>Afiniti, Lahore, Punjab, Pakistan</p>
          <ul>
            <li>Develop Proxies and Web Services for network switches</li>
            <li>Create real-time, multi-threaded and distributed applications</li>
            <li>Override the behavior of network switches and monitor call and agent events from the switch.</li>
          </ul>

          <p><strong>Analyst Software Engineer @ Afiniti</strong></p>
          <p>June 2014 – Aug 2016</p>
          <p>Afiniti, Lahore, Punjab, Pakistan</p>
          <ul>
            <li>Network Programming</li>
            <li>TCP/IP Socket Programming</li>
            <li>Desktop and Windows services application development</li>
          </ul>
        </div>
      }
    />
  );
}

export default WorkExperience;
