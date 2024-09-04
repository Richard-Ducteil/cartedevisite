import React, { useState } from 'react';
import { FaGlobe } from 'react-icons/fa'; 
import "./langageSelector.css";  // Assure-toi que le chemin est correct

const LanguageSelector = ({ onChangeLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen); 
  };

  const handleLanguageChange = (lang) => {
    onChangeLanguage(lang);
    setIsOpen(false); 
  };

  return (
    <div className="language-selector">
      <FaGlobe 
        className="translate-icon rotating-globe" 
        onClick={toggleMenu} 
        aria-haspopup="true" 
        aria-expanded={isOpen} 
        title="Change language"
        aria-label="Change language"
      />
      <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        <button onClick={() => handleLanguageChange('en')}>English</button>
        <button onClick={() => handleLanguageChange('fr')}>Français</button>
      </div>
    </div>
  );
};

export default LanguageSelector;