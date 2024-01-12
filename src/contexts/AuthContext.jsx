// src/contexts/AuthContext.jsx
import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Définition de 'setUser' ici avec useState

  const login = (email, password) => {
    // Ici, vous intégreriez avec votre service d'authentification
    // Cette fonction est juste un exemple et doit être remplacée par de la logique réelle
    setUser({ email }); // Utilisation de 'setUser' pour mettre à jour l'état
    // Simule une connexion réussie
  };

  const logout = () => {
    // Ici, vous nettoieriez les données de l'utilisateur et les jetons d'authentification si nécessaire
    setUser(null); // Utilisation de 'setUser' pour mettre à jour l'état
  };

  // Le contexte fournit 'user', 'login', et 'logout' pour les consommateurs
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
