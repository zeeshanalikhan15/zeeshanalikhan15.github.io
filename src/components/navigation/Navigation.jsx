import { useState, useEffect, useRef } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
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

  const handleNavigationClick = (event, href) => {
    event.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const veil = document.createElement('div');
      veil.style.position = 'fixed';
      veil.style.top = 0;
      veil.style.left = 0;
      veil.style.width = '100%';
      veil.style.height = '100%';
      veil.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      veil.style.zIndex = 9999;
      veil.style.transition = 'opacity 0.5s ease-in-out';
      veil.style.opacity = 0;
      document.body.appendChild(veil);

      setTimeout(() => {
        veil.style.opacity = 1;
      }, 10);

      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        veil.style.opacity = 0;
        setTimeout(() => {
          document.body.removeChild(veil);
        }, 500);
      }, 500);
    }
  };

  return (
    <Disclosure as="nav" className="fixed top-0 left-0 w-full bg-matrix-bg text-matrix-green matrix-font p-4 z-50" ref={navRef}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-center">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-matrix-green matrix-font hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <div className="hidden sm:block">
                  <DesktopNavigation navigation={navigationLinks} current={current} handleClick={handleClick} />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <MobileNavigation navigation={navigationLinks} current={current} handleClick={handleClick} />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

