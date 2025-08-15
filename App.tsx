
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Illustrations from './components/Illustrations';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
import { illustrationData, projectData } from './constants';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <CustomCursor />
      <div className="bg-[#101411] min-h-screen text-gray-200">
        <Header scrollTo={scrollTo} />
        <main>
          <Hero scrollTo={scrollTo} />
          <div id="sobre-mi">
            <About />
          </div>
          <div id="ilustraciones">
            <Illustrations illustrations={illustrationData} />
          </div>
          <div id="proyectos">
            <Projects projects={projectData} />
          </div>
          <div id="contacto">
            <Contact />
          </div>
        </main>
        <footer className="text-center p-8 bg-black bg-opacity-30 text-gray-500 text-sm">
          <p>&copy; 2025 VINCENT. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default App;