import React from 'react';
import Navbar from './Navbar';
import Accueil from '../sections/Accueil';
import APropos from '../sections/APropos';
import Competences from '../sections/Competences';
import Projets from '../sections/Projets';
import Contact from '../sections/Contact';
import Footer from '../layout/Footer';

function Layout({ darkMode, toggleDarkMode }) {
  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {/* Navbar en haut */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main */}
      <main className="w-full min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Accueil />
          <APropos />
          <Competences />
          <Projets />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Layout;
