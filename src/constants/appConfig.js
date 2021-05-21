export const API_URL =
  (typeof window !== 'undefined' &&
    window.localStorage.getItem('service-api')) ||
  process.env.REACT_APP_API_URL;
