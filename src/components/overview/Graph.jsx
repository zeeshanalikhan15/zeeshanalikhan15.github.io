import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graph = ({ graphOptions, proficiencyDataset, experienceDataset, isMobile }) => {
    const options = isMobile ? { ...graphOptions, indexAxis: 'y' } : graphOptions; // Dynamically set indexAxis

    return (
        <>
            <div className="relative h-96 w-full">
                <Bar data={proficiencyDataset} options={options} />
            </div>
            <div className="relative h-96 w-full mt-8">
                <Bar data={experienceDataset} options={options} />
            </div>
        </>
    );
};

export default Graph;
