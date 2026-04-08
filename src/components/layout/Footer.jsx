import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../../hooks/useLanguage';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-10 px-6 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-blue-900">
      <div
        className="
          max-w-4xl mx-auto
          flex flex-col md:flex-row items-center justify-between
          text-center md:text-left
          space-y-4 md:space-y-0
        "
      >
        {/* Texte principal */}
        <p className="text-sm text-slate-600 dark:text-slate-300 font-mono">
          {t('builtBy') || 'Développé avec ❤️ par Hary Miora Raoeliarijaona'}
        </p>

        {/* Icônes sociales */}
        <div className="flex justify-center gap-6 text-slate-500 dark:text-slate-400">
          <a
            href="https://github.com/HaryMiora"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/miora-raoeliarijaona-6776172ba"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Droits d’auteur */}
        <p className="text-xs text-slate-400 dark:text-slate-500">
          &copy; 2025 Hary Miora Raoeliarijaona. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
