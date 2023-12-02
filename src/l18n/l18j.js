import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt_br_translation from './pt-br/translation';
import en_translation from './en/translation';

// Example locales
const resources = {
  ptbr: {translation: pt_br_translation},
  en: {translation: en_translation}
  // Other languages...
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'ptbr', // default language
    interpolation: {
      escapeValue: false, // react already escapes by default
    },
    // Add any additional configuration options here
  });

  console.log('i18n initialized:', i18n);

export default i18n;