import React from 'react';
import { Bar } from 'react-chartjs-2';
import { proficiencyData, proficiencyOptions, experienceData, experienceOptions } from '../../data/data';

const Graphs = () => {
    return (
        <div className="relative bg-matrix-bg p-8 rounded-md shadow-md text-left">
            <h3 className="text-2xl font-bold mb-4 text-matrix-green matrix-font">Graphs</h3>
            <div className="space-y-10">
                <div className="relative bg-gray-900 p-8 rounded-md shadow-md text-left">
                    <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl matrix-font mb-2 text-matrix-green">Proficiency</h4>
                    <Bar data={proficiencyData} options={proficiencyOptions} />
                </div>
                <div className="relative bg-gray-900 p-8 rounded-md shadow-md text-left">
                    <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl matrix-font mb-2 text-matrix-green">Experience</h4>
                    <Bar data={experienceData} options={experienceOptions} />
                </div>
            </div>
        </div>
    );
};

export default Graphs;
