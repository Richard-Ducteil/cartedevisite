import React, { useEffect, useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import StarBackground from "./StarBackground";
import logo from "./image/logo.webp";
import './i18n';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../src/langageSelector';  // Correction de l'importation
import { FaReact, FaWordpress, FaInstagram, FaDiscord, FaEnvelope } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

function App() {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = 600;
    setIsVisible(scrollPosition > threshold);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
        <LanguageSelector onChangeLanguage={handleLanguageChange} />
      <div className="StarBackgroundCanvas">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <StarBackground />
        </Canvas>
      </div>

      <div className="content">
        <img src={logo} alt="Logo" className="logo" />
        <h1>{t('title')}</h1>
        <p>{t('subtitle')}</p>
        <p>{t('techDesc')}</p>
        <div className="tech-icons">
          <FaReact className="tech-icon react-icon" />
          <SiNextdotjs className="tech-icon nextjs-icon" />
          <FaWordpress className="tech-icon wordpress-icon" />
        </div>

        <div className="separator"></div>
        <p>{t('socialDesc')}</p>
        <div className={`social-icons ${isVisible ? "scroll-appear" : ""}`}>
          <a
            href="https://discord.com/channels/@me"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{ color: t('discordColor') }}
          >
            <FaDiscord />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{ color: t('instagramColor') }}
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:ducteil.richard@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{ color: t('gmailColor') }}
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
