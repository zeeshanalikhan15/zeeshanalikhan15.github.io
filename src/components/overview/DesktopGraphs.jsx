import React from 'react';
import { Bar } from 'react-chartjs-2';
import { proficiencyData, experienceData, desktopGraphOptions } from '../../data/data';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DesktopGraphs = () => {
    return (
        <>
            <div className="relative h-64 w-full">
                <Bar data={proficiencyData} options={desktopGraphOptions} />
            </div>
            <div className="relative h-64 w-full mt-8">
                <Bar data={experienceData} options={desktopGraphOptions} />
            </div>
        </>
    );
};

export default DesktopGraphs;
