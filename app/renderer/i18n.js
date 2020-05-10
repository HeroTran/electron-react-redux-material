import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEN from './translations/en.json';
import translationVn from './translations/vn.json';

window.localStorage.setItem('language', 'en');
const lang = localStorage.getItem('language') || 'en';

const resources = {
  en: {
    translation: translationEN,
  },
  vn: {
    translation: translationVn,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: lang,
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: '.',
    },
  });

export default i18n;
