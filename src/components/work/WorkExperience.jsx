import React from 'react';
import WorkExperienceItem from './WorkExperienceItem';

const workExperienceData = [
  {
    date: 'Nov 2024 – Present',
    title: 'Senior Software Engineer',
    company: 'virtualQ',
    location: 'Full-time, Berlin, Germany',
    description: 'I work on web applications using Ruby on Rails and React JS.',
    responsibilities: [
      'Managing backend and frontend development',
      'Ensuring client features and requirements are met',
      'Collaborating with cross-functional teams to deliver high-quality software solutions',
      'Implementing best practices for software development and deployment',
      'Conducting code reviews and providing mentorship to junior developers',
    ],
    tools: 'Ruby on Rails, React.js, Node.js, C#, REST APIs, RESTful WebServices, Web Development, Web Services API',
  },
  {
    date: 'Aug 2018 – Oct 2024',
    title: 'Call Center Developer',
    company: 'virtualQ',
    location: 'Freelance, Remote',
    description: 'At virtualQ, I have been responsible for developing and managing integrations of the virtualQ system with various ACDs. My role involves managing client deployments, handling production issues, and maintaining code repositories. I have also developed REST web services and managed SIP communication.',
    responsibilities: [
      'Integration development and management',
      'Client deployment and production issue handling',
      'Code repository maintenance',
      'REST web services development',
      'SIP communication management',
    ],
    tools: 'Avaya Elite, Avaya CIE, Avaya Aura Contact Center (AACC), Voxtron, Twilio, Asterisk, TCP/IP Network Programming',
  },
  {
    date: 'Apr 2021 – Oct 2021',
    title: 'Principal Software Engineer',
    company: 'Afiniti',
    location: 'Full-time, Lahore, Pakistan',
    description: 'As a Principal Software Engineer at Afiniti, I was responsible for training new hires, creating detailed documentation for SI code and ACD implementations, and providing ground knowledge of ACDs to new teams.',
    responsibilities: [
      'Training new hires',
      'Documentation creation for SI code and ACD implementations',
      'Providing ground knowledge of ACDs to new teams',
    ],
    tools: 'SI code, ACD implementations',
  },
  {
    date: 'Nov 2017 – Mar 2021',
    title: 'Senior Software Engineer',
    company: 'Afiniti',
    location: 'Full-time, Lahore, Pakistan',
    description: 'During my tenure as a Senior Software Engineer at Afiniti, I designed and developed integrations with Contact Center Platforms such as ININ and Avaya. I also worked on network communication protocols and collaborated with clients in production environments.',
    responsibilities: [
      'Integration design and development',
      'Network communication protocol development',
      'Client collaboration in production environments',
    ],
    tools: 'ININ, Avaya',
  },
  {
    date: 'Sep 2016 – Nov 2017',
    title: 'Software Engineer',
    company: 'Afiniti',
    location: 'Full-time, Lahore, Pakistan',
    description: 'As a Software Engineer at Afiniti, I developed proxies and web services for network switches, created real-time, multi-threaded, and distributed applications, and monitored call and agent events from the switch.',
    responsibilities: [
      'Proxy and web service development',
      'Real-time, multi-threaded, and distributed application development',
      'Monitoring call and agent events from the switch',
    ],
    tools: 'Network switches',
  },
  {
    date: 'June 2014 – Aug 2016',
    title: 'Analyst Software Engineer',
    company: 'Afiniti',
    location: 'Full-time, Lahore, Pakistan',
    description: 'Starting my career as an Analyst Software Engineer at Afiniti, I focused on network programming, TCP/IP socket programming, and developing desktop and Windows services applications.',
    responsibilities: [
      'Network programming',
      'TCP/IP socket programming',
      'Desktop and Windows services application development',
    ],
    tools: 'TCP/IP, Windows services',
  },
];

const WorkExperience = () => {
  return (
    <section id="work-experience" className="my-8 p-6 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-6 bg-gray-100 p-2 rounded-md">Work Experience</h2>
      <div className="space-y-10">
        {workExperienceData.map((experience, index) => (
          <WorkExperienceItem
            key={index}
            date={experience.date}
            title={experience.title}
            company={experience.company}
            location={experience.location}
            description={experience.description}
            responsibilities={experience.responsibilities}
            tools={experience.tools}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
