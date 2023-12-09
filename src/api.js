import axios from 'axios';

axios.defaults.baseURL = 'https://650995c3f6553137159bb321.mockapi.io/';

export const fetchAdverts = async () => {
  const response = await axios.get('/Adverts');
  return response.data;
};
