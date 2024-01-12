// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute'; // Assurez-vous que ce composant est défini correctement

// Lazy loading des composants de page
const HomePage = lazy(() => import('./views/HomePage'));
const LoginPage = lazy(() => import('./views/LoginPage'));

const App = () => {
  return (
    <AuthProvider>
      <Router>
      <Navbar />
        <Suspense fallback={<div>Chargement...</div>}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/protected"
              element={
                <ProtectedRoute>
                  {/* Composant ou page protégée ici */}
                </ProtectedRoute>
              }
            />
            {/* Vous pouvez ajouter plus de routes ici */}
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
};

export default App;
