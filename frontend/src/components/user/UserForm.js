import React, { useState, useEffect } from 'react';
import '../../styles/Form.css';

const UserForm = ({ user, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || ''
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <h3>{user ? 'Modifier l\'utilisateur' : 'Nouvel utilisateur'}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Prénom *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Nom *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              {user ? 'Modifier' : 'Créer'}
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

export default UserForm;