import React, { useState } from 'react';
import { FaGlobe } from 'react-icons/fa'; 
import "../src/langageSelector.css";

const LanguageSelector = ({ onChangeLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen); // Vérification de l'état isOpen
  };

  const handleLanguageChange = (lang) => {
    onChangeLanguage(lang);
    setIsOpen(false); 
  };

  return (
    <div className={`language-selector ${isOpen ? 'show' : ''}`} onClick={toggleMenu}>
      <FaGlobe className="translate-icon rotating-globe" />
      <div className="dropdown-menu">
        <button onClick={() => handleLanguageChange('en')}>English</button>
        <button onClick={() => handleLanguageChange('fr')}>Français</button>
      </div>
    </div>
  );
};

export default LanguageSelector;
