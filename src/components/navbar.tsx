import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsMenuOpen(false);
  };
  return (
    <nav className="bg-custom-blue">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <div onClick={() => handleNavigation('/')} className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Task Manager</span>
        </div>
       
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>
        <div className={`z-30 ${isMenuOpen ? '' : 'hidden'} md:flex w-full md:w-auto`}>
          <ul className="font-medium text-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-custom-blue md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-custom-blue bg-custom-blue md:bg-custom-blue dark:border-gray-700" id="mobile-menu">
            <li onClick={() => handleNavigation('/')} className="cursor-pointer">
              <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</div>
            </li>
            <li>
            <Link href="/task">
                <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Tasks</div>
              </Link>
            </li>
            <Link href="/feedback">
                <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Feedbacks</div>
              </Link>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
