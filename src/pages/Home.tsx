import { useSettings } from '../contexts/SettingsContext';
import { translations } from '../translations';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Home() {
  const { language } = useSettings();
  const t = translations[language].home;

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4 mb-12">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
        >
          {t.title}
        </motion.h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full opacity-50"></div>
      </div>

      <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-black aspect-video relative group">
        <iframe 
          className="w-full h-full"
          src="https://www.youtube.com/embed/27KxYlC35Fk" 
          title="Відео про Калуш" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Відео про Калуш
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-blue-600 first-letter:mr-3 first-letter:float-left">
          {t.p1}
        </p>
        <p>{t.p2}</p>
        <p>{t.p3}</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-3xl mx-auto mt-12 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/50 text-center shadow-sm"
      >
        <p className="text-lg md:text-xl font-medium text-blue-800 dark:text-blue-200 flex items-center justify-center gap-3">
          <Sparkles className="text-blue-500" size={24} />
          {t.author}
          <Sparkles className="text-blue-500" size={24} />
        </p>
      </motion.div>
    </div>
  );
}
