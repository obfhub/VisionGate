import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import roTranslations from './locales/ro.json';
import ruTranslations from './locales/ru.json';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      ro: { translation: roTranslations },
      ru: { translation: ruTranslations },
    },
    lng: localStorage.getItem('language') || 'ro',
    fallbackLng: 'ro',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
