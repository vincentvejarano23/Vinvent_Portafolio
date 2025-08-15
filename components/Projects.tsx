import React from 'react';
import Section from './Section';
import type { Project } from '../types';
import { GithubIcon } from './icons/GithubIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';
import { motion } from 'framer-motion';

// HACK: Workaround for framer-motion type errors.
const m = motion as any;

interface ProjectsProps {
  projects: Project[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-[#1a2c1a]/30 rounded-lg overflow-hidden shadow-lg shadow-lime-900/20 border border-lime-500/20 flex flex-col transition-all duration-300 hover:border-lime-500/50 hover:shadow-lime-900/40 h-full">
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="bg-lime-900 text-lime-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <div className="mt-auto flex justify-end space-x-4">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lime-400 transition-colors">
              <GithubIcon className="w-6 h-6" />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lime-400 transition-colors">
              <ExternalLinkIcon className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};


const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Section>
      <m.h2 
        className="font-anton text-4xl md:text-5xl text-white text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        PROYECTOS
      </m.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <m.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </m.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;