import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.0.2.2:3000',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});
