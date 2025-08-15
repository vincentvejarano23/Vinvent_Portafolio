import React, { useState } from 'react';
import Section from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { PaletteIcon } from './icons/PaletteIcon';
import { LayersIcon } from './icons/LayersIcon';
import { CodeBracketIcon } from './icons/CodeBracketIcon';
import { WordpressIcon } from './icons/WordpressIcon';
import { DevicePhoneMobileIcon } from './icons/DevicePhoneMobileIcon';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { CogIcon } from './icons/CogIcon';

// HACK: Workaround for framer-motion type errors.
const m = motion as any;

const skills = [
  {
    icon: <PaletteIcon className="w-8 h-8 text-lime-400 flex-shrink-0 mt-1" />,
    title: 'Ilustración Digital',
    description: 'Character design, concept art, entintado y color digital.',
  },
  {
    icon: <LayersIcon className="w-8 h-8 text-lime-400 flex-shrink-0 mt-1" />,
    title: 'Software de Diseño',
    description: 'Photoshop, Clip Studio Paint, Sketchbook Pro, IbisPaint.',
  },
  {
    icon: <CogIcon className="w-8 h-8 text-lime-400 flex-shrink-0 mt-1" />,
    title: 'Automatización y Productividad',
    description: 'Optimización de procesos, macros en Excel y uso avanzado de Notion.',
  },
  {
    icon: <CodeBracketIcon className="w-8 h-8 text-lime-400 flex-shrink-0 mt-1" />,
    title: 'Frontend',
    description: 'HTML5, CSS3, JavaScript básico.',
  },
  {
    icon: <WordpressIcon className="w-8 h-8 text-lime-400 flex-shrink-0 mt-1" />,
    title: 'CMS',
    description: 'WordPress (instalación y personalización).',
  },
  {
    icon: <DevicePhoneMobileIcon className="w-8 h-8 text-lime-400 flex-shrink-0 mt-1" />,
    title: 'Diseño Responsive',
    description: 'Adaptación y optimización visual para todos los dispositivos.',
  },
];


const About: React.FC = () => {
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);

  const toggleSkills = () => {
    setIsSkillsVisible(!isSkillsVisible);
  };

  return (
    <Section className="bg-[#101411]">
      <m.div 
        className="grid md:grid-cols-3 gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="md:col-span-1 flex justify-center">
          <img
            src="https://i.pinimg.com/736x/cf/4c/80/cf4c80d757407c524b2675774f9184d7.jpg"
            alt="Vincent's profile picture"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-lime-500/30 shadow-2xl shadow-lime-900/50"
          />
        </div>
        <div className="md:col-span-2">
          <h2 className="font-anton text-4xl md:text-5xl text-white mb-6">SOBRE MÍ</h2>
          <p className="text-gray-300 text-lg mb-4 leading-relaxed">
            Hola, soy Vincent. Un creador autodidacta que fusiona arte y tecnología para dar vida a ideas únicas. Mi mundo se mueve entre ilustraciones que cuentan historias y desarrollos web que combinan funcionalidad y estética, siempre buscando transmitir emociones y dejar una huella en quien las ve o las usa.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Cada proyecto es para mí un reto personal, una oportunidad de superarme y explorar nuevos caminos creativos. No solo diseño y programo: construyo experiencias, universos y conceptos que nacen de la imaginación y se materializan con dedicación. Este portafolio es una muestra de ese viaje creativo… y apenas es el comienzo.
          </p>
        </div>
      </m.div>
      
      <div className="text-center mt-12">
        <button
          onClick={toggleSkills}
          className="bg-transparent border border-lime-500/30 text-lime-400 px-8 py-3 rounded-full font-semibold
                     flex items-center justify-center gap-2 mx-auto
                     hover:bg-lime-900/50 hover:border-lime-500/60
                     transition-all duration-300"
        >
          <span>{isSkillsVisible ? 'Ver menos' : 'Ver más'}</span>
          <m.div animate={{ rotate: isSkillsVisible ? 180 : 0 }}>
            <ChevronDownIcon className="w-5 h-5" />
          </m.div>
        </button>
      </div>

      <AnimatePresence>
        {isSkillsVisible && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto', transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
            exit={{ opacity: 0, height: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
            className="overflow-hidden"
          >
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#1a2c1a]/50 to-[#101411] border border-lime-500/20">
              <h3 className="font-anton text-3xl text-center text-white mb-8">Mis Habilidades</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill) => (
                   <div key={skill.title} className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-lime-900/40">
                    {skill.icon}
                    <div>
                      <h4 className="font-bold text-lg text-white">{skill.title}</h4>
                      <p className="text-gray-400 text-sm">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default About;