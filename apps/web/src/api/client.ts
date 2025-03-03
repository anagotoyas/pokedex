import axios, { AxiosInstance } from 'axios';

const baseURL: string = (import.meta.env.VITE_BASE_URL as string) || '';

const client: AxiosInstance = axios.create({
  baseURL: baseURL,
});

export default client;
