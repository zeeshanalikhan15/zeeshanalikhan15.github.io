import React from 'react';
import { Bar } from 'react-chartjs-2';
import { proficiencyData, experienceData } from '../../data/data';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MobileGraphs = ({ graphOptions }) => {
    const options = { ...graphOptions, indexAxis: 'y' }; // Add indexAxis for mobile

    return (
        <>
            <div className="relative h-96 w-full">
                <Bar data={proficiencyData} options={options} />
            </div>
            <div className="relative h-96 w-full mt-8">
                <Bar data={experienceData} options={options} />
            </div>
        </>
    );
};

export default MobileGraphs;
