import React from 'react';
import MobileGraphs from './MobileGraphs';
import DesktopGraphs from './DesktopGraphs';
import { graphTitle } from '../../data/data';

const Graphs = () => {
    const graphOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: graphTitle, // Use title from data
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 10,
            },
        },
    };

    return (
        <div className="relative bg-white p-8 rounded-md shadow-md text-left">
            <h3 className="text-2xl font-bold mb-4">Technologies</h3>
            <p className="text-base mb-4">Throughout my career, I have worked with a variety of technologies including Avaya Elite, Avaya CIE, Avaya Aura Contact Center (AACC), Voxtron, Twilio, Asterisk, TCP/IP Network Programming, SI code, ACD implementations, ININ, and various network switches.</p>
            <div className="block lg:hidden">
                <MobileGraphs graphOptions={graphOptions} />
            </div>
            <div className="hidden lg:block">
                <DesktopGraphs graphOptions={graphOptions} />
            </div>
        </div>
    );
};

export default Graphs;
