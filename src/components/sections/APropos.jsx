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

        <div className="flex flex-col gap-10 text-left">
          {services.map((service) => (
            <div
              key={service.title}
              className="max-w-3xl border-l-2 border-emerald-600/18 pl-5 dark:border-emerald-300/18"
            >
              <h3 className="adaptive-contrast-text mb-3 font-display text-xl font-bold">
                {service.title}
              </h3>
              <p className="adaptive-contrast-text-soft text-base leading-8">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default APropos;
