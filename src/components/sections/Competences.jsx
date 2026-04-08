import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

// On utilise les images téléchargées dans le dossier "assets/skills"
import htmlLogo from '../../assets/skills/html5.svg';
import cssLogo from '../../assets/skills/css3.png';
import jsLogo from '../../assets/skills/javascript.svg';
import tsLogo from '../../assets/skills/typescript.svg';
import reactLogo from '../../assets/skills/react.svg';
import vueLogo from '../../assets/skills/vue.svg';
import tailwindLogo from '../../assets/skills/tailwindcss.svg';

import nodeLogo from '../../assets/skills/nodejs.svg';
import expressLogo from '../../assets/skills/express.png';
import phpLogo from '../../assets/skills/php.svg';

import mysqlLogo from '../../assets/skills/mysql.svg';
import mongoLogo from '../../assets/skills/mongodb.svg';
import postgresLogo from '../../assets/skills/postgresql.svg';

import gitLogo from '../../assets/skills/git.svg';
import githubLogo from '../../assets/skills/github.svg';
import viteLogo from '../../assets/skills/vite.svg';
import webpackLogo from '../../assets/skills/webpack.svg';
import figmaLogo from '../../assets/skills/figma.svg';
import postmanLogo from '../../assets/skills/postman.svg';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: htmlLogo },
      { name: 'CSS3', icon: cssLogo },
      { name: 'JavaScript', icon: jsLogo },
      { name: 'TypeScript', icon: tsLogo },
      { name: 'React', icon: reactLogo },
      { name: 'Vue.js', icon: vueLogo },
      { name: 'Tailwind CSS', icon: tailwindLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: nodeLogo },
      { name: 'Express.js', icon: expressLogo },
      { name: 'PHP', icon: phpLogo },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', icon: mysqlLogo },
      { name: 'MongoDB', icon: mongoLogo },
      { name: 'PostgreSQL', icon: postgresLogo },
    ],
  },
  {
    title: 'Outils & Autres',
    skills: [
      { name: 'Git', icon: gitLogo },
      { name: 'GitHub', icon: githubLogo },
      { name: 'Vite', icon: viteLogo },
      { name: 'Webpack', icon: webpackLogo },
      { name: 'Figma', icon: figmaLogo },
      { name: 'Postman', icon: postmanLogo },
    ],
  },
];

function Competences() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Titre */}
        <div className="flex items-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-4">
            <span className="text-teal-600 dark:text-teal-400 font-mono text-xl mr-2">02.</span>
            {t('technologies')}
          </h2>
          <div className="flex-1 h-px bg-slate-300 dark:bg-slate-600 ml-4"></div>
        </div>

        {/* Catégories de compétences */}
        <div className="space-y-10">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center justify-center w-20"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 object-contain hover:scale-110 transition-transform duration-200"
                    />
                    <span className="mt-2 text-sm text-slate-700 dark:text-slate-300 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Competences;
