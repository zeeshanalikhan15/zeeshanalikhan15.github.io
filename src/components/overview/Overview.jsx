import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Overview = () => {
    const proficiencyData = {
        labels: ['C#', 'Ruby', 'C++', 'WPF', 'WCF', 'TCP/IP', 'Socket Programming', 'VOIP', 'SIP', 'Twilio', 'Asterisk', 'AWS', 'React', 'Node.js'],
        datasets: [
            {
                label: 'Proficiency',
                data: [9, 5, 6, 8.5, 8, 7.5, 8, 8.5, 8, 9, 8.5, 5, 7, 6.5],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    const proficiencyOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Technologies and Languages Proficiency (0-10)',
            },
        },
        scales: {
            x: {
                ticks: {
                    maxRotation: 90,
                    minRotation: 45,
                },
            },
            y: {
                beginAtZero: true,
                max: 10,
            },
        },
    };

    const experienceData = {
        labels: ['C#', 'Ruby', 'C++', 'WPF', 'WCF', 'TCP/IP', 'Socket Programming', 'VOIP', 'SIP', 'Twilio', 'Asterisk', 'AWS', 'React', 'Node.js'],
        datasets: [
            {
                label: 'Years of Experience',
                data: [5, 3, 2, 4, 4, 5, 5, 4, 4, 3, 3, 2, 2, 2],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const experienceOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Years of Experience',
            },
        },
        scales: {
            x: {
                ticks: {
                    maxRotation: 90,
                    minRotation: 45,
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Years',
                },
                ticks: {
                    beginAtZero: true,
                    max: 10,
                },
            },
        },
    };

    return (
        <section id="overview" className="my-8 p-6 bg-gray-200 shadow-md rounded-lg">
            <h2 className="text-4xl font-bold mb-6 bg-gray-200 p-2 rounded-md text-center">Overview</h2>
            <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-10">
                <div className="relative bg-white p-8 rounded-md shadow-md text-left">
                    <h3 className="text-2xl font-bold mb-4">Work Experience</h3>
                    <ul className="list-none p-0 relative">
                        <div className="absolute left-4 top-0 w-1 bg-gray-300 h-full"></div>
                        <li className="mb-6 relative pl-8">
                            <div className="bg-white p-4 rounded-md shadow-md relative z-10">
                                <h4 className="text-xl font-semibold">Nov 2024 – Present</h4>
                                <p className="text-lg italic">Senior Software Engineer @ virtualQ - Full-time, Berlin, Germany</p>
                            </div>
                            <div className="absolute left-0 top-4 w-4 h-4 bg-white border-4 border-gray-300 rounded-full"></div>
                        </li>
                        <li className="mb-6 relative pl-8">
                            <div className="bg-white p-4 rounded-md shadow-md relative z-10">
                                <h4 className="text-xl font-semibold">Aug 2018 – Oct 2024</h4>
                                <p className="text-lg italic">Call Center Developer @ virtualQ - Freelance, Remote</p>
                            </div>
                            <div className="absolute left-0 top-4 w-4 h-4 bg-white border-4 border-gray-300 rounded-full"></div>
                        </li>
                        <li className="mb-6 relative pl-8">
                            <div className="bg-white p-4 rounded-md shadow-md relative z-10">
                                <h4 className="text-xl font-semibold">Apr 2021 – Oct 2021</h4>
                                <p className="text-lg italic">Principal Software Engineer @ Afiniti - Full-time, Lahore, Pakistan</p>
                            </div>
                            <div className="absolute left-0 top-4 w-4 h-4 bg-white border-4 border-gray-300 rounded-full"></div>
                        </li>
                        <li className="mb-6 relative pl-8">
                            <div className="bg-white p-4 rounded-md shadow-md relative z-10">
                                <h4 className="text-xl font-semibold">Nov 2017 – Mar 2021</h4>
                                <p className="text-lg italic">Senior Software Engineer @ Afiniti - Full-time, Lahore, Pakistan</p>
                            </div>
                            <div className="absolute left-0 top-4 w-4 h-4 bg-white border-4 border-gray-300 rounded-full"></div>
                        </li>
                        <li className="mb-6 relative pl-8">
                            <div className="bg-white p-4 rounded-md shadow-md relative z-10">
                                <h4 className="text-xl font-semibold">Sep 2016 – Nov 2017</h4>
                                <p className="text-lg italic">Software Engineer @ Afiniti - Full-time, Lahore, Pakistan</p>
                            </div>
                            <div className="absolute left-0 top-4 w-4 h-4 bg-white border-4 border-gray-300 rounded-full"></div>
                        </li>
                        <li className="mb-6 relative pl-8">
                            <div className="bg-white p-4 rounded-md shadow-md relative z-10">
                                <h4 className="text-xl font-semibold">June 2014 – Aug 2016</h4>
                                <p className="text-lg italic">Analyst Software Engineer @ Afiniti - Full-time, Lahore, Pakistan</p>
                            </div>
                            <div className="absolute left-0 top-4 w-4 h-4 bg-white border-4 border-gray-300 rounded-full"></div>
                        </li>
                    </ul>
                </div>
                <div className="relative bg-white p-8 rounded-md shadow-md text-left">
                    <h3 className="text-2xl font-bold mb-4">Technologies</h3>
                    <p className="text-base mb-4">Throughout my career, I have worked with a variety of technologies including Avaya Elite, Avaya CIE, Avaya Aura Contact Center (AACC), Voxtron, Twilio, Asterisk, TCP/IP Network Programming, SI code, ACD implementations, ININ, and various network switches.</p>
                    <div className="relative h-64 w-full">
                        <Bar data={proficiencyData} options={proficiencyOptions} />
                    </div>
                    <div className="relative h-64 w-full mt-8">
                        <Bar data={experienceData} options={experienceOptions} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;
