import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="mt-10 py-10 px-6 bg-transparent">
      <div
        className="
          max-w-4xl mx-auto
          flex flex-col md:flex-row items-center justify-between
          text-center md:text-left
          space-y-4 md:space-y-0 px-2 py-2
        "
      >
        {/* Icônes sociales */}
        <div className="adaptive-contrast-text-soft flex justify-center gap-6">
          <a
            href="https://github.com/HaryMiora"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/miora-raoeliarijaona-6776172ba"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Droits d’auteur */}
        <p className="adaptive-contrast-text-soft text-xs">
          &copy; 2025 Hary Miora Raoeliarijaona. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
