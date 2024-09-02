import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; 

const resources = {
  en: {
    translation: {
      title: "NexusDev",
      subtitle: "foundation",
      techDesc: "Technologies for building responsive and intuitive websites.",
      socialDesc: "Join us on social media.",
      discordColor: "#7289DA",
      instagramColor: "#E4405F",
      gmailColor:"#D44638",
    }
  },
  fr: {
    translation: {
      title: "NexusDev",
      subtitle: "fondation",
      techDesc: "Technologies pour créer des sites web réactifs et intuitifs.",
      socialDesc: "Nous rejoindre sur les réseaux sociaux.",
      discordColor: "#7289DA",
      instagramColor: "#E4405F",
      gmailColor:"#D44638",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
