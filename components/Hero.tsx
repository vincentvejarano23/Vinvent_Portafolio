import React from 'react';
import { motion } from 'framer-motion';

const m = motion as any;

interface HeroProps {
  scrollTo: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollTo }) => {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-white/10 px-6 pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
        <div className="absolute left-[8%] top-28 h-72 w-72 rounded-full bg-lime-300/10 blur-[110px]" />
        <div className="absolute right-[6%] top-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <m.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-lime-300">
            <span className="h-px w-10 bg-lime-300" />
            Diseñador digital · creador · builder
          </div>

          <h1 className="max-w-5xl text-[clamp(4.3rem,13vw,10.5rem)] font-black leading-[0.82] tracking-[-0.065em] text-white">
            VINCENT
          </h1>

          <div className="mt-8 grid gap-10 md:grid-cols-[1.35fr_.65fr] md:items-end">
            <div>
              <p className="max-w-2xl text-xl leading-relaxed text-white/65 md:text-2xl">
                Creo productos digitales, interfaces y experiencias visuales donde la tecnología y la creatividad trabajan juntas.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => scrollTo('proyectos')} className="rounded-full bg-lime-300 px-6 py-3 font-bold text-[#0b0e0c] transition hover:-translate-y-0.5 hover:bg-lime-200">
                  Ver proyectos
                </button>
                <button onClick={() => scrollTo('sobre-mi')} className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-white/35 hover:bg-white/5">
                  Sobre mí
                </button>
              </div>
            </div>

            <div className="border-l border-white/15 pl-6 text-sm leading-6 text-white/45 md:justify-self-end">
              <p className="text-white/75">Portafolio / 2026</p>
              <p>Diseño web</p>
              <p>Producto digital</p>
              <p>Automatización</p>
              <p>Ilustración</p>
            </div>
          </div>
        </m.div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
          {[
            ['01', 'Producto'],
            ['02', 'Desarrollo'],
            ['03', 'Diseño'],
            ['04', 'Ilustración'],
          ].map(([number, label]) => (
            <div key={number} className="bg-[#0f1310] p-5 md:p-6">
              <span className="text-xs text-lime-300">{number}</span>
              <p className="mt-8 text-lg font-semibold text-white/85">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
