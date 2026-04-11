import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '../../hooks/useLanguage';
import portfolioProject from '../../assets/projects/portfolio-project.svg';
import todoProject from '../../assets/projects/todo-project.svg';
import deezerProject from '../../assets/projects/deezer-project.svg';
import bookingProject from '../../assets/projects/booking-project.svg';

function Projets() {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'Portfolio personnel',
      description: 'Développement de mon portfolio pour présenter mes compétences, parcours et projets récents.',
      technologies: ['React.js', 'Tailwind CSS'],
      github: 'https://github.com/HaryMiora/portfolio',
      live: '#',
      image: portfolioProject
    },
    {
      title: 'Todo App',
      description: 'Application de gestion de tâches avec enregistrement local et interface responsive.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Local Storage'],
      github: '#',
      image: todoProject
    },
    {
      title: 'Clone Deezer',
      description: 'Clone simplifié de Deezer avec lecteur audio, recherche dynamique et playlists.',
      technologies: ['Vue.js', 'JavaScript', 'API', 'CSS3'],
      github: '#',
      image: deezerProject
    },
    {
      title: 'Booking App',
      description: 'Application fullstack pour réservation de salles avec authentification, WebSocket et calendrier.',
      technologies: ['React', 'Express', 'Prisma', 'MySQL', 'Socket.io'],
      github: '#',
      image: bookingProject
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <div className="flex items-center mb-12">
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-emerald-50 mr-4">
            <span className="text-emerald-600 dark:text-emerald-300 font-mono text-xl mr-2">03.</span>
            Mes projets
          </h2>
          <div className="flex-1 h-px bg-emerald-600/18 dark:bg-emerald-300/18 ml-4"></div>
        </div>

        {/* Grille de projets */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="panel-surface overflow-hidden rounded-[1.75rem] transition duration-300 hover:-translate-y-1 hover:border-emerald-500/55 hover:shadow-[0_24px_55px_rgba(15,159,127,0.12)]"
            >
              <div className="border-b border-emerald-600/12 bg-[linear-gradient(180deg,rgba(15,159,127,0.08),rgba(255,255,255,0.88))] p-4 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(52,211,153,0.08),rgba(8,21,17,0.92))]">
                <img
                  src={project.image}
                  alt={`Illustration ${project.title}`}
                  className="h-48 w-full rounded-2xl object-cover"
                />
              </div>

              <div className="flex h-full flex-col justify-between p-6">
                {/* Titre */}
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <span className="text-slate-500 transition dark:text-white/72">
                      <FaGithub size={18} />
                    </span>
                    <span className="text-slate-500 transition dark:text-white/72">
                      <FaExternalLinkAlt size={16} />
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-5 text-sm leading-6 text-slate-800 dark:text-white">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-auto">
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="chip-surface rounded-full px-3 py-1 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.live && project.live !== '#' ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(15,159,127,0.24)] transition hover:-translate-y-0.5 hover:bg-emerald-700"
                      >
                        <FaExternalLinkAlt size={14} />
                        {t('viewLive')}
                      </a>
                    ) : (
                      <span className="ghost-button-surface inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold text-slate-600 dark:text-white/50">
                        <FaExternalLinkAlt size={14} />
                        {t('viewLive')}
                      </span>
                    )}

                    {project.github && project.github !== '#' ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ghost-button-surface inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-emerald-500/50 hover:text-emerald-700 dark:text-white"
                      >
                        <FaGithub size={15} />
                        {t('viewCode')}
                      </a>
                    ) : (
                      <span className="ghost-button-surface inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold text-slate-600 dark:text-white/50">
                        <FaGithub size={15} />
                        {t('viewCode')}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projets;
