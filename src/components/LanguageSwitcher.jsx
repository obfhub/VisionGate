import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-slate-600" />
      <button
        onClick={() => handleLanguageChange('ro')}
        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
          i18n.language === 'ro'
            ? 'bg-blue-600 text-white'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
        }`}
      >
        RO
      </button>
      <button
        onClick={() => handleLanguageChange('ru')}
        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
          i18n.language === 'ru'
            ? 'bg-blue-600 text-white'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
        }`}
      >
        RU
      </button>
    </div>
  );
}
