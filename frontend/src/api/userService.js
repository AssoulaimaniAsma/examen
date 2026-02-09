import { userAxios } from './axiosConfig';

const USER_ENDPOINT = '/api/users';

export const userService = {
  // Récupérer tous les utilisateurs
  getAllUsers: async () => {
    try {
      const response = await userAxios.get(USER_ENDPOINT);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs:', error);
      throw error;
    }
  },

  // Récupérer un utilisateur par ID
  getUserById: async (id) => {
    try {
      const response = await userAxios.get(`${USER_ENDPOINT}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération de l'utilisateur ${id}:`, error);
      throw error;
    }
  },

  // Créer un nouvel utilisateur
  createUser: async (userData) => {
    try {
      const response = await userAxios.post(USER_ENDPOINT, userData);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur:', error);
      throw error;
    }
  },

  // Modifier un utilisateur
  updateUser: async (id, userData) => {
    try {
      const response = await userAxios.put(`${USER_ENDPOINT}/${id}`, userData);
      console.log("TEST PASSE",response);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la modification de l'utilisateur ${id}:`, error);
      throw error;
    }
  },

  // Supprimer un utilisateur
  deleteUser: async (id) => {
    try {
      const response = await userAxios.delete(`${USER_ENDPOINT}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la suppression de l'utilisateur ${id}:`, error);
      throw error;
    }
  },

  // Rechercher des utilisateurs
  searchUsers: async (searchTerm) => {
    try {
      const response = await userAxios.get(`${USER_ENDPOINT}/search`, {
        params: { q: searchTerm }
      });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la recherche d\'utilisateurs:', error);
      throw error;
    }
  }
};