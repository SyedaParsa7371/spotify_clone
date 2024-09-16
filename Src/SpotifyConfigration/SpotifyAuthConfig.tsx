// SpotifyAuthConfig.js
const SpotifyAuthConfig = {
    clientId: 'a93ff87617784733bd9d6201d4593a80',
    clientSecret: 'a3c43039cb454f47a5ea5f3e8d468a37', // Not required for PKCE but necessary for server-side auth
    redirectUrl: 'yourapp://auth', // Replace with your Redirect URI
    scopes: [
      'user-read-private',
      'user-read-email',
      'user-library-read',
      'playlist-read-private',
      'user-read-playback-state',
      'user-modify-playback-state',
      'user-top-read',
      'user-read-recently-played',
    ],
    serviceConfiguration: {
      authorizationEndpoint: 'https://accounts.spotify.com/authorize',
      tokenEndpoint: 'https://accounts.spotify.com/api/token',
    },
  };
  
  export default SpotifyAuthConfig;
  