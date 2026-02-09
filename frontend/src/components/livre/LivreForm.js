import React, { useState, useEffect } from 'react';
import '../../styles/Form.css';

const LivreForm = ({ livre, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    titreLivre: '',
    auteurLivre: '',
    anneeLivre: '',
    editionLivre: ''
  });

  useEffect(() => {
    if (livre) {
      setFormData({
        titreLivre: livre.titreLivre || '',
        auteurLivre: livre.auteurLivre || '',
        anneeLivre: livre.anneeLivre || '',
        editionLivre: livre.editionLivre || ''
      });
    } else {
      // Réinitialiser le formulaire si pas de livre
      setFormData({
        titreLivre: '',
        auteurLivre: '',
        anneeLivre: '',
        editionLivre: ''
      });
    }
  }, [livre]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 🔧 CORRECTION IMPORTANTE : Convertir anneeLivre en nombre entier
    const dataToSend = {
      titreLivre: formData.titreLivre,
      auteurLivre: formData.auteurLivre,
      anneeLivre: parseInt(formData.anneeLivre, 10), // Conversion en nombre
      editionLivre: formData.editionLivre
    };

    onSubmit(dataToSend);
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <h3>{livre ? 'Modifier le livre' : 'Nouveau livre'}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Titre *</label>
            <input
              type="text"
              name="titreLivre"
              value={formData.titreLivre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Auteur *</label>
            <input
              type="text"
              name="auteurLivre"
              value={formData.auteurLivre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Année *</label>
            <input
              type="number"
              name="anneeLivre"
              value={formData.anneeLivre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Édition</label>
            <input
              type="text"
              name="editionLivre"
              value={formData.editionLivre}
              onChange={handleChange}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              {livre ? 'Modifier' : 'Créer'}
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

export default LivreForm;