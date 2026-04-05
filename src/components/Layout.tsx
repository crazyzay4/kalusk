import { Outlet, Link, useLocation } from 'react-router-dom';
import { useSettings } from '../contexts/SettingsContext';
import { translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Image as ImageIcon, Mail, Settings as SettingsIcon } from 'lucide-react';

export default function Layout() {
  const { language, background, fontSize } = useSettings();
  const t = translations[language].nav;
  const location = useLocation();

  let bgClass = 'bg-slate-50 text-slate-800';
  let navBg = 'bg-white/80 backdrop-blur-md border-slate-200';
  let cardBg = 'bg-white border-slate-100 shadow-xl shadow-slate-200/50';
  
  if (background === 'dark') {
    bgClass = 'bg-slate-950 text-slate-100';
    navBg = 'bg-slate-900/80 backdrop-blur-md border-slate-800';
    cardBg = 'bg-slate-900 border-slate-800 shadow-2xl shadow-black/50';
  } else if (background === 'blue') {
    bgClass = 'bg-blue-50 text-blue-950';
    navBg = 'bg-white/80 backdrop-blur-md border-blue-100';
    cardBg = 'bg-white border-blue-100 shadow-xl shadow-blue-200/50';
  }

  let fontClass = 'text-base';
  if (fontSize === 'small') fontClass = 'text-sm';
  if (fontSize === 'large') fontClass = 'text-lg';

  const navItems = [
    { path: '/', label: t.home, icon: Home },
    { path: '/photos', label: t.photos, icon: ImageIcon },
    { path: '/contact', label: t.contact, icon: Mail },
    { path: '/settings', label: t.settings, icon: SettingsIcon },
  ];

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${bgClass} ${fontClass} flex flex-col`}>
      <header className={`sticky top-0 z-50 border-b transition-colors duration-500 ${navBg}`}>
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl tracking-tight flex items-center gap-2">
            <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center">К</span>
            {translations[language].home.title}
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`relative px-4 py-2 rounded-full font-medium transition-colors ${isActive ? 'text-blue-600 dark:text-blue-400' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="nav-pill" 
                      className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="flex items-center gap-2">
                    <item.icon size={16} />
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto p-4 md:p-8 pb-24 md:pb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`rounded-3xl border p-6 md:p-10 transition-colors duration-500 ${cardBg}`}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      
      {/* Mobile Nav */}
      <nav className={`md:hidden fixed bottom-0 left-0 right-0 border-t pb-safe transition-colors duration-500 z-50 ${navBg}`}>
        <div className="flex justify-around p-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path}
                to={item.path} 
                className={`flex flex-col items-center p-2 rounded-xl ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400'}`}
              >
                <item.icon size={20} className="mb-1" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
