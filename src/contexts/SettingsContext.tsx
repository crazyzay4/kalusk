import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Background, FontSize } from '../translations';

interface SettingsContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  background: Background;
  setBackground: (bg: Background) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('uk');
  const [background, setBackground] = useState<Background>('light');
  const [fontSize, setFontSize] = useState<FontSize>('medium');

  // Load from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('app_lang') as Language;
    const savedBg = localStorage.getItem('app_bg') as Background;
    const savedFont = localStorage.getItem('app_font') as FontSize;
    
    if (savedLang) setLanguage(savedLang);
    if (savedBg) setBackground(savedBg);
    if (savedFont) setFontSize(savedFont);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('app_lang', language);
    localStorage.setItem('app_bg', background);
    localStorage.setItem('app_font', fontSize);
  }, [language, background, fontSize]);

  return (
    <SettingsContext.Provider value={{ language, setLanguage, background, setBackground, fontSize, setFontSize }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}
