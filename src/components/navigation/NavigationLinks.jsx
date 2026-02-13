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
                        item.name === current
                            ? 'bg-white/10 text-primary text-shadow-glow font-bold'
                            : 'text-gray-300 hover:bg-white/5 hover:text-primary hover:text-shadow-glow transition-all duration-300',
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
