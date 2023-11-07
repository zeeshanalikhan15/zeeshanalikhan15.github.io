import Section from '../section/Section' // Import the Section component

const Projects = () => {
  return (
    <Section
      id="projects"
      title="Projects"
      content={
        <div className="projects">

          <div>
            <h3>virtualQ.Net</h3>
            <p>
              Developed a C# client implementation of virtualQ API: <a href="https://api-docs.virtualq.io/">https://api-docs.virtualq.io/</a>
            </p>
            <p>Technologies: C#, Rest Web Services, HttpClient, Json</p>
            <p>Features: Read and write call center data from virtualQ API</p>
            <p>
              Nuget: <a href="https://www.nuget.org/packages/virtualQ.API.virtualQNetClient">https://www.nuget.org/packages/virtualQ.API.virtualQNetClient</a>
            </p>
            <p>Git: <a href="https://github.com/virtualq/virtualQ.NET">https://github.com/virtualq/virtualQ.NET</a></p>
          </div>

          <div>
            <h3>Avaya Elite Connector</h3>
            <p>Integrated AvayaElite call center with virtualQ. CTI call events are fetched via vdn monitoring. Agent CTI events are taken from skills stats via CM communication. Data is written on CM via SMS service</p>
            <p>Technologies: C#, DMCC, CM, AES, SMS</p>
            <p>Features: Agent CTI events per skill, Call CTI events per vdn</p>
            <p>Git: <a href="https://github.com/virtualq/Avaya-Elite-Release">https://github.com/virtualq/Avaya-Elite-Release</a></p>
          </div>

          <div>
            <h3>Avaya AACC Connector</h3>
            <p>Integrated AvayaAACC with virtualQ. Agent and Callers stats are picked up via multicast real-time socket. A rest webservice is used to get extra stats from AACC's call flow.</p>
            <p>Technologies: C#, TCP, Multicast, Rest Web service, AACC</p>
            <p>Features: Agent and caller CTI events per Linegroup</p>
            <p>Git: <a href="https://github.com/virtualq/Avaya-AACC-Multicast-Release">https://github.com/virtualq/Avaya-AACC-Multicast-Release</a></p>
          </div>

          <div>
            <h3>Avaya CIE Connector</h3>
            <p>Integrated AvayaCIE with virtualQ. Agent and Callers stats are picked up via WSC web service offered by ACD. virtualQ state data is communicated to ACD via a local webservice.</p>
            <p>Technologies: C#, Rest Web service, WSC, CIE Web Service Collection</p>
            <p>Features: Agent and caller CTI events per Linegroup</p>
            <p>Git: <a href="https://github.com/virtualq/Avaya-CIE-Release">https://github.com/virtualq/Avaya-CIE-Release</a></p>
          </div>

          <div>
            <h3>vQube Asterisk Connector</h3>
            <p>Integrated Asterisk PBx with virtualQ. The main purpose of this connector was to connect virtualQ to any ACD via SIP, so the client won't have to do any changes on their side with every new integration. It was a Twilio's BYOC feature equivalent.</p>
            <p>Technologies: C#, Asterisk, AMI, AGI, ARI, SIP</p>
            <p>Features: Call routing, Call handling, Conference calling, Call masking</p>
            <p>Git: <a href="https://github.com/virtualq/vQube-Release">https://github.com/virtualq/vQube-Release</a></p>
          </div>

          <div>
            <h3>Voxtron QConnect</h3>
            <p>Developed a connector for Voxtron contact center. It gets agents and callers data from WDS service. Call routing is handled via Voxtron Business Object service. Call flow is handled by custom TCP server and Voxtron IVR communication.</p>
            <p>Technologies: C#, TCP, IVR, SOAP and Rest Webservices</p>
            <p>Features: Call routing, Agent and caller data per skill, Callback handling.</p>
            <p>Git: <a href="https://github.com/virtualq/QConnect-Release">https://github.com/virtualq/QConnect-Release</a></p>
          </div>

          <div>
            <h3>PureConnect/Genesys/ININ Contact Center Integration with Afiniti</h3>
            <p>Integrated ININ switch with Afiniti. It enabled Afiniti to take control of ININ's ACD routing. Call routing communication was done with ININ custom notification. Agents and calls states were monitoring with ININ watches. ININ was integrated with Afiniti for both Inbound and Outbound call routing.</p>
            <p>Technologies: C#, IceLib API, ININ Dialer API, ININ handlers</p>
            <p>Features: Call routing, Call queues monitoring, Agents monitoring, Campaigns monitoring, Stats monitoring</p>
          </div>

          <div>
            <h3>Avaya Elite Simulator</h3>
            <p>Developed a simulator server for load testing. This server simulated itself as an Avaya switch. Afiniti connects with this server and performs call routing. Communication was done on a TCP channel with Avaya’s standard ASAI protocol.</p>
            <p>Technologies: C#, TCP Async Sockets, Queuing</p>
            <p>Features: Call Generation, Agents Generation, ACD routing, Afiniti routing, multiple client connection, heavy load</p>
          </div>

          <div>
            <h3>PureConnect/Genesys/ININ Simulator</h3>
            <p>Developed a simulator for load testing. It simulated itself as an ININ switch. It was an internally integrated simulator with Afiniti. IceLib API’s client side was customized to generate calls and agents. Events were sent to Afiniti for routing.</p>
            <p>Technologies: C#, IceLib API, ININ Dialer API, Queuing</p>
            <p>Features: Call Generation, Agents Generation, ACD routing</p>
          </div>

          <div>
            <h3>X-Agent Application for ININ</h3>
            <p>Developed a client application that connected with ININ switch. It was able to log in multiple agents and control them. Agents were able to log in for both Inbound and Outbound calls. Agent could automatically answer/drop calls. It was used for load testing scenarios.</p>
            <p>Technologies: C#, IceLib API, ININ Dialer API, Queuing</p>
            <p>Features: Multiple agent management, Inbound and outbound calls handling, Campaigns login and logout, Automatic connect and drop</p>
          </div>

          <div>
            <h3>Agent Application for Afiniti</h3>
            <p>Developed a softphone agent application. This application was able to connect with a switch and act as an agent. It was developed using Afiniti protocol so it was compatible with all Afiniti integrated switches.</p>
            <p>Technologies: C#, Afiniti Protocol, Queuing</p>
            <p>Features: Agent actions(Login, Logout, Free, Busy), Call actions(Make call, Answer, Hold, Resume, Drop)</p>
          </div>

          <div>
            <h3>ConnectorAutoUpdater</h3>
            <p>Developed an auto-update application for all virtualQ connectors. It downloads the latest connector release from Github.com when available, installs it, and then runs the latest version of the connector. Everything is done automatically. This was custom designed for the needs of virtualQ connectors.</p>
            <p>Technologies: C#, Octokit, SharpCompress, Windows Terminal, Batch file execution</p>
            <p>Features: Automatically update connector software</p>
            <p>
              Nuget: <a href="https://www.nuget.org/packages/ConnectorAutoUpdater/">https://www.nuget.org/packages/ConnectorAutoUpdater/</a>
            </p>
          </div>
        </div>
      }
    />
  );
}

export default Projects;
