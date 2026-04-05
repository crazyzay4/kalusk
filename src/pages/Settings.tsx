import React from 'react';
import { useSettings } from '../contexts/SettingsContext';
import { translations } from '../translations';
import { motion } from 'motion/react';
import { Globe, Palette, Type } from 'lucide-react';

export default function Settings() {
  const { language, setLanguage, background, setBackground, fontSize, setFontSize } = useSettings();
  const t = translations[language].settings;

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.title}</h2>
      </div>
      
      <div className="space-y-6">
        {/* Language Setting */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700"
        >
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Globe className="text-blue-500" /> {t.language}
          </h3>
          <div className="flex gap-3">
            {(['uk', 'en'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${language === lang ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 scale-[1.02]' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600'}`}
              >
                {lang === 'uk' ? 'Українська' : 'English'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Background Setting */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700"
        >
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Palette className="text-blue-500" /> {t.background}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'light', label: t.bgLight, color: 'bg-slate-100' },
              { id: 'dark', label: t.bgDark, color: 'bg-slate-900' },
              { id: 'blue', label: t.bgBlue, color: 'bg-blue-100' }
            ].map((bg) => (
              <button
                key={bg.id}
                onClick={() => setBackground(bg.id as any)}
                className={`relative overflow-hidden flex flex-col items-center justify-center p-4 rounded-xl font-medium transition-all border-2 ${background === bg.id ? 'border-blue-600 shadow-md scale-[1.02]' : 'border-transparent bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'}`}
              >
                <div className={`w-full h-12 rounded-lg mb-3 shadow-inner ${bg.color}`}></div>
                {bg.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Font Size Setting */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700"
        >
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Type className="text-blue-500" /> {t.fontSize}
          </h3>
          <div className="flex gap-3">
            {[
              { id: 'small', label: t.fontSmall, size: 'text-sm' },
              { id: 'medium', label: t.fontMedium, size: 'text-base' },
              { id: 'large', label: t.fontLarge, size: 'text-lg' }
            ].map((font) => (
              <button
                key={font.id}
                onClick={() => setFontSize(font.id as any)}
                className={`flex-1 py-3 px-2 rounded-xl font-medium transition-all ${font.size} ${fontSize === font.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 scale-[1.02]' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600'}`}
              >
                {font.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
