import React, { useState } from 'react';
import '../../styles/Form.css';

const EmpruntForm = ({ livres, users, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    idLivre: '',
    idUser: '',
    dateEmprunt: new Date().toISOString().split('T')[0],
    dateRetour: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      idLivre: parseInt(formData.idLivre),
      idUser: parseInt(formData.idUser)
    };
    onSubmit(dataToSend);
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <h3>Nouvel emprunt</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Livre *</label>
            <select
              name="idLivre"
              value={formData.idLivre}
              onChange={handleChange}
              required
            >
              <option value="">Sélectionner un livre</option>
              {livres.map(livre => (
                <option key={livre.idLivre} value={livre.idLivre}>
                  {livre.titreLivre}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Utilisateur *</label>
            <select
              name="idUser"
              value={formData.idUser}
              onChange={handleChange}
              required
            >
              <option value="">Sélectionner un utilisateur</option>
              {users.map(user => (
                <option key={user.idUser} value={user.idUser}>
                  {user.firstName} {user.lastName}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Date d'emprunt *</label>
            <input
              type="date"
              name="dateEmprunt"
              value={formData.dateEmprunt}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Date de retour</label>
            <input
              type="date"
              name="dateRetour"
              value={formData.dateRetour}
              onChange={handleChange}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              Créer
            </button>
            <button type="button" className="btn-cancel" onClick={onCancel}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmpruntForm;