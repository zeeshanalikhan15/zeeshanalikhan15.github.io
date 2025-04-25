import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import OverviewExperience from './OverviewExperience';
import Graphs from './Graphs';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Overview = () => {
    return (
        <section id="overview" className="my-12 p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-4xl font-bold text-center">Overview</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="animate-fade-in">
                    <OverviewExperience />
                </div>
                <Graphs />
            </div>
        </section>
    );
};

export default Overview;
