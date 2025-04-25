import React from 'react';
import Graph from './Graph';
import { graphData } from '../../data/data';

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
                text: graphData.title, // Use title from data
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 10,
            },
        },
    };

    const proficiencyDataset = {
        labels: graphData.skills,
        datasets: [
            {
                label: graphData.proficiencyLabel, // Use label from data
                data: graphData.proficiencyData,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    const experienceDataset = {
        labels: graphData.skills,
        datasets: [
            {
                label: graphData.experienceLabel, // Use label from data
                data: graphData.experienceData,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="relative bg-white p-8 rounded-md shadow-md text-left">
            <h3 className="text-2xl font-bold mb-4">Technologies</h3>
            <p className="text-base mb-4">Throughout my career, I have worked with a variety of technologies including Avaya Elite, Avaya CIE, Avaya Aura Contact Center (AACC), Voxtron, Twilio, Asterisk, TCP/IP Network Programming, SI code, ACD implementations, ININ, and various network switches.</p>
            <div className="block lg:hidden">
                <Graph
                    graphOptions={graphOptions}
                    proficiencyDataset={proficiencyDataset}
                    experienceDataset={experienceDataset}
                    isMobile={true} // Pass isMobile as true for mobile
                />
            </div>
            <div className="hidden lg:block">
                <Graph
                    graphOptions={graphOptions}
                    proficiencyDataset={proficiencyDataset}
                    experienceDataset={experienceDataset}
                    isMobile={false} // Pass isMobile as false for desktop
                />
            </div>
        </div>
    );
};

export default Graphs;
