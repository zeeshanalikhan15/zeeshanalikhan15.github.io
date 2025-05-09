export const headerData = {
    name: "Zeeshan Ali Khan",
    title: "Problem Solver | Senior Software Engineer | VoIP & Contact Center Specialist",
    description: "Aligning Advanced Communication Systems with Business Needs"
};

export const workExperienceData = [
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

export const technologiesData = [
    {
        category: 'Languages',
        items: ['C#', 'Ruby', 'C++', 'JavaScript', 'SQL', 'HTML', 'CSS']
    },
    {
        category: 'Frameworks',
        items: ['Dot Net framework', 'Dot Net core', 'WPF', 'WinForms', 'WCF web services REST/SOAP', 'React.js', 'Node.js', 'Tailwind', 'Boost', 'Ruby on Rails (RoR)', 'Network Programming', 'TCP/IP', 'Socket Programming', 'Multi-Threading', 'VOIP', 'SIP']
    },
    {
        category: 'Development Tools',
        items: ['Visual Studio', 'TFS', 'Jira', 'Trello', 'Git', 'Bitbucket', 'Github', 'Postman', 'Rollbar', 'Wireshark', 'VS Code', 'GitHub Copilot', 'OpenAI ChatGPT', 'Meta.ai', 'Confluence', 'Slack', 'Microsoft Teams']
    },
    {
        category: 'Contact Center Platforms',
        items: [
            {
                platform: 'ININ (PureConnect / Genesys)',
                description: 'ININ IceLib Client-side SDK implementation to view all events from the switch in the form of watches and custom notifications.',
                apis: [
                    'IceLib API',
                    'Dialer API',
                    'Custom Notifications',
                ],
                components: [
                    'Call Queue watches to monitor calls',
                    'Workgroups watches to monitor agents',
                    'Statistics watches to monitor stats',
                    'Custom notification to get extra events',
                ],
                management: [
                    'Interaction Administrator - Creation and handling of Users, Workgroups, Skills, Lines, Stations, Outbound campaigns, Contact Lists',
                    'Interaction Designer Management - Create, handle, and publish handlers for inbound and outbound for ACD and custom call routing',
                    'Interaction Attendant - Create, handle, and publish inbound and outbound call flows',
                ],
            },
            {
                platform: 'Avaya',
                description: 'Avaya TSAPI and ASAI protocol implementation to view all events from the switch.',
                apis: [
                    'TSAPI',
                    'ASAI',
                ],
                components: [
                    'Domain controls for skills, VDNs, and stations',
                    'Agent status query',
                    'Adjunct handling/Call routing',
                    'Call and agent controls',
                ],
                management: [
                    'Skills, VDNs, stations, agents management via CM',
                    'System variables management and communication',
                    'Vector management – to change vectors for changing call routing paths and accomplish Afiniti business needs',
                ],
            },
            {
                platform: 'Twilio',
                description: 'Twilio API implementation for programmable voice, SMS, and SIP communication.',
                apis: [
                    'Twilio Functions',
                    'TwiML',
                    'Programmable Voice API',
                    'Elastic SIP Trunking',
                ],
                components: [
                    'Programmable Voice for call handling',
                    'SMS for messaging',
                    'Elastic SIP Trunking for BYOC (Bring Your Own Carrier)',
                ],
                management: [
                    'Twilio Console for managing numbers, trunks, and call flows',
                ],
            },
            {
                platform: 'Asterisk',
                description: 'Asterisk PBX integration for call routing and handling.',
                apis: [
                    'AMI (Asterisk Manager Interface)',
                    'AGI (Asterisk Gateway Interface)',
                    'ARI (Asterisk REST Interface)',
                ],
                components: [
                    'Call routing and handling',
                    'Conference calling',
                    'Call masking',
                ],
                management: [
                    'Dialplan management',
                    'FreePBX for GUI-based configuration',
                ],
            },
            {
                platform: 'Voxtron',
                description: 'Voxtron VCC integration for IVR and call routing.',
                apis: [
                    'SOAP and REST Web Services',
                    'Monitoring SDK',
                ],
                components: [
                    'IVR Scripts for call flows',
                    'Call routing via Business Object service',
                    'Callback handling',
                ],
                management: [
                    'WDS service for agent and caller data',
                    'Custom TCP server for call flow handling',
                ],
            },
        ],
    },
];

export const projectData = [
    {
        title: 'virtualQ.Net',
        description: 'Developed a C# client implementation of virtualQ API.',
        technologies: 'C#, Rest Web Services, HttpClient, Json',
        features: 'Read and write call center data from virtualQ API',
        links: [
            { label: 'Nuget', url: 'https://www.nuget.org/packages/virtualQ.API.virtualQNetClient' },
            { label: 'Git', url: 'https://github.com/virtualq/virtualQ.NET' },
        ],
        company: 'virtualQ',
        role: 'Senior Software Engineer',
        anchorId: 'project-virtualq-net',
    },
    {
        title: 'Avaya Elite Connector',
        description: 'Integrated AvayaElite call center with virtualQ. CTI call events are fetched via vdn monitoring. Agent CTI events are taken from skills stats via CM communication. Data is written on CM via SMS service.',
        technologies: 'C#, DMCC, CM, AES, SMS',
        features: 'Agent CTI events per skill, Call CTI events per vdn',
        links: [
            { label: 'Git', url: 'https://github.com/virtualq/Avaya-Elite-Release' },
        ],
        company: 'virtualQ',
        role: 'Senior Software Engineer',
        anchorId: 'project-avaya-elite-connector',
    },
    {
        title: 'Avaya AACC Connector',
        description: 'Integrated AvayaAACC with virtualQ. Agent and Callers stats are picked up via multicast real-time socket. A rest webservice is used to get extra stats from AACC\'s call flow.',
        technologies: 'C#, TCP, Multicast, Rest Web service, AACC',
        features: 'Agent and caller CTI events per Linegroup',
        links: [
            { label: 'Git', url: 'https://github.com/virtualq/Avaya-AACC-Multicast-Release' },
        ],
        company: 'virtualQ',
        role: 'Call Center Developer',
        anchorId: 'project-avaya-aacc-connector',
    },
    {
        title: 'Avaya CIE Connector',
        description: 'Integrated AvayaCIE with virtualQ. Agent and Callers stats are picked up via WSC web service offered by ACD. virtualQ state data is communicated to ACD via a local webservice.',
        technologies: 'C#, Rest Web service, WSC, CIE Web Service Collection',
        features: 'Agent and caller CTI events per Linegroup',
        links: [
            { label: 'Git', url: 'https://github.com/virtualq/Avaya-CIE-Release' },
        ],
        company: 'virtualQ',
        role: 'Call Center Developer',
        anchorId: 'project-avaya-cie-connector',
    },
    {
        title: 'vQube Asterisk Connector',
        description: 'Integrated Asterisk PBx with virtualQ. The main purpose of this connector was to connect virtualQ to any ACD via SIP, so the client won\'t have to do any changes on their side with every new integration. It was a Twilio\'s BYOC feature equivalent.',
        technologies: 'C#, Asterisk, AMI, AGI, ARI, SIP',
        features: 'Call routing, Call handling, Conference calling, Call masking',
        links: [
            { label: 'Git', url: 'https://github.com/virtualq/vQube-Release' },
        ],
        company: 'virtualQ',
        role: 'Call Center Developer',
        anchorId: 'project-vqube-asterisk-connector',
    },
    {
        title: 'Voxtron QConnect',
        description: 'Developed a connector for Voxtron contact center. It gets agents and callers data from WDS service. Call routing is handled via Voxtron Business Object service. Call flow is handled by custom TCP server and Voxtron IVR communication.',
        technologies: 'C#, TCP, IVR, SOAP and Rest Webservices',
        features: 'Call routing, Agent and caller data per skill, Callback handling',
        links: [
            { label: 'Git', url: 'https://github.com/virtualq/QConnect-Release' },
        ],
        company: 'virtualQ',
        role: 'Senior Software Engineer',
        anchorId: 'project-voxtron-qconnect',
    },
    {
        title: 'PureConnect / Genesys / ININ Contact Center Integration with Afiniti',
        description: 'Integrated ININ switch with Afiniti. It enabled Afiniti to take control of ININ\'s ACD routing. Call routing communication was done with ININ custom notification. Agents and calls states were monitoring with ININ watches. ININ was integrated with Afiniti for both Inbound and Outbound call routing.',
        technologies: 'C#, IceLib API, ININ Dialer API, ININ handlers',
        features: 'Call routing, Call queues monitoring, Agents monitoring, Campaigns monitoring, Stats monitoring',
        company: 'Afiniti',
        role: 'Senior Software Engineer',
        anchorId: 'project-pureconnect-genesys-integration',
    },
    {
        title: 'Avaya Elite Simulator',
        description: 'Developed a simulator server for load testing. This server simulated itself as an Avaya switch. Afiniti connects with this server and performs call routing. Communication was done on a TCP channel with Avaya’s standard ASAI protocol.',
        technologies: 'C#, TCP Async Sockets, Queuing',
        features: 'Call Generation, Agents Generation, ACD routing, Afiniti routing, multiple client connection, heavy load',
        company: 'Afiniti',
        role: 'Software Engineer',
        anchorId: 'project-avaya-elite-simulator',
    },
    {
        title: 'PureConnect / Genesys / ININ Simulator',
        description: 'Developed a simulator for load testing. It simulated itself as an ININ switch. It was an internally integrated simulator with Afiniti. IceLib API’s client side was customized to generate calls and agents. Events were sent to Afiniti for routing.',
        technologies: 'C#, IceLib API, ININ Dialer API, Queuing',
        features: 'Call Generation, Agents Generation, ACD routing',
        company: 'Afiniti',
        role: 'Software Engineer',
        anchorId: 'project-pureconnect-genesys-simulator',
    },
    {
        title: 'X-Agent Application for ININ',
        description: 'Developed a client application that connected with ININ switch. It was able to log in multiple agents and control them. Agents were able to log in for both Inbound and Outbound calls. Agent could automatically answer/drop calls. It was used for load testing scenarios.',
        technologies: 'C#, IceLib API, ININ Dialer API, Queuing',
        features: 'Multiple agent management, Inbound and outbound calls handling, Campaigns login and logout, Automatic connect and drop',
        company: 'Afiniti',
        role: 'Analyst Software Engineer',
        anchorId: 'project-x-agent-application',
    },
    {
        title: 'Agent Application for Afiniti',
        description: 'Developed a softphone agent application. This application was able to connect with a switch and act as an agent. It was developed using Afiniti protocol so it was compatible with all Afiniti integrated switches.',
        technologies: 'C#, Afiniti Protocol, Queuing',
        features: 'Agent actions(Login, Logout, Free, Busy), Call actions(Make call, Answer, Hold, Resume, Drop)',
        company: 'Afiniti',
        role: 'Analyst Software Engineer',
        anchorId: 'project-agent-application',
    },
    {
        title: 'Connector Auto Updater',
        description: 'Developed an auto-update application for all virtualQ connectors. It downloads the latest connector release from Github.com when available, installs it, and then runs the latest version of the connector. Everything is done automatically. This was custom designed for the needs of virtualQ connectors.',
        technologies: 'C#, Octokit, SharpCompress, Windows Terminal, Batch file execution',
        features: 'Automatically update connector software',
        links: [
            { label: 'Nuget', url: 'https://www.nuget.org/packages/ConnectorAutoUpdater/' },
        ],
        company: 'virtualQ',
        role: 'Call Center Developer',
        anchorId: 'project-connector-auto-updater',
    },
];

export const educationData = [
    {
        degree: 'BS in Computer Science',
        institution: 'National University of Computer and Emerging Science, FAST',
        location: 'Lahore, Pakistan',
        period: '2010 - 2014',
        courses: [
            'Artificial Intelligence', 'Computer Programming', 'Data Structures', 'Design & Analysis of Algorithms', 'Human-Computer Interaction', 'Object-Oriented Analysis & Design', 'Software Engineering', 'Theory of Automata', 'Advanced Database Systems'
        ],
        projects: [
            {
                title: 'Automated Text Positioning for Urdu Newspaper Headline',
                description: 'It was an intelligent rule-based automated system for positioning Urdu text in newspaper\'s headlines. Newspaper companies hire calligraphers to manually perform Urdu newspaper headline generation. This was a time-consuming task. It did the same work faster and more efficiently. It was my Final Year Project. It got 2nd position in Softec’14 FAST Lahore.',
                technologies: 'C++, MFC, Cbitmap, Image processing',
                features: 'Rule-based expert system for headline generation for Urdu newspaper'
            },
            {
                title: 'Compiler',
                description: 'It was a project in Compiler Construction course, a basic compiler for a language (subset of C++). It had 3 primitive data types: integers, character, and string. It also handled functions, Print statements, Input statements, and assignment statements.',
                technologies: 'Java, CFG, Regular Expressions',
                features: 'Translation Schemes, Byte Code, variables, arrays, IO, and functions'
            }
        ]
    }
];

export const contactInfoData = {
    heading: 'Get in Touch',
    description: 'Feel free to reach out to me through any of the following platforms',
    email: 'ZeeshanAliKhan15@gmail.com',
    linkedin: 'https://www.linkedin.com/in/zeeshanalikhan15/',
    linkedinText: 'LinkedIn/ZeeshanAliKhan15',
    github: 'https://github.com/zeeshanalikhan15',
    githubText: 'GitHub/ZeeshanAliKhan15'
};

export const graphData = {
    title: 'Technologies and Languages Proficiency (0-10)',
    skills: ['C#', 'Ruby', 'C++', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Dot Net framework', 'Dot Net core', 'WPF', 'WinForms', 'WCF web services REST/SOAP', 'React.js', 'Node.js'],
    proficiencyLabel: 'Proficiency',
    proficiencyData: [9, 5, 6, 8.5, 8, 7.5, 8, 8.5, 8, 9, 8.5, 5, 7, 6.5],
    experienceLabel: 'Years of Experience',
    experienceData: [9, 2, 6, 4, 6, 8, 5, 7, 9, 3, 4, 3, 2, 1.5],
};

export const navigationLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Experience', href: '#work-experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
];
