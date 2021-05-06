export const APP_CONFIG = {
    // API_URL : 'http://52.7.32.121:7080/api/rs/v1'
    AUTH_URL: typeof window !== 'undefined' &&
    // eslint-disable-next-line
        window.localStorage.getItem('auth-api') || 'http://3.226.6.231:8080/trm',
    API_URL: typeof window !== 'undefined' &&
        window.localStorage.getItem('service-api') || 'http://3.226.6.231:8080',
  };
  