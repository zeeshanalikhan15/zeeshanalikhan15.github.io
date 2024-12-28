import React from 'react';

const Technologies = () => {
  return (
    <section id="technologies" className="my-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Technologies</h2>
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8">
          <div className="relative bg-white p-6 rounded-md shadow-md">
            <div className="absolute left-0 top-0 h-full w-1 bg-gray-300"></div>
            <div className="relative pl-16 mt-2">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-retro">Languages</h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">C#, Ruby, C++ (some experience)</p>
            </div>
          </div>

          <div className="relative bg-white p-6 rounded-md shadow-md">
            <div className="absolute left-0 top-0 h-full w-1 bg-gray-300"></div>
            <div className="relative pl-16 mt-2">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-retro">Dot Net Framework</h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">WPF, WCF web services REST/SOAP, TCP/IP, Socket Programming, Multi-Threading, VOIP, SIP, Ruby on Rails</p>
            </div>
          </div>

          <div className="relative bg-white p-6 rounded-md shadow-md">
            <div className="absolute left-0 top-0 h-full w-1 bg-gray-300"></div>
            <div className="relative pl-16 mt-2">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-retro">Development Tools</h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Visual Studio, TFS, Jira, Trello, Git, Bitbucket</p>
            </div>
          </div>

          <div className="relative bg-white p-6 rounded-md shadow-md">
            <div className="absolute left-0 top-0 h-full w-1 bg-gray-300"></div>
            <div className="relative pl-16 mt-2">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-retro">Contact Center Technologies</h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Avaya Elite (AES, CM, Tsapi/ASAI/DMCC, CIE - customer interaction express, AACC - Avaya Aura Contact center), Avaya CIE
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">ININ (Handlers, PureConnect, ICELib)</p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Voxtron - VCC (IVR Scripts, Monitoring SDK, WDS, CC integration)</p>
            </div>
          </div>

          <div className="relative bg-white p-6 rounded-md shadow-md">
            <div className="absolute left-0 top-0 h-full w-1 bg-gray-300"></div>
            <div className="relative pl-16 mt-2">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-retro">Cloud and Communication Services</h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Twilio (Functions, TwiML, API, Programmable Voice, SMS, Elastic Switching, SIP Domains, BYOC - Bring Your Own Carrier)
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Asterisk (AMI, AGI, ARI, Dialplan, FreePBX), Async programming, AWS instance management (basic)</p>
            </div>
          </div>

          <div className="relative bg-white p-6 rounded-md shadow-md">
            <div className="absolute left-0 top-0 h-full w-1 bg-gray-300"></div>
            <div className="relative pl-16 mt-2">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-retro">Network Switches</h3>
              <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">PureConnect / Genesys / ININ Interactive Intelligence Contact Center</h4>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                ININ IceLib Client-side SDK implementation to view all events from the switch in the form of watches and custom notification.
              </p>
              <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Avaya Elite (AES, CM, Tsapi/ASAI/DMCC, CIE - customer interaction express, AACC - Avaya Aura Contact center), Avaya CIE</h4>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Avaya Tsapi and ASAI protocol implementation to view all events from the Avaya switch.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
