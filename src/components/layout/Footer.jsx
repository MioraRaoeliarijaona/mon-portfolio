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
          space-y-4 md:space-y-0 rounded-[1.75rem] border border-emerald-600/12 bg-white px-6 py-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-sm dark:border-emerald-400/12 dark:bg-emerald-950/28
        "
      >
        {/* Icônes sociales */}
        <div className="flex justify-center gap-6 text-slate-500 dark:text-emerald-50/58">
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
        <p className="text-xs text-slate-500 dark:text-emerald-50/46">
          &copy; 2025 Hary Miora Raoeliarijaona. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
