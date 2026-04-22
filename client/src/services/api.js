/**
 * API Service for Coinbase Clone Frontend
 * Handles all communication with the backend API
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Make API request with proper headers and error handling
 */
async function apiRequest(endpoint, options = {}) {
  const { method = 'GET', body = null, headers = {} } = options;
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  // Add auth token if available
  const token = localStorage.getItem('authToken');
  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    method,
    headers: { ...defaultHeaders, ...headers },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `HTTP ${response.status}: ${response.statusText}`);
    }

    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

/**
 * Authentication APIs
 */
export const authAPI = {
  register: (name, email, password) =>
    apiRequest('/auth/register', {
      method: 'POST',
      body: { name, email, password },
    }),

  login: (email, password) =>
    apiRequest('/auth/login', {
      method: 'POST',
      body: { email, password },
    }),

  getProfile: () => apiRequest('/auth/profile'),
};

/**
 * Cryptocurrency APIs
 */
export const cryptoAPI = {
  getAllCryptos: () => apiRequest('/crypto'),

  getTopGainers: () => apiRequest('/crypto/gainers'),

  getNewListings: () => apiRequest('/crypto/new'),

  addCrypto: (name, symbol, price, change24h, image) =>
    apiRequest('/crypto', {
      method: 'POST',
      body: { name, symbol, price, change24h, image },
    }),

  updateCrypto: (id, data) =>
    apiRequest(`/crypto/${id}`, {
      method: 'PUT',
      body: data,
    }),

  deleteCrypto: (id) =>
    apiRequest(`/crypto/${id}`, {
      method: 'DELETE',
    }),
};

/**
 * Storage utilities for auth token
 */
export const storage = {
  saveToken: (token) => localStorage.setItem('authToken', token),
  getToken: () => localStorage.getItem('authToken'),
  removeToken: () => localStorage.removeItem('authToken'),
  saveUser: (user) => localStorage.setItem('user', JSON.stringify(user)),
  getUser: () => JSON.parse(localStorage.getItem('user') || 'null'),
  removeUser: () => localStorage.removeItem('user'),
};
