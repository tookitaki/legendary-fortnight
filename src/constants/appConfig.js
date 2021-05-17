export const APP_CONFIG = {
  AUTH_URL:
    (typeof window !== 'undefined' &&
      window.localStorage.getItem('auth-api')) ||
    process.env.REACT_APP_AUTH_URL,
  API_URL:
    (typeof window !== 'undefined' &&
      window.localStorage.getItem('service-api')) ||
    process.env.REACT_APP_API_URL
};
