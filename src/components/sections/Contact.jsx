import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { FaEnvelope } from 'react-icons/fa';

function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Titre */}
        <div className="flex items-center mb-10">
          <h2 className="adaptive-contrast-text font-display text-3xl font-bold mr-4">
            Contact
          </h2>
          <div className="flex-1 h-px bg-emerald-600/18 dark:bg-emerald-300/18 ml-4"></div>
        </div>

        <div className="py-2 text-center">
          <p className="adaptive-contrast-text-soft mx-auto mb-6 max-w-xl text-base leading-7">
            {t('contactText')}
          </p>
          <a
            href={`mailto:${t('contactMail')}`}
            className="inline-flex items-center gap-3 rounded-2xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(15,159,127,0.28)] transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-700"
          >
            <FaEnvelope size={16} />
            {t('contactCta')}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
