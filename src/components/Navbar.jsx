import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import EmojiSearch from './EmojiSearch';
import '../styles/navbar.css';

function Navbar() {
  const handleSearch = (query) => {
    // Logique de recherche ici
  };

  const handleEmotionSelect = (emoji) => {
    // Logique à exécuter lorsque l'utilisateur sélectionne un emoji
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">FeelsIA</Link>
      <SearchBar onSearch={handleSearch} />
      <EmojiSearch onSelectEmotion={handleEmotionSelect} />
      <div className="nav-links">
        <Link to="/" className="nav-item">Accueil</Link>
        <Link to="/login" className="nav-item">Connexion</Link>
      </div>
    </nav>
  );
}

export default Navbar;
