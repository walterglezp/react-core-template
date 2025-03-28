export {};

declare global {
  interface Window {
    REACT_API_GATEWAY_URL: string;
    REACT_APP_GOOGLE_MAPS_API_KEY: string;
    REACT_AUTH_CLIENT_ID: string;
    REACT_AUTH_DOMAIN: string;
  }
}
