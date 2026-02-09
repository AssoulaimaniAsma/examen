import { empruntAxios } from './axiosConfig';

const EMPRUNT_ENDPOINT = '/api/emprunts';

export const empruntService = {
  // Récupérer tous les emprunts
  getAllEmprunts: async () => {
    try {
      const response = await empruntAxios.get(EMPRUNT_ENDPOINT);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des emprunts:', error);
      throw error;
    }
  },

  // Récupérer un emprunt par ID
  getEmpruntById: async (id) => {
    try {
      const response = await empruntAxios.get(`${EMPRUNT_ENDPOINT}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération de l'emprunt ${id}:`, error);
      throw error;
    }
  },

  // Récupérer emprunts d'un utilisateur
  getEmpruntsByUser: async (userId) => {
    try {
      const response = await empruntAxios.get(`${EMPRUNT_ENDPOINT}/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération des emprunts de l'utilisateur ${userId}:`, error);
      throw error;
    }
  },

  // Récupérer emprunts d'un livre
  getEmpruntsByLivre: async (livreId) => {
    try {
      const response = await empruntAxios.get(`${EMPRUNT_ENDPOINT}/livre/${livreId}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la récupération des emprunts du livre ${livreId}:`, error);
      throw error;
    }
  },

  // Créer un nouvel emprunt
  createEmprunt: async (empruntData) => {
    try {
      const response = await empruntAxios.post(EMPRUNT_ENDPOINT, empruntData);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la création de l\'emprunt:', error);
      throw error;
    }
  },

  // Modifier un emprunt
  updateEmprunt: async (id, empruntData) => {
    try {
      const response = await empruntAxios.put(`${EMPRUNT_ENDPOINT}/${id}`, empruntData);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la modification de l'emprunt ${id}:`, error);
      throw error;
    }
  },

  // Retourner un livre
  retournerLivre: async (id, dateRetour) => {
    try {
      const response = await empruntAxios.put(`${EMPRUNT_ENDPOINT}/${id}/retour`, {
        dateRetour
      });
      return response.data;
    } catch (error) {
      console.error(`Erreur lors du retour du livre pour l'emprunt ${id}:`, error);
      throw error;
    }
  },

  // Supprimer un emprunt
  deleteEmprunt: async (id) => {
    try {
      const response = await empruntAxios.delete(`${EMPRUNT_ENDPOINT}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erreur lors de la suppression de l'emprunt ${id}:`, error);
      throw error;
    }
  }
};