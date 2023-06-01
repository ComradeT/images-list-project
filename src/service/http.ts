import axios from 'axios';
import { appConfig } from '../constants/config';

export const http = axios.create({
  baseURL: appConfig.BASE_API_URL,
  responseType: 'json',
  validateStatus: (status) => status <= 500,
  timeout: 10000,
});
