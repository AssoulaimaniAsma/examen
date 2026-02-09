import React from 'react';
import '../../styles/EmpruntCard.css';

const EmpruntCard = ({ emprunt, livre, user, onDelete }) => {
  return (
    <div className="emprunt-card">
      <h3>Emprunt #{emprunt.idEmprunt}</h3>
      <div className="emprunt-details">
        <p><strong>📚 Livre:</strong> {livre?.titreLivre || 'N/A'}</p>
        <p><strong>👤 Utilisateur:</strong> {user ? `${user.firstName} ${user.lastName}` : 'N/A'}</p>
        <p><strong>📅 Date emprunt:</strong> {emprunt.dateEmprunt}</p>
        <p><strong>🔙 Date retour:</strong> {emprunt.dateRetour || 'Non retourné'}</p>
      </div>
      <div className="card-actions">
        <button 
          className="btn-delete"
          onClick={() => onDelete(emprunt.idEmprunt)}
        >
          🗑️ Supprimer
        </button>
      </div>
    </div>
  );
};

export default EmpruntCard;