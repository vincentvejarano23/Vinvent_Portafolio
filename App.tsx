import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Illustrations from './components/Illustrations';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import { illustrationData, projectData } from './constants';

const App: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#0b0e0c] text-[#f2f4ef] selection:bg-lime-300 selection:text-black">
      <Header scrollTo={scrollTo} />
      <main>
        <Hero scrollTo={scrollTo} />
        <section id="sobre-mi"><About /></section>
        <section id="proyectos"><Projects projects={projectData} /></section>
        <section id="ilustraciones"><Illustrations illustrations={illustrationData} /></section>
        <section id="contacto"><Contact /></section>
      </main>
      <footer className="border-t border-white/10 px-6 py-8 text-sm text-white/45">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Vincent. Todos los derechos reservados.</p>
          <p>Diseño, desarrollo y creatividad digital.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
