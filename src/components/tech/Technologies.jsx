import Section from '../section/Section' // Import the Section component
import './Technologies.css'
const Technologies = () => {
  return (
    <Section
      id="technologies"
      title="Technologies"
      content={
        <div className="technologies">

          <div>
            <h3>Languages</h3>
            <p>C#, Ruby, C++ (some experience)</p>
          </div>

          <div>
            <h3>Dot Net Framework</h3>
            <p>WPF, WCF web services REST/SOAP, TCP/IP, Socket Programming, Multi-Threading, VOIP, SIP, Ruby on Rails</p>
          </div>

          <div>
            <h3>Development Tools</h3>
            <p>Visual Studio, TFS, Jira, Trello, Git, Bitbucket</p>
          </div>

          <div>
            <h3>Contact Center Technologies</h3>
            <p>
              Avaya Elite (AES, CM, Tsapi/ASAI/DMCC, CIE - customer interaction express, AACC - Avaya Aura Contact center), Avaya CIE
            </p>
            <p>ININ (Handlers, PureConnect, ICELib)</p>
            <p>Voxtron - VCC (IVR Scripts, Monitoring SDK, WDS, CC integration)</p>
          </div>

          <div>
            <h3>Cloud and Communication Services</h3>
            <p>
              Twilio (Functions, TwiML, API, Programmable Voice, SMS, Elastic Switching, SIP Domains, BYOC - Bring Your Own Carrier)
            </p>
            <p>Asterisk (AMI, AGI, ARI, Dialplan, FreePBX), Async programming, AWS instance management (basic)</p>
          </div>

          <div>
            <h3>Network Switches</h3>

            <h4>PureConnect / Genesys / ININ Interactive Intelligence Contact Center</h4>
            <p>
              ININ IceLib Client-side SDK implementation to view all events from the switch in the form of watches and custom notification.
            </p>

            <h4>Avaya Elite (AES, CM, Tsapi/ASAI/DMCC, CIE - customer interaction express, AACC - Avaya Aura Contact center), Avaya CIE</h4>
            <p>Avaya Tsapi and ASAI protocol implementation to view all events from the Avaya switch.</p>

          </div>
        </div>
      }
    />
  );
}

export default Technologies;
