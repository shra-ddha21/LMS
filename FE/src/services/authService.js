import { API_URL, handleResponse } from './api';

const authService = {
    login: async (email, password) => {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
            credentials: 'include', // Important for cookies
        });
        return handleResponse(response);
    },

    register: async (userData) => {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
            credentials: 'include',
        });
        return handleResponse(response);
    },

    logout: async () => {
        const response = await fetch(`${API_URL}/auth/logout`, {
            method: 'POST',
            credentials: 'include',
        });
        return handleResponse(response);
    },

    getCurrentUser: async () => {
        const response = await fetch(`${API_URL}/auth/me`, {
            method: 'GET',
            credentials: 'include',
        });
        return handleResponse(response);
    },
};

export default authService;
