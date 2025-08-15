
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon } from './icons/MenuIcon';
import { XIcon } from './icons/XIcon';

// HACK: Workaround for framer-motion type errors.
const m = motion as any;

interface HeaderProps {
  scrollTo: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup on component unmount
    };
  }, [isMenuOpen]);

  const navLinks = [
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'ilustraciones', label: 'Ilustraciones' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' },
  ];
  
  const handleLinkClick = (id: string) => {
    scrollTo(id);
    setIsMenuOpen(false);
  }

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out ${
        isScrolled
          ? 'bg-[#101411]/80 backdrop-blur-sm shadow-lg shadow-lime-500/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div 
          className="cursor-pointer" 
          onClick={() => scrollTo('hero')}
          data-interactive="true"
        >
          <Logo className="h-16 w-auto text-gray-200" />
        </div>
        
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className="text-gray-300 hover:text-lime-400 transition-colors duration-300 font-medium"
                data-interactive="true"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Nav Trigger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 hover:text-lime-400 transition-colors z-[110] relative"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            data-interactive="true"
          >
            {isMenuOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <m.div
            className="absolute top-full left-0 right-0 bg-[#101411]/95 backdrop-blur-md md:hidden shadow-lg shadow-lime-900/40"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <ul className="flex flex-col items-center space-y-6 py-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-2xl font-anton text-gray-300 hover:text-lime-400 transition-colors duration-300"
                    data-interactive="true"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
