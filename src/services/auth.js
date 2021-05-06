import axios from 'axios'
import { APP_CONFIG } from '../utils/appConfig';

const apiUrl = APP_CONFIG.AUTH_URL;

export async function auth (token){
  const requestUrl = `${apiUrl}/users/login`;

  const headers = {
    'Access-Control-Allow-Origin': '*',
  };

  const body = { credentials: token };
  //add api calls
//   return await axios.post(requestUrl, body, { headers, });
const mockedResonse = {
    data: { token : "exdfktyasasassasa"},
    status : 200,
}
return mockedResonse;
}

