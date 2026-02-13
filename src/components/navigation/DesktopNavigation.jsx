import React from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const DesktopNavigation = ({ navigation, current, handleClick }) => {
    return (
        <div className="flex space-x-1">
            {navigation.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href, item.name)}
                    className={classNames(
                        item.name === current
                            ? 'text-primary font-bold border-b-2 border-primary'
                            : 'text-gray-300 hover:text-white hover:text-glow transition-all duration-300 hover:-translate-y-0.5',
                        'rounded-md px-3 py-2 text-sm font-medium transition-all duration-300'
                    )}
                    aria-current={item.name === current ? 'page' : undefined}
                >
                    {item.name}
                </a>
            ))}
        </div>
    );
};

export default DesktopNavigation;
