import React, { useEffect, useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import StarBackground from "./StarBackground";
import logo from "../src/image/logo.webp";
import {
  FaReact,
  FaWordpress,
  FaInstagram,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import LanguageSelector from "../src/langageSelector";

const translations = {
  en: {
    title: "NexusDev",
    subtitle: "foundation",
    techDesc: "Technologies for building responsive and intuitive websites.",
    socialDesc: "Join us on social media.",
    discordColor: "#7289DA",
    instagramColor: "#E4405F",
    gmailColor:"#D44638",
  },
  fr: {
    title: "NexusDev",
    subtitle: "fondation",
    techDesc: "Technologies pour créer des sites web réactifs et intuitifs.",
    socialDesc: "Nous rejoindre sur les réseaux sociaux.",
    discordColor: "#7289DA",
    instagramColor: "#E4405F",
    gmailColor:"#D44638",
  },
};

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState("en");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const threshold = 600;
    setIsVisible(scrollPosition > threshold);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const {
    title,
    subtitle,
    techDesc,
    socialDesc,
    discordColor,
    instagramColor,
    gmailColor,
  } = translations[language];

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
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <p>{techDesc}</p>
        <div className="tech-icons">
          <FaReact className="tech-icon react-icon" />
          <SiNextdotjs className="tech-icon nextjs-icon" />
          <FaWordpress className="tech-icon wordpress-icon" />
        </div>

        <div className="separator"></div>
        <p>{socialDesc}</p>
        <div className={`social-icons ${isVisible ? "scroll-appear" : ""}`}>
          <a
            href="https://discord.com/channels/@me"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{ color: discordColor }}
          >
            <FaDiscord />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{ color: instagramColor }}
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:ducteil.richard@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{ color: gmailColor }}
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
