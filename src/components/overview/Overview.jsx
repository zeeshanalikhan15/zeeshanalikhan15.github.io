import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import OverviewExperience from './OverviewExperience';
import Graphs from './Graphs';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Overview = () => {
    return (
        <section id="overview" className="my-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="glass rounded-3xl p-8 sm:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10"></div>

                <h2 className="text-4xl sm:text-5xl font-heading font-bold text-center mb-12">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Overview</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-fade-in-up">
                        <OverviewExperience />
                    </div>
                    <div className="glass-hover rounded-xl p-4 transition-transform duration-500 hover:scale-[1.02]">
                        <Graphs />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
