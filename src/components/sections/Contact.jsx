import React, { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';

function Contact() {
  useLanguage();

  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Action personnalisée (ex: intégration EmailJS, API, etc.)
    alert('Message envoyé ! Merci de m’avoir contacté.');
    setFormData({ nom: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Titre */}
        <div className="flex items-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-4">
            <span className="text-teal-600 dark:text-teal-400 font-mono text-xl mr-2">04.</span>
            Contact
          </h2>
          <div className="flex-1 h-px bg-slate-300 dark:bg-slate-600 ml-4"></div>
        </div>

        {/* Formulaire de contact */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col text-left">
            <label htmlFor="nom" className="text-slate-700 dark:text-slate-300 mb-1 font-semibold">
              Nom
            </label>
            <input
              type="text"
              name="nom"
              id="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-blue-900 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="email" className="text-slate-700 dark:text-slate-300 mb-1 font-semibold">
              Adresse Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-blue-900 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="message" className="text-slate-700 dark:text-slate-300 mb-1 font-semibold">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-blue-900 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
