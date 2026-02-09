import React from 'react';
import '../../styles/UserCard.css';

const UserCard = ({ user, onDelete, onEdit }) => {
  return (
    <div className="user-card">
      <div className="user-avatar">
        👤
      </div>
      <h3>{user.firstName} {user.lastName}</h3>
      <div className="user-details">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>ID:</strong> {user.idUser}</p>
      </div>
      <div className="card-actions">
        <button 
          className="btn-edit"
          onClick={() => onEdit(user)}
        >
          ✏️ Modifier
        </button>
        <button 
          className="btn-delete"
          onClick={() => onDelete(user.idUser)}
        >
          🗑️ Supprimer
        </button>
      </div>
    </div>
  );
};

export default UserCard;