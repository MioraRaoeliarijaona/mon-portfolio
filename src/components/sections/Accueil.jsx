import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import profileImage from '../../assets/images/profile.jpg';
import cvFile from '../../assets/files/CV_HaryMiora.pdf';
import { HiArrowDownTray } from 'react-icons/hi2';

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
              rounded-[2rem] object-cover shadow-[0_22px_70px_rgba(15,23,42,0.18)] ring-4 ring-white/70
              hover:scale-[1.02] transition-transform duration-300
            "
          />
        </div>

        {/* ===== Texte ===== */}
        <div className="order-2 md:order-1 text-center md:text-left">

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-emerald-50 mb-4 leading-none">
            {t('name')}
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl text-emerald-700 dark:text-emerald-300 font-semibold mb-6">
            Développeur Web Full-Stack
          </h2>

          <p className="text-base sm:text-lg text-slate-700 dark:text-emerald-50/72 max-w-xl mx-auto md:mx-0 leading-relaxed mb-10">
            {t('description')}
          </p>

          <a
            href={cvFile}
            download
            className="
              panel-surface group inline-flex items-center gap-3 px-6 py-3.5 
              text-slate-900 dark:text-emerald-300
              font-semibold rounded-2xl
              hover:-translate-y-0.5 hover:border-emerald-600/60
              transition-all duration-200
            "
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-[0_10px_24px_rgba(15,159,127,0.35)] dark:bg-emerald-400 dark:text-emerald-950">
              <HiArrowDownTray size={18} />
            </span>
            {t('download CV') || 'Download CV'}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Accueil;
