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
      title: t('projectPortfolioTitle'),
      description: t('projectPortfolioDesc'),
      technologies: ['React.js', 'Tailwind CSS'],
      github: 'https://github.com/HaryMiora/portfolio',
      live: '#',
      image: portfolioProject
    },
    {
      title: t('projectTodoTitle'),
      description: t('projectTodoDesc'),
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Local Storage'],
      github: '#',
      image: todoProject
    },
    {
      title: t('projectDeezerTitle'),
      description: t('projectDeezerDesc'),
      technologies: ['Vue.js', 'JavaScript', 'API', 'CSS3'],
      github: '#',
      image: deezerProject
    },
    {
      title: t('projectBookingTitle'),
      description: t('projectBookingDesc'),
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
          <h2 className="adaptive-contrast-text font-display text-3xl font-bold mr-4">
            {t('projectsTitle')}
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

              <div className="flex h-full flex-col p-6">
                {/* Titre */}
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="adaptive-contrast-text text-xl font-semibold">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <span className="adaptive-contrast-text-soft transition">
                      <FaGithub size={18} />
                    </span>
                    <span className="adaptive-contrast-text-soft transition">
                      <FaExternalLinkAlt size={16} />
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="adaptive-contrast-text mb-5 text-sm leading-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="chip-surface rounded-2xl px-3 py-2 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3">
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
                    <span className="ghost-button-surface adaptive-contrast-text-soft inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold">
                      <FaExternalLinkAlt size={14} />
                      {t('viewLive')}
                    </span>
                  )}

                  {project.github && project.github !== '#' ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ghost-button-surface adaptive-contrast-text inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-emerald-500/50 hover:text-emerald-700 dark:hover:text-emerald-300"
                    >
                      <FaGithub size={15} />
                      {t('viewCode')}
                    </a>
                  ) : (
                    <span className="ghost-button-surface adaptive-contrast-text-soft inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold">
                      <FaGithub size={15} />
                      {t('viewCode')}
                    </span>
                  )}
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
