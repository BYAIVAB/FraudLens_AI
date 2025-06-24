import axios from 'axios';

// Use Render backend URL in production, fallback to local for development
const baseURL = import.meta.env.PROD
  ? import.meta.env.VITE_API_URL
  : '/api';

const api = axios.create({
  baseURL: baseURL,
});

export const checkFraud = async (data) => {
  const res = await api.post('/predict', data);
  return res.data;
};

export const getExplanation = async (transactionId) => {
  const res = await api.get(`/explain/${transactionId}`);
  return res.data;
};

// --- Other Endpoints ---
// Note: These endpoints are not defined in the current backend routes.
// They are kept here for future implementation.

export const getTransactions = () => api.get('/transactions');
export const getTransaction = (id) => api.get(`/transactions/${id}`);
export const getDashboardStats = () => api.get('/dashboard/stats');
export const getReports = () => api.get('/reports');
export const getSettings = () => api.get('/settings');
export const updateSettings = (data) => api.post('/settings', data);

export default api;