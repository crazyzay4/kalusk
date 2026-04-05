import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSettings } from '../contexts/SettingsContext';
import { translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';
import { Send, User, Mail, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const { language } = useSettings();
  const t = translations[language].contact;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage(t.errorEmail);
      return;
    }

    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    // Trigger confetti on success!
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2563eb', '#06b6d4', '#10b981', '#f59e0b']
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.title}</h2>
        <p className="text-slate-500 dark:text-slate-400">{t.desc}</p>
      </div>

      <AnimatePresence mode="wait">
        {status === 'error' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 text-red-700 dark:text-red-400 p-6 rounded-2xl text-center"
          >
            <AlertCircle className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <p className="font-medium mb-4">{errorMessage}</p>
            <p className="text-sm">
              {t.clickHere} <Link to="/" className="underline font-bold hover:text-red-900 dark:hover:text-red-300">here</Link> {t.toReturn}
            </p>
            <button 
              onClick={() => setStatus('idle')} 
              className="mt-6 px-4 py-2 bg-red-100 dark:bg-red-900/40 rounded-full text-sm font-medium hover:bg-red-200 dark:hover:bg-red-900/60 transition-colors"
            >
              {t.tryAgain}
            </button>
          </motion.div>
        )}

        {status === 'success' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 text-green-700 dark:text-green-400 p-8 rounded-2xl text-center"
          >
            <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-green-500 dark:text-green-400" />
            <h3 className="text-2xl font-bold mb-2">{t.successTitle}</h3>
            <p className="mb-8 opacity-80">{t.successDesc}</p>
            <Link to="/" className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20">
              {t.backHome}
            </Link>
          </motion.div>
        )}

        {status === 'idle' && (
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2" htmlFor="name">
                <User size={16} /> {t.name}
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2" htmlFor="email">
                <Mail size={16} /> {t.email}
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2" htmlFor="message">
                <MessageSquare size={16} /> {t.message}
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y transition-all"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all shadow-lg shadow-blue-600/20"
            >
              <Send size={20} />
              {t.send}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
