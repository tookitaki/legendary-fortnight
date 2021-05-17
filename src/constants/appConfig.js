export const APP_CONFIG = {
  AUTH_URL:
    (typeof window !== 'undefined' &&
      window.localStorage.getItem('auth-api')) ||
    'http://52.191.8.13:7080/api/v1',
  API_URL:
    (typeof window !== 'undefined' &&
      window.localStorage.getItem('service-api')) ||
    'http://52.191.8.13:7080/api/v1'
};
