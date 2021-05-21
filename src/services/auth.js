import axios from 'axios';
import { APP_CONFIG } from '../constants/appConfig';

const apiUrl = APP_CONFIG.AUTH_URL;

export async function login({ username, password }) {
  const requestUrl = `${apiUrl}/users/auth`;

  const encodedCredentials = window.btoa(`${username}:${password}`);

  const headers = {
    Authorization: `Basic ${encodedCredentials}`
  };

  return await axios.post(requestUrl, null, { headers });
}

export async function logout(token) {
  const requestUrl = `${apiUrl}/users/session`;
  const headers = {
    Authorization: `Token ${token}`
  };
  return await axios.delete(requestUrl, { headers });
}
