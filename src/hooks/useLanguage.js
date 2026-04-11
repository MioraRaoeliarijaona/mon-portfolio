import { useSyncExternalStore } from 'react';

const LANGUAGE_STORAGE_KEY = 'language';
const LANGUAGE_EVENT = 'portfolio-language-change';

const translations = {
  fr: {
    // Navigation
    home: 'Accueil',
    about: 'Mes services',
    experience: 'Expérience',
    projects: 'Projets',
    contact: 'Contact',

    // Hero section
    greeting: 'Salut, je suis',
    name: 'Hary Miora RAOELIARIJAONA',
    title: 'Étudiant en informatique passionné par le développement web.',
    subtitle: 'Développeur Web Full-Stack',
    downloadCv: 'Download CV',
    description:
      'Étudiant en Master II Informatique à l’ENI Fianarantsoa, passionnée par la création d’applications web modernes. Je m’investis dans le développement de solutions performantes, accessibles et centrées sur l’utilisateur.',
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

    // Skills section
    skillsFrontend: 'Frontend',
    skillsBackend: 'Backend',
    skillsDatabase: 'Base de données',
    skillsTools: 'Outils & autres',

    // Projects section
    projectsTitle: 'Mes projets',
    featuredProject: 'Projet en vedette',
    projectPortfolioTitle: 'Portfolio personnel',
    projectPortfolioDesc:
      'Développement de mon portfolio pour présenter mes compétences, parcours et projets récents.',
    projectTodoTitle: 'Todo App',
    projectTodoDesc:
      'Application de gestion de tâches avec enregistrement local et interface responsive.',
    projectDeezerTitle: 'Clone Deezer',
    projectDeezerDesc:
      'Clone simplifié de Deezer avec lecteur audio, recherche dynamique et playlists.',
    projectBookingTitle: 'Booking App',
    projectBookingDesc:
      'Application fullstack pour réservation de salles avec authentification, WebSocket et calendrier.',
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
    footerRights: '© 2025 Hary Miora Raoeliarijaona. Tous droits réservés.',

    // UI
    technologies: 'Technologies',
    langFrench: 'Français',
    langEnglish: 'English',
    themeLight: 'Clair',
    themeDark: 'Sombre'
  },

  en: {
    // Navigation
    home: 'Home',
    about: 'Services',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',

    // Hero section
    greeting: 'Hi, I’m',
    name: 'Hary Miora RAOELIARIJAONA',
    title: 'Computer science student passionate about web development.',
    subtitle: 'Full-Stack Web Developer',
    downloadCv: 'Download CV',
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

    // Skills section
    skillsFrontend: 'Frontend',
    skillsBackend: 'Backend',
    skillsDatabase: 'Database',
    skillsTools: 'Tools & more',

    // Projects section
    projectsTitle: 'Projects I’ve Built',
    featuredProject: 'Featured Project',
    projectPortfolioTitle: 'Personal portfolio',
    projectPortfolioDesc:
      'Built my portfolio to showcase my skills, background and recent work.',
    projectTodoTitle: 'Todo App',
    projectTodoDesc:
      'Task management app with local persistence and a responsive interface.',
    projectDeezerTitle: 'Deezer Clone',
    projectDeezerDesc:
      'Simplified Deezer clone with audio player, dynamic search and playlists.',
    projectBookingTitle: 'Booking App',
    projectBookingDesc:
      'Full-stack room booking application with authentication, WebSocket support and calendar features.',
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
    footerRights: '© 2025 Hary Miora Raoeliarijaona. All rights reserved.',

    // UI
    technologies: 'Technologies',
    langFrench: 'French',
    langEnglish: 'English',
    themeLight: 'Light',
    themeDark: 'Dark'
  }
};

const getStoredLanguage = () => {
  if (typeof window === 'undefined') {
    return 'fr';
  }

  return localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'fr';
};

const subscribe = (callback) => {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleLanguageChange = () => callback();

  window.addEventListener(LANGUAGE_EVENT, handleLanguageChange);
  window.addEventListener('storage', handleLanguageChange);

  return () => {
    window.removeEventListener(LANGUAGE_EVENT, handleLanguageChange);
    window.removeEventListener('storage', handleLanguageChange);
  };
};

export const useLanguage = () => {
  const language = useSyncExternalStore(subscribe, getStoredLanguage, () => 'fr');

  const toggleLanguage = () => {
    if (typeof window === 'undefined') {
      return;
    }

    const newLanguage = language === 'fr' ? 'en' : 'fr';
    localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);
    window.dispatchEvent(new Event(LANGUAGE_EVENT));
  };

  const t = (key) => translations[language]?.[key] || key;

  return { language, toggleLanguage, t };
};
