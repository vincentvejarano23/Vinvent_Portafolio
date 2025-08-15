import React from 'react';
import Section from './Section';
import { InstagramIcon } from './icons/InstagramIcon';
import { WhatsappIcon } from './icons/WhatsappIcon';
import { motion } from 'framer-motion';

// HACK: Workaround for framer-motion type errors.
const m = motion as any;

const Contact: React.FC = () => {
  return (
    <Section 
      className="relative bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: "url('https://i.pinimg.com/1200x/6d/aa/8a/6daa8a4adcf4b59003ce496879797a40.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70" aria-hidden="true"></div>
      
      <m.div 
        className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="font-anton text-4xl md:text-5xl text-white mb-8">CONTACTO</h2>

        <div className="w-full h-[550px] border border-lime-500/20 rounded-2xl p-2 bg-[#101411]/70 backdrop-blur-sm shadow-2xl shadow-lime-900/30">
           <iframe
              src="https://clever-bowl-1a1.notion.site/ebd/24f51b6a62b880cfab08df59e431fa51"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="Formulario de Contacto de Notion"
              className="rounded-xl"
            ></iframe>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
          <p className="font-semibold text-white">O encuéntrame en:</p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/vincentvaf/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 hover:bg-lime-900/80 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                <InstagramIcon className="w-5 h-5" />
                <span>Instagram</span>
            </a>
            <a href="https://wa.me/51943515738" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 hover:bg-lime-900/80 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
                <WhatsappIcon className="w-5 h-5" />
                <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </m.div>
    </Section>
  );
};

export default Contact;