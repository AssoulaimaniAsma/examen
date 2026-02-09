import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>📚 Biblio App</h1>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/livres">Livres</Link></li>
        <li><Link to="/emprunts">Emprunts</Link></li>
        <li><Link to="/users">Utilisateurs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;