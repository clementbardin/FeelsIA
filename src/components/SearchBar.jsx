import React from 'react';
import '../styles/searchbar.css';

function SearchBar({ onSearch }) {
  // ...
  return (
    <input 
      className="search-bar" 
      type="text" 
      placeholder="Rechercher par émotion..."
      onChange={(e) => onSearch(e.target.value)} 
    />
  );
}

export default SearchBar;
