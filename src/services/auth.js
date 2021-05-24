import axios from 'axios';
import { API_URL } from '../constants/appConfig';

export async function login({ username, password }) {
  const requestUrl = `${API_URL}/users/auth`;
}

export async function auth(token) {
  const data = {
    status: 200,
    data: { token: 'erererreer', userId: 1, name: 'tdss_user' }
  };
  return data;
}

export async function logout(token) {
  const data = {
    status: 200,
    data: null
  };
  return data;
}
