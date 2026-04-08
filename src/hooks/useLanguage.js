import { useState, useEffect } from 'react';

const translations = {
  fr: {
    // Navigation
    about: 'À propos',
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
    aboutTitle: 'À propos de moi',
    aboutText1:
      'Bonjour ! Je suis Miora, étudiant à l’École Nationale d’Informatique. Ma passion pour le développement web a commencé en 2023, avec une envie de créer des applications utiles et efficaces.',
    aboutText2:
      'J’ai eu l’opportunité de travailler sur des projets variés, allant du portfolio personnel aux systèmes de gestion (tickets, location de voitures, gestion bancaire). Mon objectif est de devenir un développeur complet, maîtrisant à la fois le frontend et le backend.',
    aboutText3: 'Voici quelques technologies que j’utilise fréquemment :',

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

    // Footer
    builtBy: 'Conçu et développé par Hary Miora RAOELIARIJAONA',

    // Skills
    technologies: 'Technologies'
  },

  en: {
    // Navigation
    about: 'About',
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
    aboutTitle: 'About Me',
    aboutText1:
      'Hi! I’m Miora, a computer science student at ENI Madagascar. I started exploring web development in 2023 and quickly became passionate about building useful and elegant web apps.',
    aboutText2:
      'I’ve worked on various projects, from personal portfolios to real-world systems like ticketing and banking apps. My goal is to become a proficient full-stack developer.',
    aboutText3: 'Here are a few technologies I frequently work with:',

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

    // Footer
    builtBy: 'Designed & built by Hary Miora RAOELIARIJAONA',

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
