export const PROJECT_NAME = 'NPMRDS';
export const PROJECT_THEME = 'TEST_THEME';

let API_HOST = 'https://graph.availabs.org';
let AUTH_HOST = 'https://availauth.availabs.org';
let CLIENT_HOST = 'https://npmrds.availabs.org';

if (process.env.NODE_ENV === 'development') {
  API_HOST = 'http://localhost:4444';
  AUTH_HOST = 'https://availauth.availabs.org';
  CLIENT_HOST = 'http://localhost:3000';
}
export { API_HOST, AUTH_HOST, CLIENT_HOST };
