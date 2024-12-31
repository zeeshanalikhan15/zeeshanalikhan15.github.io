import React from 'react';
import { Bar } from 'react-chartjs-2';
import { mobileProficiencyData, mobileExperienceData, mobileGraphOptions } from '../../data/data';

const MobileGraphs = () => {
    return (
        <>
            <div className="relative h-96 w-full">
                <Bar data={mobileProficiencyData} options={mobileGraphOptions} />
            </div>
            <div className="relative h-96 w-full mt-8">
                <Bar data={mobileExperienceData} options={mobileGraphOptions} />
            </div>
        </>
    );
};

export default MobileGraphs;
