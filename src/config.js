const API_BASE_URL_ENV = import.meta.env.VITE_API_BASE_URL;

// Strict check for production
if (import.meta.env.PROD && !API_BASE_URL_ENV) {
  throw new Error("VITE_API_BASE_URL is not set in production environment");
}

export const API_BASE_URL = API_BASE_URL_ENV || 'http://localhost:5000';

const WS_HOST_ENV = import.meta.env.VITE_WS_HOST || 'localhost:5000';
const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';

// Secure WebSocket URL construction
export const WS_HOST = WS_HOST_ENV;
export const WS_URL = `${protocol}//${WS_HOST}`;
