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
                    className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-mono text-green-300 hover:text-green-500 ${current === item.name ? 'text-green-500' : ''
                        }`}
                    aria-current={item.name === current ? 'page' : undefined}
                >
                    {item.name}
                </a>
            ))}
        </div>
    );
};

export default DesktopNavigation;
