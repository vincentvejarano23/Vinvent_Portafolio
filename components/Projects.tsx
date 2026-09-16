import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../types';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

const m = motion as any;

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="border-y border-white/10 bg-[#0e120f] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-lime-300">Trabajo seleccionado</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">Proyectos</h2>
          </div>
          <p className="max-w-xl text-white/50">Una selección de trabajos digitales en los que el objetivo no fue decorar una pantalla, sino resolver algo de forma clara.</p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <m.article key={project.id} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.07 }} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#121713]">
              <div className="grid md:grid-cols-[1.05fr_.95fr]">
                <div className="relative min-h-[280px] overflow-hidden bg-black/20 md:min-h-[430px]">
                  <img src={project.imageUrl} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur-md">0{index + 1}</span>
                </div>

                <div className="flex flex-col justify-between p-7 md:p-10">
                  <div>
                    <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{project.title}</h3>
                    <p className="mt-5 text-lg leading-8 text-white/55">{project.description}</p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/55">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex w-fit items-center gap-2 font-semibold text-lime-300 transition hover:gap-3">
                      Ver proyecto <ExternalLinkIcon className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </m.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
