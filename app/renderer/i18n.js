import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './translations/en.json';
import translationvn from './translations/vn.json';

const lang = localStorage.getItem('language') || 'en';

const resources = {
  en: {
    translation: translationEN,
  },
  vn: {
    translation: translationvn,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: lang,

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
