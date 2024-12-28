import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid';

const GoUpButton = () => {
    const [visible, setVisible] = useState(false);

    const scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    useEffect(() => {
        window.onscroll = () => scrollFunction();
    }, []);

    return (
        <button
            onClick={topFunction}
            className={`fixed bottom-5 right-7 z-50 border-none outline-none bg-gray-700 text-white cursor-pointer p-4 rounded-lg text-lg hover:bg-gray-900 ${visible ? 'block' : 'hidden'}`}
            title="Go to top"
        >
            <ArrowUpIcon className="h-6 w-6" />
        </button>
    );
};

export default GoUpButton;
