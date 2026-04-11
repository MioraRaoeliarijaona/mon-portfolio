import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';

function APropos() {
  const { t } = useLanguage();
  const services = [
    {
      title: t('aboutText1'),
      description: t('aboutDesc1'),
    },
    {
      title: t('aboutText2'),
      description: t('aboutDesc2'),
    },
    {
      title: t('aboutText3'),
      description: t('aboutDesc3'),
    },
  ];

  return (
    <section id="about" className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Titre */}
        <div className="flex items-center mb-10">
          <h2 className="adaptive-contrast-text font-display text-3xl font-bold mr-4">
            {t('aboutTitle')}
          </h2>
          <div className="flex-1 h-px bg-emerald-600/18 dark:bg-emerald-300/18 ml-4"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <blockquote
              key={service.title}
              className="panel-surface-soft rounded-[1.75rem] p-6 italic transition duration-200 hover:-translate-y-1 hover:border-emerald-500/50"
            >
              <p className="mb-5 text-4xl leading-none text-emerald-600/45 dark:text-emerald-300/40">“</p>
              <h3 className="adaptive-contrast-text mb-3 font-display text-xl font-bold not-italic">
                {service.title}
              </h3>
              <p className="adaptive-contrast-text text-sm leading-7">
                {service.description}
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default APropos;
