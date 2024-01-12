// src/components/EmojiSearch.jsx
import React from 'react';

function EmojiSearch({ onSelectEmotion }) {
  const emojis = ['😃', '😢', '😠', '😍', '😐']; // Ajoutez ou supprimez des emojis selon vos besoins

  return (
    <div className="emoji-search">
      {emojis.map((emoji, index) => (
        <button key={index} onClick={() => onSelectEmotion(emoji)}>
          {emoji}
        </button>
      ))}
    </div>
  );
}

export default EmojiSearch;
