import { livreAxios } from './axiosConfig';

const LIVRE_ENDPOINT = '/api/livres';

export const livreService = {
  // Récupérer tous les livres
  getAllLivres: async () => {
    try {
      const response = await livreAxios.get(LIVRE_ENDPOINT);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des livres:', error);
      throw error;
    }
  },

  // Récupérer un livre par ID
  getLivreById: async (id) => {
    try {
      const response = await livreAxios.get(`${LIVRE_ENDPOINT}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération du livre ${id}:`, error);
      throw error;
    }
  },

  // Créer un nouveau livre
  createLivre: async (livreData) => {
    try {
      const response = await livreAxios.post(LIVRE_ENDPOINT, livreData);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création du livre:', error);
      throw error;
    }
  },

  // Modifier un livre
  updateLivre: async (id, livreData) => {
    try {
      const response = await livreAxios.put(`${LIVRE_ENDPOINT}/${id}`, livreData);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la modification du livre ${id}:`, error);
      throw error;
    }
  },

  // Supprimer un livre
  deleteLivre: async (id) => {
    try {
      const response = await livreAxios.delete(`${LIVRE_ENDPOINT}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la suppression du livre ${id}:`, error);
      throw error;
    }
  },

  // Rechercher des livres
  searchLivres: async (searchTerm) => {
    try {
      const response = await livreAxios.get(`${LIVRE_ENDPOINT}/search`, {
        params: { q: searchTerm }
      });
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la recherche de livres:', error);
      throw error;
    }
  }
};