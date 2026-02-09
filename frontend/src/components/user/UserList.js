import React, { useState, useEffect } from 'react';
import { userService } from '../../api/userService';
import UserCard from './UserCard';
import UserForm from './UserForm';
import Loader from '../common/Loader';
import ErrorMessage from '../common/ErrorMessage';
import '../../styles/UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await userService.getAllUsers();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError('Erreur lors du chargement des utilisateurs');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
      try {
        await userService.deleteUser(id);
        fetchUsers();
      } catch (err) {
        setError('Erreur lors de la suppression');
      }
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setShowForm(true);
  };

  const handleFormSubmit = async (userData) => {
    try {
      if (editingUser) {
        await userService.updateUser(editingUser.idUser, userData);
      } else {
        await userService.createUser(userData);
      }
      setShowForm(false);
      setEditingUser(null);
      fetchUsers();
    } catch (err) {
      setError('Erreur lors de l\'enregistrement');
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingUser(null);
  };

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="user-list">
      <div className="list-header">
        <h2>👥 Liste des Utilisateurs</h2>
        <button 
          className="btn-add"
          onClick={() => setShowForm(true)}
        >
          ➕ Ajouter un utilisateur
        </button>
      </div>

      {showForm && (
        <UserForm 
          user={editingUser}
          onSubmit={handleFormSubmit}
          onCancel={handleCancel}
        />
      )}

      <div className="user-grid">
        {users.map((user) => (
          <UserCard 
            key={user.idUser} 
            user={user} 
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>

      {users.length === 0 && (
        <p className="no-data">Aucun utilisateur trouvé</p>
      )}
    </div>
  );
};

export default UserList;