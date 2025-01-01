import React, { useEffect } from 'react';
import { workExperienceData } from '../../data/data';
import OverviewExperienceItem from './OverviewExperienceItem';
import './MobileExperience.css'; // Add CSS for animation

const MobileExperience = () => {
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.animate-grow-in');
            elements.forEach(element => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    element.classList.add('in-view');
                } else {
                    element.classList.remove('in-view');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative bg-gray-900 p-8 rounded-md shadow-md text-left">
            <h3 className="text-2xl font-bold mb-4 text-green-500">Work Experience</h3>
            <ul className="list-none p-0 relative ml-1.5">
                <div className="absolute -left-2 top-0 w-1 bg-green-500 h-full"></div>
                {workExperienceData.map((experience, index) => (
                    <div key={index} className="animate-grow-in -ml-8">
                        <OverviewExperienceItem
                            date={experience.date}
                            title={experience.title}
                            company={experience.company}
                            location={experience.location}
                        />
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default MobileExperience;
