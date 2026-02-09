import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>📚 Bienvenue dans Biblio App</h1>
      <p>Système de gestion de bibliothèque</p>
      
      <div className="feature-cards">
        <Link to="/livres" className="feature-card">
          <div className="feature-icon">📚</div>
          <h3>Livres</h3>
          <p>Gérer les livres de la bibliothèque</p>
        </Link>

        <Link to="/emprunts" className="feature-card">
          <div className="feature-icon">📖</div>
          <h3>Emprunts</h3>
          <p>Suivre les emprunts en cours</p>
        </Link>

        <Link to="/users" className="feature-card">
          <div className="feature-icon">👥</div>
          <h3>Utilisateurs</h3>
          <p>Gérer les utilisateurs</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;