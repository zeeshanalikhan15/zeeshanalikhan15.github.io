import React from 'react';
import Project from './Project';

const projectData = [
  {
    title: 'virtualQ.Net',
    description: 'Developed a C# client implementation of virtualQ API.',
    technologies: 'C#, Rest Web Services, HttpClient, Json',
    features: 'Read and write call center data from virtualQ API',
    links: [
      { label: 'Nuget', url: 'https://www.nuget.org/packages/virtualQ.API.virtualQNetClient' },
      { label: 'Git', url: 'https://github.com/virtualq/virtualQ.NET' },
    ],
  },
  {
    title: 'Avaya Elite Connector',
    description: 'Integrated AvayaElite call center with virtualQ. CTI call events are fetched via vdn monitoring. Agent CTI events are taken from skills stats via CM communication. Data is written on CM via SMS service.',
    technologies: 'C#, DMCC, CM, AES, SMS',
    features: 'Agent CTI events per skill, Call CTI events per vdn',
    links: [
      { label: 'Git', url: 'https://github.com/virtualq/Avaya-Elite-Release' },
    ],
  },
  {
    title: 'Avaya AACC Connector',
    description: 'Integrated AvayaAACC with virtualQ. Agent and Callers stats are picked up via multicast real-time socket. A rest webservice is used to get extra stats from AACC\'s call flow.',
    technologies: 'C#, TCP, Multicast, Rest Web service, AACC',
    features: 'Agent and caller CTI events per Linegroup',
    links: [
      { label: 'Git', url: 'https://github.com/virtualq/Avaya-AACC-Multicast-Release' },
    ],
  },
  {
    title: 'Avaya CIE Connector',
    description: 'Integrated AvayaCIE with virtualQ. Agent and Callers stats are picked up via WSC web service offered by ACD. virtualQ state data is communicated to ACD via a local webservice.',
    technologies: 'C#, Rest Web service, WSC, CIE Web Service Collection',
    features: 'Agent and caller CTI events per Linegroup',
    links: [
      { label: 'Git', url: 'https://github.com/virtualq/Avaya-CIE-Release' },
    ],
  },
  {
    title: 'vQube Asterisk Connector',
    description: 'Integrated Asterisk PBx with virtualQ. The main purpose of this connector was to connect virtualQ to any ACD via SIP, so the client won\'t have to do any changes on their side with every new integration. It was a Twilio\'s BYOC feature equivalent.',
    technologies: 'C#, Asterisk, AMI, AGI, ARI, SIP',
    features: 'Call routing, Call handling, Conference calling, Call masking',
    links: [
      { label: 'Git', url: 'https://github.com/virtualq/vQube-Release' },
    ],
  },
  {
    title: 'Voxtron QConnect',
    description: 'Developed a connector for Voxtron contact center. It gets agents and callers data from WDS service. Call routing is handled via Voxtron Business Object service. Call flow is handled by custom TCP server and Voxtron IVR communication.',
    technologies: 'C#, TCP, IVR, SOAP and Rest Webservices',
    features: 'Call routing, Agent and caller data per skill, Callback handling',
    links: [
      { label: 'Git', url: 'https://github.com/virtualq/QConnect-Release' },
    ],
  },
  {
    title: 'PureConnect / Genesys / ININ Contact Center Integration with Afiniti',
    description: 'Integrated ININ switch with Afiniti. It enabled Afiniti to take control of ININ\'s ACD routing. Call routing communication was done with ININ custom notification. Agents and calls states were monitoring with ININ watches. ININ was integrated with Afiniti for both Inbound and Outbound call routing.',
    technologies: 'C#, IceLib API, ININ Dialer API, ININ handlers',
    features: 'Call routing, Call queues monitoring, Agents monitoring, Campaigns monitoring, Stats monitoring',
  },
  {
    title: 'Avaya Elite Simulator',
    description: 'Developed a simulator server for load testing. This server simulated itself as an Avaya switch. Afiniti connects with this server and performs call routing. Communication was done on a TCP channel with Avaya’s standard ASAI protocol.',
    technologies: 'C#, TCP Async Sockets, Queuing',
    features: 'Call Generation, Agents Generation, ACD routing, Afiniti routing, multiple client connection, heavy load',
  },
  {
    title: 'PureConnect / Genesys / ININ Simulator',
    description: 'Developed a simulator for load testing. It simulated itself as an ININ switch. It was an internally integrated simulator with Afiniti. IceLib API’s client side was customized to generate calls and agents. Events were sent to Afiniti for routing.',
    technologies: 'C#, IceLib API, ININ Dialer API, Queuing',
    features: 'Call Generation, Agents Generation, ACD routing',
  },
  {
    title: 'X-Agent Application for ININ',
    description: 'Developed a client application that connected with ININ switch. It was able to log in multiple agents and control them. Agents were able to log in for both Inbound and Outbound calls. Agent could automatically answer/drop calls. It was used for load testing scenarios.',
    technologies: 'C#, IceLib API, ININ Dialer API, Queuing',
    features: 'Multiple agent management, Inbound and outbound calls handling, Campaigns login and logout, Automatic connect and drop',
  },
  {
    title: 'Agent Application for Afiniti',
    description: 'Developed a softphone agent application. This application was able to connect with a switch and act as an agent. It was developed using Afiniti protocol so it was compatible with all Afiniti integrated switches.',
    technologies: 'C#, Afiniti Protocol, Queuing',
    features: 'Agent actions(Login, Logout, Free, Busy), Call actions(Make call, Answer, Hold, Resume, Drop)',
  },
  {
    title: 'Connector Auto Updater',
    description: 'Developed an auto-update application for all virtualQ connectors. It downloads the latest connector release from Github.com when available, installs it, and then runs the latest version of the connector. Everything is done automatically. This was custom designed for the needs of virtualQ connectors.',
    technologies: 'C#, Octokit, SharpCompress, Windows Terminal, Batch file execution',
    features: 'Automatically update connector software',
    links: [
      { label: 'Nuget', url: 'https://www.nuget.org/packages/ConnectorAutoUpdater/' },
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="my-8 p-6 bg-gray-300 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 bg-gray-300 p-2 rounded-md">Projects</h2>
      <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-10">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            features={project.features}
            links={project.links}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
