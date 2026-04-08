import React, { useState, useEffect } from 'react';
import { HiSun, HiMoon, HiMenuAlt3, HiX } from 'react-icons/hi';
import { useLanguage } from '../../hooks/useLanguage';

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
        className={`fixed top-0 left-0 right-0 h-20 flex items-center justify-between px-6 sm:px-8 border-b transition-colors duration-300 z-40 ${
          darkMode
            ? 'bg-gray-900 border-gray-700'
            : 'bg-white border-gray-200'
        }`}
      >
        {/* Logo/Brand - Initiale stylisée */}
        <div
          className={`font-bold text-2xl w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
            darkMode
              ? 'bg-teal-500/20 text-teal-400'
              : 'bg-teal-500/10 text-teal-600'
          }`}
        >
          H
        </div>

        {/* Menu navigation au centre - Desktop only */}
        <div className="hidden md:flex items-center gap-8">
          {navigationItems.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollToSection(item.key)}
              className={`text-sm font-semibold transition-colors duration-200 ${
                activeSection === item.key
                  ? 'text-teal-500'
                  : darkMode
                  ? 'text-gray-300 hover:text-teal-400'
                  : 'text-gray-600 hover:text-teal-500'
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
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>

            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`fixed top-20 left-0 right-0 md:hidden transition-colors duration-300 z-30 border-b ${
            darkMode
              ? 'bg-gray-800 border-gray-700'
              : 'bg-gray-50 border-gray-200'
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {/* Navigation items mobile */}
            <div className="space-y-3 pb-4 border-b border-gray-700 dark:border-gray-600">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className={`block w-full text-left px-4 py-2 rounded-lg font-semibold transition-colors duration-200 ${
                    activeSection === item.key
                      ? 'bg-teal-500 text-white'
                      : darkMode
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-gray-200'
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
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {language === 'en' ? 'Français' : 'English'}
              </button>

              <button
                onClick={toggleDarkMode}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center justify-center gap-2 ${
                  darkMode
                    ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
