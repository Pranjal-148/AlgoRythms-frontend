const API_BASE_URL_ENV = import.meta.env.VITE_API_BASE_URL;

// Strict check for production
if (import.meta.env.PROD && !API_BASE_URL_ENV) {
  throw new Error("VITE_API_BASE_URL is not set in production environment");
}

export const API_BASE_URL = API_BASE_URL_ENV || 'http://localhost:5000';

// Party Room service (Koyeb — separate always-on host for WebSocket)
const PARTY_API_URL_ENV = import.meta.env.VITE_PARTY_URL;
export const PARTY_API_URL = PARTY_API_URL_ENV || 'http://localhost:8002';

// WebSocket URL for Party Room — connects to Koyeb
const partyHost = PARTY_API_URL_ENV
  ? new URL(PARTY_API_URL_ENV).host
  : 'localhost:8002';
const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
export const PARTY_WS_URL = `${protocol}//${partyHost}`;

// Legacy exports — kept for any remaining references
const WS_HOST_ENV = import.meta.env.VITE_WS_HOST || partyHost;
export const WS_HOST = WS_HOST_ENV;
export const WS_URL = `${protocol}//${WS_HOST}`;
