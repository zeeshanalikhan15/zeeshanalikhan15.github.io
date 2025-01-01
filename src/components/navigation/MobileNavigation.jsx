import React, { useState, useEffect, useRef } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import NavigationLinks from './NavigationLinks';

const MobileNavigation = ({ navigation, current, handleClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full bg-matrix-bg text-matrix-green p-4 z-50" ref={navRef}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <button
                            onClick={handleToggle}
                            className="inline-flex items-center justify-center rounded-md p-2 text-matrix-green hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    handleClick(e, item.href, item.name);
                                    closeMenu(); // Close menu after navigation
                                }}
                                className={`block px-3 py-2 rounded-md text-base matrix-font ${current === item.name ? 'text-matrix-green-selected' : 'text-matrix-green'} hover:text-matrix-green`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default MobileNavigation;
