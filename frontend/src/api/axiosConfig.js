import axios from 'axios';

// URLs des microservices depuis .env
const LIVRE_SERVICE_URL = process.env.REACT_APP_LIVRE_SERVICE_URL || 'http://localhost:7071';
const EMPRUNT_SERVICE_URL = process.env.REACT_APP_EMPRUNT_SERVICE_URL || 'http://localhost:7073';
const USER_SERVICE_URL = process.env.REACT_APP_USER_SERVICE_URL || 'http://localhost:7072';

// Configuration commune pour tous les services
const commonConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
};

// Instance Axios pour le service Livre
export const livreAxios = axios.create({
  baseURL: LIVRE_SERVICE_URL,
  ...commonConfig,
});

// Instance Axios pour le service Emprunt
export const empruntAxios = axios.create({
  baseURL: EMPRUNT_SERVICE_URL,
  ...commonConfig,
});

// Instance Axios pour le service User
export const userAxios = axios.create({
  baseURL: USER_SERVICE_URL,
  ...commonConfig,
});

// Intercepteur pour les réponses - Livre Service
livreAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Erreur Livre Service:', error);
    if (error.code === 'ECONNREFUSED') {
      console.error('Le service Livre n\'est pas accessible. Vérifiez qu\'il est démarré sur', LIVRE_SERVICE_URL);
    }
    return Promise.reject(error);
  }
);

// Intercepteur pour les réponses - Emprunt Service
empruntAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Erreur Emprunt Service:', error);
    if (error.code === 'ECONNREFUSED') {
      console.error('Le service Emprunt n\'est pas accessible. Vérifiez qu\'il est démarré sur', EMPRUNT_SERVICE_URL);
    }
    return Promise.reject(error);
  }
);

// Intercepteur pour les réponses - User Service
userAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Erreur User Service:', error);
    if (error.code === 'ECONNREFUSED') {
      console.error('Le service User n\'est pas accessible. Vérifiez qu\'il est démarré sur', USER_SERVICE_URL);
    }
    return Promise.reject(error);
  }
);

// Export des URLs pour utilisation dans les composants si nécessaire
export const SERVICE_URLS = {
  LIVRE: LIVRE_SERVICE_URL,
  EMPRUNT: EMPRUNT_SERVICE_URL,
  USER: USER_SERVICE_URL,
};