import React from 'react';
import { Disclosure } from '@headlessui/react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const NavigationLinks = ({ navigation, current, handleClick }) => {
    return (
        <>
            {navigation.map((item) => (
                <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href, item.name)}
                    className={classNames(
                        item.name === current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.name === current ? 'page' : undefined}
                >
                    {item.name}
                </Disclosure.Button>
            ))}
        </>
    );
};

export default NavigationLinks;
