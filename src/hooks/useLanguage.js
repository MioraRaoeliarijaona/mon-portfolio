import { useState, useEffect } from 'react';

const translations = {
  fr: {
    // Navigation
    about: 'Mes services',
    experience: 'Expérience',
    projects: 'Projets',
    contact: 'Contact',

    // Hero section
    greeting: 'Salut, je suis',
    name: 'Hary Miora RAOELIARIJAONA',
    title: 'Étudiant en informatique passionné par le développement web.',
    subtitle: 'Développeur Web Full-Stack',
    description:
      'Étudiant en Master 1 Informatique à l’ENI Fianarantsoa, passionné par la création d’applications web modernes. Je m’investis dans le développement de solutions performantes, accessibles et centrées sur l’utilisateur.',
    viewProjects: 'Voir mes projets',

    // About section
    aboutTitle: 'Mes services',
    aboutText1: 'Interfaces web modernes',
    aboutText2: 'Développement full-stack',
    aboutText3: 'Optimisation et accompagnement',
    aboutDesc1:
      'Je conçois des interfaces sobres, rapides et responsives, avec une attention particulière sur la lisibilité, l’expérience utilisateur et l’identité visuelle.',
    aboutDesc2:
      'Je développe des applications complètes en reliant frontend, backend, base de données et logique métier pour aboutir à un produit réellement utilisable.',
    aboutDesc3:
      'Je peux aussi améliorer un projet existant: refonte UI, corrections, performance, structure du code et préparation à la mise en ligne.',

    // Projects section
    projectsTitle: 'Quelques projets réalisés',
    featuredProject: 'Projet en vedette',
    todoTitle: 'Système de Gestion de Tâches',
    todoDesc:
      'Une application web intuitive pour organiser les tâches quotidiennes. Réalisée avec React et Tailwind CSS, elle offre une interface fluide et responsive.',
    ecommerceTitle: 'Système de Support de Tickets',
    ecommerceDesc:
      'Application web développée lors de mon stage, permettant de gérer des tickets pour des problèmes techniques. Utilise React.js, Nest.js et MySQL.',
    viewCode: 'Voir le code',
    viewLive: 'Voir le site',

    // Contact section
    contactTitle: 'Et maintenant ?',
    contactSubtitle: 'Prenons contact',
    contactText:
      'Je suis toujours ouvert aux collaborations ou simplement à discuter autour du développement web. N’hésitez pas à m’écrire pour toute question ou projet.',
    sayHello: 'Me contacter',
    contactCta: 'Envoyer un email',
    contactMail: 'mioraraoeliarijaona@gmail.com',

    // Footer
    builtBy: '',

    // Skills
    technologies: 'Technologies'
  },

  en: {
    // Navigation
    about: 'Services',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',

    // Hero section
    greeting: 'Hi, I’m',
    name: 'Hary Miora RAOELIARIJAONA',
    title: 'Computer science student passionate about web development.',
    subtitle: 'Full-Stack Web Developer',
    description:
      'I’m currently a Master’s student in Software Engineering at ENI Fianarantsoa. I enjoy building modern and accessible web applications that provide real value.',
    viewProjects: 'See my projects',

    // About section
    aboutTitle: 'My Services',
    aboutText1: 'Modern web interfaces',
    aboutText2: 'Full-stack development',
    aboutText3: 'Optimization and support',
    aboutDesc1:
      'I design clean, fast and responsive interfaces with strong attention to readability, user experience and visual identity.',
    aboutDesc2:
      'I build complete applications by connecting frontend, backend, database and business logic into a product that is ready to be used.',
    aboutDesc3:
      'I can also improve an existing project through UI redesign, bug fixing, performance tuning, code structure cleanup and launch preparation.',

    // Projects section
    projectsTitle: 'Projects I’ve Built',
    featuredProject: 'Featured Project',
    todoTitle: 'Task Management System',
    todoDesc:
      'A modern task management app built with React and Tailwind CSS. Simple, intuitive, and responsive.',
    ecommerceTitle: 'Ticketing Support System',
    ecommerceDesc:
      'A web-based ticket management system developed during my internship. Built with React.js, Nest.js, and MySQL.',
    viewCode: 'View Code',
    viewLive: 'Live Demo',

    // Contact section
    contactTitle: 'What’s Next?',
    contactSubtitle: 'Get in Touch',
    contactText:
      'I’m always open to collaborations or chatting about tech. Feel free to reach out if you have any questions or project ideas!',
    sayHello: 'Contact Me',
    contactCta: 'Send an email',
    contactMail: 'mioraraoeliarijaona@gmail.com',

    // Footer
    builtBy: '',

    // Skills
    technologies: 'Technologies'
  }
};

export const useLanguage = () => {
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'fr';
    setLanguage(savedLanguage);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key) => translations[language][key] || key;

  return { language, toggleLanguage, t };
};
