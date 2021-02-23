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
    }
};
