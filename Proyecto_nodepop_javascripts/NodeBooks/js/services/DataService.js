const BASE_URL = "http://127.0.0.1:8000";

export default {

    getAdvertisements: async () => {
        const url = `${BASE_URL}/api/advertisements?`;
        const response = await fetch(url);
        if (response.ok) {
            const data = response.json();
            return data; // <--- esto realmente es un resolve(data)
        } else {
            throw new Error(`HTTP Error: ${response.status}`)
        }
    },

    registerUser: async (user) => {
        const config = {
            method: 'POST',
            headers: { 
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        };
        const url = `${BASE_URL}/auth/register`;
        const response = await fetch(url, config);
        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            // TODO: mejorar gestión de errores
            throw new Error(data.message || JSON.stringify(data));
        }
    }
};
