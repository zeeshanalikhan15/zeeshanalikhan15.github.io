import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DesktopGraphs = ({ graphOptions, proficiencyDataset, experienceDataset }) => {
    return (
        <>
            <div className="relative h-96 w-full"> {/* Increased height to h-96 */}
                <Bar data={proficiencyDataset} options={graphOptions} />
            </div>
            <div className="relative h-96 w-full mt-8"> {/* Increased height to h-96 */}
                <Bar data={experienceDataset} options={graphOptions} />
            </div>
        </>
    );
};

export default DesktopGraphs;
