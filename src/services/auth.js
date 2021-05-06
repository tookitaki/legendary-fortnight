import axios from 'axios'
import { APP_CONFIG } from '../utils/appConfig';

const apiUrl = APP_CONFIG.AUTH_URL;

export async function auth(token) {
  const requestUrl = `${apiUrl}/users/auth`;

  const headers = {
    'Authorization': `Basic ${token}`,
  };

  //add api calls
  return await axios.post(requestUrl, null, { headers });
}

