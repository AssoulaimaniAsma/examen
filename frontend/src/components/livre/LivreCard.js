import React from 'react';
import '../../styles/LivreCard.css';

const LivreCard = ({ livre, onDelete, onEdit }) => {
  return (
    <div className="livre-card">
      <h3>{livre.titreLivre}</h3>
      <div className="livre-details">
        <p><strong>Auteur:</strong> {livre.auteurLivre}</p>
        <p><strong>Année:</strong> {livre.anneeLivre}</p>
        <p><strong>Édition:</strong> {livre.editionLivre}</p>
      </div>
      <div className="card-actions">
        <button 
          className="btn-edit"
          onClick={() => onEdit(livre)}
        >
          ✏️ Modifier
        </button>
        <button 
          className="btn-delete"
          onClick={() => onDelete(livre.idLivre)}
        >
          🗑️ Supprimer
        </button>
      </div>
    </div>
  );
};

export default LivreCard;