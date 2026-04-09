import React, { useState, useEffect } from 'react';
import { HiSun, HiMoon, HiMenuAlt3, HiX } from 'react-icons/hi';
import { useLanguage } from '../../hooks/useLanguage';
import logoMiora from '/assets/images/logo-miora.png';

function Navbar({ darkMode, toggleDarkMode }) {
  const { language, toggleLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ScrollSpy
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollY >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navigationItems = [
    { key: 'home', label: t('home') || 'Accueil' },
    { key: 'about', label: t('about') },
    { key: 'skills', label: t('technologies') },
    { key: 'projects', label: t('projects') },
    { key: 'contact', label: t('contact') },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 h-20 flex items-center justify-between px-6 sm:px-8 transition-colors duration-300 z-40 ${
          darkMode
            ? 'bg-[rgba(8,21,17,0.78)] backdrop-blur-xl'
            : 'bg-[rgba(246,248,245,0.78)] backdrop-blur-xl'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-emerald-500/20 bg-white/80 shadow-[0_12px_30px_rgba(15,159,127,0.12)] dark:bg-emerald-950/70">
            <img src={logoMiora} alt="Logo Miora" className="h-9 w-9 object-contain" />
          </div>
        </div>

        {/* Menu navigation au centre - Desktop only */}
        <div className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollToSection(item.key)}
              className={`text-sm font-semibold transition-colors duration-200 ${
                activeSection === item.key
                  ? 'text-emerald-600 dark:text-emerald-300'
                  : darkMode
                  ? 'text-emerald-50/78 hover:text-emerald-300'
                  : 'text-slate-700 hover:text-emerald-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Contrôles droite: langue + mode sombre (desktop) + burger menu (mobile) */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Langue et mode sombre - Desktop only */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                darkMode
                  ? 'bg-white/6 text-emerald-50/85 hover:bg-white/10'
                  : 'bg-white/70 text-slate-700 hover:bg-white'
              }`}
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>

            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode
                  ? 'bg-white/6 text-emerald-300 hover:bg-white/10'
                  : 'bg-white/70 text-slate-700 hover:bg-white'
              }`}
            >
              {darkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
            </button>
          </div>

          {/* Burger menu - Mobile only */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              darkMode
                ? 'bg-white/6 text-emerald-50/90 hover:bg-white/10'
                : 'bg-white/70 text-slate-700 hover:bg-white'
            }`}
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`fixed top-20 left-0 right-0 md:hidden transition-colors duration-300 z-30 ${
            darkMode
              ? 'bg-[rgba(8,21,17,0.96)] backdrop-blur-xl'
              : 'bg-[rgba(246,248,245,0.96)] backdrop-blur-xl'
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {/* Navigation items mobile */}
            <div className="space-y-3 pb-4">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className={`block w-full text-left px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                    activeSection === item.key
                      ? 'bg-emerald-600 text-white'
                      : darkMode
                      ? 'text-emerald-50/90 hover:bg-white/8'
                      : 'text-slate-700 hover:bg-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Langue et mode sombre - Mobile */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={toggleLanguage}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                  darkMode
                    ? 'bg-white/6 text-emerald-50/85 hover:bg-white/10'
                    : 'bg-white text-slate-700 hover:bg-white'
                }`}
              >
                {language === 'en' ? 'Français' : 'English'}
              </button>

              <button
                onClick={toggleDarkMode}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center justify-center gap-2 ${
                  darkMode
                    ? 'bg-white/6 text-emerald-300 hover:bg-white/10'
                    : 'bg-white text-slate-700 hover:bg-white'
                }`}
              >
                {darkMode ? (
                  <>
                    <HiSun size={18} />
                    <span>Clair</span>
                  </>
                ) : (
                  <>
                    <HiMoon size={18} />
                    <span>Sombre</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
