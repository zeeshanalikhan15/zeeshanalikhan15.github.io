import { useState, useEffect, useRef } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import NavigationLinks from './NavigationLinks';
import { navigationLinks } from '../../data/data';
import MobileNavigation from './MobileNavigation';
import DesktopNavigation from './DesktopNavigation';

export default function Navigation() {
  const [current, setCurrent] = useState('');
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationLinks.map((item) => document.querySelector(item.href));
      const scrollPosition = window.scrollY + window.innerHeight; // Adjust this value as needed

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && scrollPosition >= sections[i].offsetTop) {
          setCurrent(navigationLinks[i].name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (e, href, name) => {
    e.preventDefault();
    const offset = 80; // Adjust this value as needed
    const element = document.querySelector(href);
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    setCurrent(name);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setCurrent('');
  };

  return (
    <Disclosure as="nav" className="fixed z-50 glass transition-all duration-300 top-4 left-0 right-0 mx-auto w-[95%] max-w-7xl rounded-2xl md:top-0 md:w-full md:max-w-none md:rounded-none" ref={navRef}>
      {({ open, close }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-primary focus:outline-none transition-colors">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <h1 onClick={scrollToTop} className="text-xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary cursor-pointer hover:opacity-80 transition-opacity">
                    ZAK
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <DesktopNavigation navigation={navigationLinks} current={current} handleClick={handleClick} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden glass rounded-b-2xl border-t border-white/5">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <NavigationLinks navigation={navigationLinks} current={current} handleClick={(e, href, name) => {
                handleClick(e, href, name);
                close();
              }} />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

