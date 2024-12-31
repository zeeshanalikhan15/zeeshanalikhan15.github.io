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
                    className={classNames(
                        item.name === current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
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
