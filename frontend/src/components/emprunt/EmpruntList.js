import React, { useState, useEffect } from 'react';
import { empruntService } from '../../api/empruntService';
import { livreService } from '../../api/livreService';
import { userService } from '../../api/userService';
import EmpruntCard from './EmpruntCard';
import EmpruntForm from './EmpruntForm';
import Loader from '../common/Loader';
import ErrorMessage from '../common/ErrorMessage';
import '../../styles/EmpruntList.css';

const EmpruntList = () => {
  const [emprunts, setEmprunts] = useState([]);
  const [livres, setLivres] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const [empruntsData, livresData, usersData] = await Promise.all([
        empruntService.getAllEmprunts(),
        livreService.getAllLivres(),
        userService.getAllUsers()
      ]);
      
      setEmprunts(empruntsData);
      setLivres(livresData);
      setUsers(usersData);
      setError(null);
    } catch (err) {
      setError('Erreur lors du chargement des données');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet emprunt ?')) {
      try {
        await empruntService.deleteEmprunt(id);
        fetchAllData();
      } catch (err) {
        setError('Erreur lors de la suppression');
      }
    }
  };

  const handleFormSubmit = async (empruntData) => {
    try {
      await empruntService.createEmprunt(empruntData);
      setShowForm(false);
      fetchAllData();
    } catch (err) {
      setError('Erreur lors de la création');
    }
  };

  const getLivreById = (id) => {
    return livres.find(l => l.idLivre === id);
  };

  const getUserById = (id) => {
    return users.find(u => u.idUser === id);
  };

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="emprunt-list">
      <div className="list-header">
        <h2>📖 Liste des Emprunts</h2>
        <button 
          className="btn-add"
          onClick={() => setShowForm(true)}
        >
          ➕ Nouvel emprunt
        </button>
      </div>

      {showForm && (
        <EmpruntForm 
          livres={livres}
          users={users}
          onSubmit={handleFormSubmit}
          onCancel={() => setShowForm(false)}
        />
      )}

      <div className="emprunt-grid">
        {emprunts.map((emprunt) => (
          <EmpruntCard 
            key={emprunt.idEmprunt} 
            emprunt={emprunt}
            livre={getLivreById(emprunt.idLivre)}
            user={getUserById(emprunt.idUser)}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {emprunts.length === 0 && (
        <p className="no-data">Aucun emprunt trouvé</p>
      )}
    </div>
  );
};

export default EmpruntList;