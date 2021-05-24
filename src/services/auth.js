import axios from 'axios';
import { API_URL } from '../constants/appConfig';

export async function login({ username, password }) {
  const requestUrl = `${API_URL}/users/auth`;

  const encodedCredentials = window.btoa(`${username}:${password}`);

  const headers = {
    Authorization: `Basic ${encodedCredentials}`
  };

  return await axios.post(requestUrl, null, { headers });
}
