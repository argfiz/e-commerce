import axios from 'axios'

 const api = axios.create({
    
    baseURL: 'https://fakestoreapi.com/products/',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
});
  

export const getAllProducts = async () => {
    try {
    const { data } = await api('');
    return data
    } catch (error) {
      console.error('Error fetching data:', error)
      throw error;
    }
  }
  

