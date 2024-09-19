import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Spotify API credentials
const CLIENT_ID = 'a93ff87617784733bd9d6201d4593a80';
const CLIENT_SECRET = 'a3c43039cb454f47a5ea5f3e8d468a37';
const TOKEN_KEY = 'spotify_access_token';
const REFRESH_TOKEN_KEY = 'spotify_refresh_token'; // Assuming you have a refresh token

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
});

// Function to fetch a new access token from Spotify
const fetchSpotifyAccessToken = async () => {
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  
  // Prepare request data
  const data = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  });

  try {
    const response = await axios.post(tokenUrl, data.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const { access_token, expires_in } = response.data;
    const expiryDate = new Date().getTime() + expires_in * 1000;
    await AsyncStorage.setItem(TOKEN_KEY, access_token);
    await AsyncStorage.setItem('expiryDate', expiryDate.toString());
    return access_token;
  } catch ({error}:any) {
    console.error('Error fetching access token:', error.response?.data || error.message);
    throw error;
  }
};

// Function to refresh the access token
const refreshToken = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
    return await fetchSpotifyAccessToken();
  } catch (error) {
    console.error('Error refreshing access token:', error);
    throw error;
  }
};

// Request interceptor to add the access token to every request
axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const token = await getStoredToken();
      config.headers['Authorization'] = `Bearer ${token}`;
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiration and refreshing
axiosInstance.interceptors.response.use(
  response => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      try {
        const newToken = await refreshToken();
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        const originalRequest = error.config;
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

// Function to get access token from AsyncStorage
const getStoredToken = async () => {
  try {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    const expiryDate = await AsyncStorage.getItem('expiryDate');

    if (token && expiryDate) {
      const expiry = parseInt(expiryDate, 10);
      if (new Date().getTime() < expiry) {
        return token;
      } else {
        return await refreshToken();
      }
    } else {
      return await fetchSpotifyAccessToken();
    }
  } catch (error) {
    console.error('Error retrieving token from AsyncStorage', error);
    throw error;
  }
};

// Function to get Spotify categories
export const getSpotifyCategories = async () => {
  const categoriesUrl = 'browse/categories';

  try {
    const response = await axiosInstance.get(categoriesUrl);
    return response.data; // Adjust according to actual response structure
  } catch (error) {
    console.error('Error fetching categories from Spotify', error);
    throw error;
  }
};

// Function to get Spotify genres
export const getSpotifyGeneres = async () => {
  const genreUrl = 'recommendations/available-genre-seeds';

  try {
    const response = await axiosInstance.get(genreUrl);
    return response.data; // Adjust according to actual response structure
  } catch (error) {
    console.error('Error fetching genres from Spotify', error);
    throw error;
  }
};

//const artistUrl = `artists?ids=${artistIds.join(',')}`;
// Function to fetch details for multiple artists
export const getAlbum = async () => {
  const getAlbum = `browse/new-releases`;

  try {
    const response = await axiosInstance.get(getAlbum);
    return response.data.albums;
  } catch (error) {
    console.error('Error fetching multiple artists from Spotify', error);
    throw error;
  }
};

export const getAlbumSongs = async (albumId: string) => {
  const endpoint = `albums/${albumId}/tracks`; 
  try {
    const response = await axiosInstance.get(endpoint);
 
    const Preview = response.data.items.filter((track: any) => track.preview_url);
    return { ...response.data, items: Preview }; 
  } catch (error) {
    console.error('Error fetching album songs from Spotify', error);
    throw error;
  }
};

export const getSeveralTracks = async () => {
  const trackIds = '7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B'; 
  const trackUrl = `tracks?ids=${trackIds}`;

  try {
    const response = await axiosInstance.get(trackUrl);
    return response.data.tracks; // Return the tracks data
  } catch (error) {
    console.error('Error fetching tracks from Spotify', error);
    throw error;
  }
};


export const getRecommendations = async ()=>{
  const getRecommendUrl = 'recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA'

  try {
    const response = await axiosInstance.get(getRecommendUrl)
    
    return response.data.tracks; 
  }catch(error){
    console.error('Error fetching recommendations',error)
  }
}

export const getTrack = async (songId: string) => {
  const getTrackUrl = `tracks/${songId}`; 

  try {
    const response = await axiosInstance.get(getTrackUrl);
    return response.data; 
  } catch (error) {
    console.error('Error fetching track:', error);
    throw error; 
  }
};




















// export const getPlaylistTracks = async (playlistId: string) => {
//   const tracksUrl = `playlists/${playlistId}/tracks`; // Corrected URL
//   try {
//     const response = await axiosInstance.get(tracksUrl);
//     return response.data; // Make sure the response structure is correct
//   } catch (error) {
//     console.error('Error fetching tracks from Spotify', error);
//     throw error;
//   }
// };



// https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl

// const tracksUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;