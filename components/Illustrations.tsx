import React from 'react';
import { motion } from 'framer-motion';
import InteractiveBentoGallery from './InteractiveBentoGallery';
import type { Illustration } from '../types';

const m = motion as any;

interface IllustrationsProps {
  illustrations: Illustration[];
}

const Illustrations: React.FC<IllustrationsProps> = ({ illustrations }) => {
  return (
    <div className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <m.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14 grid gap-6 md:grid-cols-[.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-lime-300">Otra faceta</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">Ilustración</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-white/50">
            Personajes, conceptos y mundos propios. Esta parte del portafolio muestra el lado más experimental de mi trabajo visual.
          </p>
        </m.div>

        <div className="rounded-3xl border border-white/10 bg-[#0f1310] p-3 md:p-5">
          <div className="max-h-[78vh] overflow-y-auto pr-1 custom-scrollbar md:pr-2">
            <InteractiveBentoGallery mediaItems={illustrations} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Illustrations;
