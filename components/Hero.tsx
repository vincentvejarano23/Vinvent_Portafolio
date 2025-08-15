
import React from 'react';

interface HeroProps {
  scrollTo: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollTo }) => {
  const navItems = [
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'ilustraciones', label: 'Ilustraciones' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-white text-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#101411] via-[#1a2c1a]/50 to-transparent"></div>
      <div className="absolute inset-0 bg-[#101411] opacity-60"></div>

      <div className="relative z-10 p-4 flex flex-col items-center">
        <h2 className="text-xl md:text-2xl font-light tracking-widest-plus text-gray-300 mb-2">
          ILLUSTRATION
        </h2>
        <h1 className="font-anton text-7xl md:text-9xl text-white mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
          PORTFOLIO
        </h1>
        <div className="flex justify-between w-full max-w-2xl px-2">
          <span className="font-anton text-2xl md:text-3xl text-gray-200">VINCENT</span>
          <span className="font-anton text-2xl md:text-3xl text-gray-200">2025</span>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-4 md:gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="px-6 py-3 bg-black bg-opacity-30 border border-lime-400/50 rounded-full text-lime-400 font-semibold
                         hover:bg-lime-400 hover:text-[#101411] hover:shadow-lg hover:shadow-lime-400/30
                         transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;