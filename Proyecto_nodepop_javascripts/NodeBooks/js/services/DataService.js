const BASE_URL = "http://127.0.0.1:8000";
const TOKEN_KEY = 'token';

export default {

    getAdvertisements: async function() {
        const url = `${BASE_URL}/api/advertisements?_expand=user&_sort=id&_order=desc`;
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data.map(advertisement => {
                const user = advertisement.user || {};
                return {
                    name: advertisement.name.replace(/(<([^>]+)>)/gi, ""),
                    author: advertisement.author.replace(/(<([^>]+)>)/gi, ""),
                    price: advertisement.price,
                    sale: advertisement.sale,
                    image: advertisement.image || null,
                    adsAuthor: user.username || 'Desconocido',
                    id: advertisement.id
                }
            }); 
        } else {
            throw new Error(`HTTP Error: ${response.status}`)
        }
    },



    advertisement: async function(url, advertisementData, json=true) {
        const config = {
            method: 'POST',
            headers: {},
            body: null
        };
        if (json) {
            config.headers['Content-Type'] = 'application/json';
            config.body = JSON.stringify(advertisementData);
        } else {
            config.body = advertisementData;
        }
        const token = await this.getToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(url, config);
        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            // TODO: mejorar gestión de errores
            // TODO: si la respuesta es un 401 no autorizado, debemos borrar el token (si es que lo tenemos);
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
    },

    isUserLogged: async function() {
        const token = await this.getToken();
        return token !== null;
    },

    saveAds: async function(ads) {
        const url = `${BASE_URL}/api/advertisements`;
        if (ads.image) {
            const imageURL = await this.uploadImage(ads.image);
            ads.image = imageURL;
        }
        return await this.advertisement(url, ads);
    },

    uploadImage: async function(image) {
        const form = new FormData();
        form.append('file', image);

        const url = `${BASE_URL}/upload`;
        const response = await this.advertisement(url, form, false);
        return response.path || null;
    },




};
