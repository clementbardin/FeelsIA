// src/views/LoginPage.jsx
import React, { useState } from 'react';
import axios from 'axios'; // Assurez-vous d'installer axios avec npm ou yarn
import '../styles/loginpage.css';
import '../styles/homepage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://votre-server.com/login.php', {
        email: email,
        password: password,
      });
      if(response.data.success){
        // Gérer la réponse réussie (peut-être rediriger l'utilisateur ou stocker les infos dans un contexte/global state)
      } else {
        // Gérer l'échec de la connexion (afficher un message d'erreur)
      }
    } catch (error) {
      console.error('Une erreur est survenue lors de la connexion', error);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}

export default LoginPage;
