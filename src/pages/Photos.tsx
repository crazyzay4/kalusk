import { useSettings } from '../contexts/SettingsContext';
import { translations } from '../translations';
import { motion } from 'motion/react';
import { Music, Facebook, Twitter, Send, Link as LinkIcon } from 'lucide-react';

export default function Photos() {
  const { language } = useSettings();
  const t = translations[language].photos;

  const photos = [
    {
      url: "/photo1.jpg",
      alt: "Я люблю Калуш",
      caption: "Я люблю Калуш"
    },
    {
      url: "/photo2.jpg",
      alt: "Центр Калуша",
      caption: "Центр міста"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.title}</h2>
        <p className="text-slate-500 dark:text-slate-400">Галерея мальовничих краєвидів</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {photos.map((photo, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-slate-100 dark:bg-slate-800"
          >
            <img 
              src={photo.url} 
              alt={photo.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-white font-medium text-lg mb-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{photo.caption}</span>
              <div className="flex gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(photo.url)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2.5 bg-white/20 hover:bg-blue-600 rounded-full text-white backdrop-blur-md transition-all hover:scale-110"
                  title="Share on Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(photo.url)}&text=${encodeURIComponent(photo.caption)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2.5 bg-white/20 hover:bg-sky-500 rounded-full text-white backdrop-blur-md transition-all hover:scale-110"
                  title="Share on Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href={`https://t.me/share/url?url=${encodeURIComponent(photo.url)}&text=${encodeURIComponent(photo.caption)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2.5 bg-white/20 hover:bg-blue-500 rounded-full text-white backdrop-blur-md transition-all hover:scale-110"
                  title="Share on Telegram"
                >
                  <Send size={18} />
                </a>
                <button 
                  onClick={() => navigator.clipboard.writeText(photo.url)} 
                  className="p-2.5 bg-white/20 hover:bg-slate-600 rounded-full text-white backdrop-blur-md transition-all hover:scale-110"
                  title="Copy Link"
                >
                  <LinkIcon size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-md mx-auto bg-blue-50 dark:bg-blue-900/20 rounded-3xl p-6 md:p-8 text-center space-y-6 shadow-inner border border-blue-100 dark:border-blue-800/50">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto text-blue-600 dark:text-blue-300 shadow-sm">
            <Music size={32} />
          </div>
          <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100">{t.anthem}</h2>
          
          <div className="w-full bg-white dark:bg-slate-800 rounded-full p-2 shadow-sm">
            <audio controls className="w-full h-10 outline-none">
              <source src="/%D0%93%D1%96%D0%BC%D0%BD.ogg" type="audio/ogg" />
              {t.noAudio}
            </audio>
          </div>
          <p className="text-xs text-blue-600/70 dark:text-blue-400/70">
            Гімн Калуша
          </p>
        </div>
      </div>
    </div>
  );
}
