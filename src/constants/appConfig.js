export const APP_CONFIG = {
  // API_URL : 'http://52.7.32.121:7080/api/rs/v1'
  AUTH_URL:
    (typeof window !== 'undefined' &&
      // eslint-disable-next-line
      window.localStorage.getItem('auth-api')) ||
    process.env.REACT_APP_AUTH_URL,
  API_URL:
    (typeof window !== 'undefined' &&
      window.localStorage.getItem('service-api')) ||
    process.env.REACT_APP_API_URL
};
