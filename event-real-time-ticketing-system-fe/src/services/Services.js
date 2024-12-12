import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 1000,
});

export const getTickets = async () => {
  const response = await apiClient.get('/tickets');
  return response.data;
};
