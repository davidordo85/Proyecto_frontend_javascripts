const BASE_URL = "http://127.0.0.1:8000";
const TOKEN_KEY = 'token';

export default {

    getAdvertisements: async function() {
        const url = `${BASE_URL}/api/advertisements`;
        const response = await fetch(url);
        if (response.ok) {
            const data = response.json();
            return data; // <--- esto realmente es un resolve(data)
        } else {
            throw new Error(`HTTP Error: ${response.status}`)
        }
    },

    advertisement: async function(url, advertisementData) {
        const config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(advertisementData)
        };

        const response = await fetch(url, config);
        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            // TODO: mejorar gestión de errores
            throw new Error(data.message || JSON.stringify(data));
        }
    },

    registerUser: async function(user) {
        const url = `${BASE_URL}/auth/register`;
        return await this.advertisement(url, user);
    },

    login: async function(user) {
        const url = `${BASE_URL}/auth/login`;
        return await this.advertisement(url, user);
    },

    saveToken: async function(token) {
        localStorage.setItem(TOKEN_KEY, token);
    },

    getToken: async function() {
        return localStorage.getItem(TOKEN_KEY);
    }


};
