import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import profileImage from '../../assets/images/profile.jpg';
import cvFile from '../../assets/files/CV_HaryMiora.pdf';

function Accueil() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 py-20"
    >

      {/* ===== Contenu principal ===== */}
      <div
        className="
          max-w-6xl mx-auto 
          grid grid-cols-1 md:grid-cols-2 
          gap-10 items-center
        "
      >
        {/* ===== Image (mobile en premier) ===== */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <img
            src={profileImage}
            alt="Profil Miora"
            className="
              w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 
              rounded-full object-cover shadow-lg 
              hover:scale-105 transition-transform duration-300
            "
          />
        </div>

        {/* ===== Texte ===== */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            {t('name')}
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl text-teal-600 dark:text-teal-400 font-semibold mb-6">
            Développeur Web Full-Stack
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto md:mx-0 leading-relaxed mb-10">
            {t('description')}
          </p>

          <a
            href={cvFile}
            download
            className="
              inline-flex items-center px-6 py-3 
              border-2 border-teal-600 dark:border-teal-400 
              text-teal-600 dark:text-teal-400 
              font-medium rounded-lg 
              hover:bg-teal-600/10 dark:hover:bg-teal-400/10 
              transition-all duration-200
            "
          >
            {t('download CV') || 'Download CV'}
            <svg
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v4h16v-4M12 12v8m0 0l-4-4m4 4l4-4"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Accueil;
