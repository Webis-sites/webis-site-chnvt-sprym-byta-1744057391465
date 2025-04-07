'use client';

import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

interface MenuItem {
  id: string;
  label: string;
  path: string;
  isScroll?: boolean;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const menuItems: MenuItem[] = [
    { id: 'home', label: 'ראשי', path: '/' },
    { id: 'books', label: 'ספרים', path: '/books' },
    { id: 'categories', label: 'קטגוריות', path: '/categories' },
    { id: 'new-arrivals', label: 'חדש על המדף', path: 'new-arrivals', isScroll: true },
    { id: 'bestsellers', label: 'רבי מכר', path: 'bestsellers', isScroll: true },
    { id: 'about', label: 'אודות', path: '/about' },
    { id: 'contact', label: 'צור קשר', path: 'contact', isScroll: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Find which section is currently in view
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (item: MenuItem) => {
    if (item.isScroll) {
      return activeSection === item.id;
    }
    return router.pathname === item.path;
  };

  return (
    <header 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-12 mr-2">
                <Image
                  src="/logo.svg"
                  alt="חנות ספרים ביתא"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-primary hover:text-secondary transition-colors duration-300">
                חנות ספרים ביתא
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-1 space-x-reverse">
              {menuItems.map((item) => (
                <li key={item.id} className="px-1">
                  {item.isScroll ? (
                    <ScrollLink
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className={`px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors duration-300 hover:text-secondary ${
                        isActive(item) 
                          ? 'text-secondary font-bold border-b-2 border-secondary' 
                          : 'text-gray-700 hover:text-secondary'
                      }`}
                      activeClass="active"
                    >
                      {item.label}
                    </ScrollLink>
                  ) : (
                    <Link
                      href={item.path}
                      className={`px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:text-secondary ${
                        isActive(item) 
                          ? 'text-secondary font-bold border-b-2 border-secondary' 
                          : 'text-gray-700 hover:text-secondary'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-secondary focus:outline-none"
              aria-label={isMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white absolute top-full right-0 left-0 shadow-lg transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                {item.isScroll ? (
                  <ScrollLink
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors duration-300 ${
                      isActive(item) 
                        ? 'text-secondary font-bold bg-gray-50' 
                        : 'text-gray-700 hover:text-secondary hover:bg-gray-50'
                    }`}
                    activeClass="active"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </ScrollLink>
                ) : (
                  <Link
                    href={item.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                      isActive(item) 
                        ? 'text-secondary font-bold bg-gray-50' 
                        : 'text-gray-700 hover:text-secondary hover:bg-gray-50'
                    }`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;