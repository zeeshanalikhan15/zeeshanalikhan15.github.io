import React from 'react';
import { Bar } from 'react-chartjs-2';
import { desktopProficiencyData, desktopExperienceData, desktopGraphOptions } from '../../data/data';

const DesktopGraphs = () => {
    return (
        <>
            <div className="relative h-64 w-full">
                <Bar data={desktopProficiencyData} options={desktopGraphOptions} />
            </div>
            <div className="relative h-64 w-full mt-8">
                <Bar data={desktopExperienceData} options={desktopGraphOptions} />
            </div>
        </>
    );
};

export default DesktopGraphs;
