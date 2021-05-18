import axios from 'axios';
import { APP_CONFIG } from '../constants/appConfig';

const apiUrl = APP_CONFIG.AUTH_URL;

export async function auth(token) {
  const requestUrl = `${apiUrl}/users/auth`;

  const headers = {
    Authorization: `Basic ${token}`
  };
  return await axios.post(requestUrl, null, { headers });
  //mock api call
  // const data = {
  //   status: 200,
  //   data: { token: 'erererreer' }
  // };
  // return data;
}

export async function logout(token) {
  const requestUrl = `${apiUrl}/users/session`;
  const headers = {
    Authorization: `Token ${token}`
  };
  return await axios.delete(requestUrl, { headers });
  //mock api call
  // const data = {
  //   status: 200,
  //   data: { token: 'erererreer' }
  // };
  // return data;
}
