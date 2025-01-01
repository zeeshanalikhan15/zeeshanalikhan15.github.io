import React from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const DesktopNavigation = ({ navigation, current, handleClick }) => {
    return (
        <div className="flex space-x-4">
            {navigation.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href, item.name)}
                    className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl matrix-font ${current === item.name ? 'text-matrix-green-selected' : 'text-matrix-green'} hover:text-matrix-green`}
                >
                    {item.name}
                </a>
            ))}
        </div>
    );
};

export default DesktopNavigation;
