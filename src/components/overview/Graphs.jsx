import React from 'react';
import MobileGraphs from './MobileGraphs';
import DesktopGraphs from './DesktopGraphs';

const Graphs = () => {
    return (
        <div className="relative bg-gray-900 p-8 rounded-md shadow-md text-left">
            <h3 className="text-2xl font-bold mb-4 text-green-500">Technologies</h3>
            <p className="text-base mb-4 text-green-300">Throughout my career, I have worked with a variety of technologies including Avaya Elite, Avaya CIE, Avaya Aura Contact Center (AACC), Voxtron, Twilio, Asterisk, TCP/IP Network Programming, SI code, ACD implementations, ININ, and various network switches.</p>
            <div className="block lg:hidden">
                <MobileGraphs />
            </div>
            <div className="hidden lg:block">
                <DesktopGraphs />
            </div>
        </div>
    );
};

export default Graphs;
