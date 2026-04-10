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
          <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-emerald-50 mr-4">
            <span className="text-emerald-600 dark:text-emerald-300 font-mono text-xl mr-2">04.</span>
            Contact
          </h2>
          <div className="flex-1 h-px bg-emerald-600/18 dark:bg-emerald-300/18 ml-4"></div>
        </div>

        {/* Formulaire de contact */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-[1.75rem] border border-emerald-600/22 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] dark:border-white/14 dark:bg-[rgba(8,21,17,0.9)] dark:shadow-[0_18px_45px_rgba(0,0,0,0.2)]"
        >
          <div className="flex flex-col text-left">
            <label htmlFor="nom" className="mb-2 font-semibold text-slate-800 dark:text-white">
              Nom
            </label>
            <input
              type="text"
              name="nom"
              id="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className="rounded-2xl border border-emerald-600/24 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-500 shadow-[0_12px_34px_rgba(15,23,42,0.05)] outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-white/14 dark:bg-[rgba(8,21,17,0.92)] dark:text-white dark:placeholder:text-white/45"
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="email" className="mb-2 font-semibold text-slate-800 dark:text-white">
              Adresse Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-2xl border border-emerald-600/24 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-500 shadow-[0_12px_34px_rgba(15,23,42,0.05)] outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-white/14 dark:bg-[rgba(8,21,17,0.92)] dark:text-white dark:placeholder:text-white/45"
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="message" className="mb-2 font-semibold text-slate-800 dark:text-white">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="resize-none rounded-2xl border border-emerald-600/24 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-500 shadow-[0_12px_34px_rgba(15,23,42,0.05)] outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-white/14 dark:bg-[rgba(8,21,17,0.92)] dark:text-white dark:placeholder:text-white/45"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 inline-flex items-center rounded-2xl bg-emerald-600 px-6 py-3 text-white font-semibold shadow-[0_16px_36px_rgba(15,159,127,0.28)] transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-700"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
