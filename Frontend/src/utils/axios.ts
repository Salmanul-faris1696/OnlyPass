import axios from 'axios';

export const BASE_URL = 'http://192.168.1.16:5000/api';

export const ApiClientPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {}
});
