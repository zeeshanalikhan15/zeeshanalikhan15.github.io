import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import MobileExperience from './MobileExperience';
import Experience from './Experience';
import Graphs from './Graphs';

const Overview = () => {
    return (
        <section id="overview" className="my-8 p-6 bg-matrix-bg shadow-md rounded-lg">
            <h2 className="text-4xl font-bold mb-6 bg-black p-2 rounded-md text-matrix-green matrix-font text-center">Overview</h2>
            <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-10">
                <div className="block lg:hidden">
                    <MobileExperience />
                </div>
                <div className="hidden lg:block">
                    <Experience />
                </div>
                <Graphs />
            </div>
        </section>
    );
};

export default Overview;
