import React, { useState, useEffect } from 'react';
import { livreService } from '../../api/livreService';
import LivreCard from './LivreCard';
import LivreForm from './LivreForm';
import Loader from '../common/Loader';
import ErrorMessage from '../common/ErrorMessage';
import '../../styles/LivreList.css';

const LivreList = () => {
  const [livres, setLivres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingLivre, setEditingLivre] = useState(null);

  useEffect(() => {
    fetchLivres();
  }, []);

  const fetchLivres = async () => {
    try {
      setLoading(true);
      const data = await livreService.getAllLivres();
      setLivres(data);
      setError(null);
    } catch (err) {
      setError('Erreur lors du chargement des livres');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce livre ?')) {
      try {
        await livreService.deleteLivre(id);
        fetchLivres();
      } catch (err) {
        setError('Erreur lors de la suppression');
      }
    }
  };

  const handleEdit = (livre) => {
    setEditingLivre(livre);
    setShowForm(true);
  };

  const handleFormSubmit = async (livreData) => {
    try {
      if (editingLivre) {
        await livreService.updateLivre(editingLivre.idLivre, livreData);
      } else {
        await livreService.createLivre(livreData);
      }
      setShowForm(false);
      setEditingLivre(null);
      fetchLivres();
    } catch (err) {
      setError('Erreur lors de l\'enregistrement');
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingLivre(null);
  };

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="livre-list">
      <div className="list-header">
        <h2>📚 Liste des Livres</h2>
        <button 
          className="btn-add"
          onClick={() => setShowForm(true)}
        >
          ➕ Ajouter un livre
        </button>
      </div>

      {showForm && (
        <LivreForm 
          livre={editingLivre}
          onSubmit={handleFormSubmit}
          onCancel={handleCancel}
        />
      )}

      <div className="livre-grid">
        {livres.map((livre) => (
          <LivreCard 
            key={livre.idLivre} 
            livre={livre} 
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>

      {livres.length === 0 && (
        <p className="no-data">Aucun livre trouvé</p>
      )}
    </div>
  );
};

export default LivreList;