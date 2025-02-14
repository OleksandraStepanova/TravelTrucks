import axios from 'axios';

const BASE_URL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

const loader = document.querySelector('.loader');

export async function getCampers() {
  try {
    loader.style.display = 'block';
    const response = await axios.get(BASE_URL);
    loader.style.display = 'none';        
    return response.data.items;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function getCampersById(id) {
  try {
    loader.style.display = 'block';
    const response = await axios.get(`${BASE_URL}/${id}`);
    loader.style.display = 'none';
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
