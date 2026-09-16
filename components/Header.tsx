import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon } from './icons/MenuIcon';
import { XIcon } from './icons/XIcon';

const m = motion as any;

interface HeaderProps {
  scrollTo: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollTo }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['sobre-mi', 'Sobre mí'],
    ['proyectos', 'Proyectos'],
    ['ilustraciones', 'Ilustración'],
    ['contacto', 'Contacto'],
  ];

  const go = (id: string) => {
    scrollTo(id);
    setOpen(false);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-white/10 bg-[#0b0e0c]/85 backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button onClick={() => go('hero')} className="group flex items-center gap-3 text-left">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-lime-300/40 text-sm font-black text-lime-300 transition group-hover:bg-lime-300 group-hover:text-black">V</span>
          <span className="hidden text-sm font-bold tracking-[0.18em] text-white/85 sm:block">VINCENT</span>
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([id, label]) => (
            <button key={id} onClick={() => go(id)} className="text-sm text-white/55 transition hover:text-white">{label}</button>
          ))}
          <button onClick={() => go('contacto')} className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-lime-300/50 hover:text-lime-300">
            Hablemos
          </button>
        </div>

        <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          {open ? <XIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="border-t border-white/10 bg-[#0b0e0c]/95 px-6 py-8 backdrop-blur-xl md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-5">
              {links.map(([id, label]) => (
                <button key={id} onClick={() => go(id)} className="text-left text-2xl font-semibold text-white/80">{label}</button>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
