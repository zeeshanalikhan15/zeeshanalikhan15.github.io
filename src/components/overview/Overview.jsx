import React from 'react';
import { workExperienceData } from '../../data/data';
import OverviewExperienceItem from './OverviewExperienceItem';
import MobileGraphs from './MobileGraphs';
import DesktopGraphs from './DesktopGraphs';

const Overview = () => {
    return (
        <section id="overview" className="my-8 p-6 bg-gray-200 shadow-md rounded-lg">
            <h2 className="text-4xl font-bold mb-6 bg-gray-200 p-2 rounded-md text-center">Overview</h2>
            <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-10">
                <div className="relative bg-white p-8 rounded-md shadow-md text-left">
                    <h3 className="text-2xl font-bold mb-4">Work Experience</h3>
                    <ul className="list-none p-0 relative">
                        <div className="absolute left-4 top-0 w-1 bg-gray-300 h-full"></div>
                        {workExperienceData.map((experience, index) => (
                            <OverviewExperienceItem
                                key={index}
                                date={experience.date}
                                title={experience.title}
                                company={experience.company}
                                location={experience.location}
                            />
                        ))}
                    </ul>
                </div>
                <div className="relative bg-white p-8 rounded-md shadow-md text-left">
                    <h3 className="text-2xl font-bold mb-4">Technologies</h3>
                    <p className="text-base mb-4">Throughout my career, I have worked with a variety of technologies including Avaya Elite, Avaya CIE, Avaya Aura Contact Center (AACC), Voxtron, Twilio, Asterisk, TCP/IP Network Programming, SI code, ACD implementations, ININ, and various network switches.</p>
                    <div className="block lg:hidden">
                        <MobileGraphs />
                    </div>
                    <div className="hidden lg:block">
                        <DesktopGraphs />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
