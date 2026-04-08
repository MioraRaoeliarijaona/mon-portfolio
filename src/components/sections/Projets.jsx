import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '../../hooks/useLanguage';

function Projets() {
  useLanguage();

  const projects = [
    {
      title: 'Portfolio personnel',
      description: 'Développement de mon portfolio pour présenter mes compétences, parcours et projets récents.',
      technologies: ['React.js', 'Tailwind CSS'],
      github: 'https://github.com/HaryMiora/portfolio',
      live: '#'
    },
    {
      title: 'Todo App',
      description: 'Application de gestion de tâches avec enregistrement local et interface responsive.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Local Storage'],
      github: '#'
    },
    {
      title: 'Clone Deezer',
      description: 'Clone simplifié de Deezer avec lecteur audio, recherche dynamique et playlists.',
      technologies: ['Vue.js', 'JavaScript', 'API', 'CSS3'],
      github: '#'
    },
    {
      title: 'Booking App',
      description: 'Application fullstack pour réservation de salles avec authentification, WebSocket et calendrier.',
      technologies: ['React', 'Express', 'Prisma', 'MySQL', 'Socket.io'],
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-4">
            <span className="text-teal-600 dark:text-teal-400 font-mono text-xl mr-2">03.</span>
            Mes projets
          </h2>
          <div className="flex-1 h-px bg-slate-300 dark:bg-slate-600 ml-4"></div>
        </div>

        {/* Grille de projets */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-blue-900 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-slate-200 dark:border-blue-800 p-6 flex flex-col justify-between"
            >
              {/* Titre + liens */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition">
                      <FaGithub size={18} />
                    </a>
                  )}
                  {project.live && project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition">
                      <FaExternalLinkAlt size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono bg-slate-100 dark:bg-blue-800 px-2 py-1 rounded text-slate-700 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projets;
