import React from 'react';
import { motion } from 'framer-motion';

const m = motion as any;

const About: React.FC = () => {
  const capabilities = [
    ['Producto digital', 'Diseño y construcción de herramientas útiles, claras y escalables.'],
    ['Desarrollo web', 'Interfaces modernas, responsive y enfocadas en una experiencia simple.'],
    ['Automatización', 'Procesos, sistemas y flujos que reducen trabajo repetitivo.'],
    ['Dirección visual', 'Identidad, composición e ilustración para comunicar mejor una idea.'],
  ];

  return (
    <div className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <m.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid gap-12 md:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-lime-300">Sobre mí</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">No me interesa hacer cosas que solo se vean bonitas.</h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-white/60 md:pt-8">
            <p>
              Soy Vincent, creador autodidacta. Me gusta convertir ideas dispersas en productos digitales que se entienden, funcionan bien y tienen una identidad propia.
            </p>
            <p>
              Mi trabajo vive entre el diseño, la tecnología y la ilustración. Puedo pensar una interfaz, construirla, automatizar el proceso detrás y cuidar cómo se presenta visualmente.
            </p>
          </div>
        </m.div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
          {capabilities.map(([title, description], index) => (
            <m.div key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="bg-[#101411] p-7 md:p-9">
              <span className="text-xs font-bold text-lime-300">0{index + 1}</span>
              <h3 className="mt-8 text-2xl font-bold text-white">{title}</h3>
              <p className="mt-3 max-w-md leading-7 text-white/50">{description}</p>
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
