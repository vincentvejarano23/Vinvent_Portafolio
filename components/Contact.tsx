import React from 'react';
import { motion } from 'framer-motion';
import { InstagramIcon } from './icons/InstagramIcon';
import { WhatsappIcon } from './icons/WhatsappIcon';

const m = motion as any;

const Contact: React.FC = () => {
  return (
    <div className="border-t border-white/10 bg-[#0e120f] px-6 py-24 md:py-32">
      <m.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-lime-300">Contacto</p>
            <h2 className="mt-4 text-5xl font-black tracking-tight text-white md:text-7xl">¿Construimos algo?</h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-white/50">
              Si tienes una idea, un producto que mejorar o un proyecto que necesita una identidad más clara, podemos conversar.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/51943515738" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-3 font-bold text-black transition hover:bg-lime-200">
                <WhatsappIcon className="h-5 w-5" /> WhatsApp
              </a>
              <a href="https://www.instagram.com/vincentvaf/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-white/30 hover:bg-white/5">
                <InstagramIcon className="h-5 w-5" /> Instagram
              </a>
            </div>
          </div>

          <div className="min-h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-[#111612] p-2 shadow-2xl shadow-black/20">
            <iframe
              src="https://clever-bowl-1a1.notion.site/ebd/24f51b6a62b880cfab08df59e431fa51"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="Formulario de contacto"
              className="min-h-[500px] rounded-[20px]"
            />
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default Contact;
