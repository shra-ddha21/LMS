export const API_URL = 'http://localhost:5000/api';

export const handleResponse = async (response) => {
    if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Something went wrong' }));
        throw new Error(error.message || 'Something went wrong');
    }
    return response.json();
};
