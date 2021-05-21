import axios from 'axios';
import { APP_CONFIG } from '../constants/appConfig';

const apiUrl = APP_CONFIG.AUTH_URL;

export async function login({ username, password }) {
  const requestUrl = `${apiUrl}/users/login`;

  const headers = {
    'Access-Control-Allow-Origin': '*'
  };

  const convertedCredentials = window.btoa(`${username}:${password}`);

  return await axios.post(
    requestUrl,
    { credentials: convertedCredentials },
    { headers }
  );
}

export async function logout(token) {
  const requestUrl = `${apiUrl}/users/session`;
  const headers = {
    Authorization: `Token ${token}`
  };
  return await axios.delete(requestUrl, { headers });
}
