import axios from 'axios';

const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export async function getCampers() {
    try {
        const response = await axios.get(BASE_URL);           
        return response.data.items;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

export async function getCampersById(id) {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}