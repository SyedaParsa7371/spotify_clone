import axios from 'axios';
import {store} from '../Store/redux/store';
import {logedIn, logedOut} from '../Store/redux/Stores';

// Spotify API credentials
const CLIENT_ID = 'a93ff87617784733bd9d6201d4593a80';
const CLIENT_SECRET = 'a3c43039cb454f47a5ea5f3e8d468a37';
const TOKEN_KEY = 'spotify_access_token';

const axiosInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
});

axiosInstance.interceptors.request.use(
  config => {
    const token = store.getState().Authentication.access_token;
    //console.log('Access Token in interceptors', token);
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response && error.response.status === 401) {
      store.dispatch(logedOut());
    }
    return Promise.reject(error);
  },
);

export const fetchSpotifyAccessToken = async () => {
  const tokenUrl = 'https://accounts.spotify.com/api/token';

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

    const {access_token} = response.data;
    return access_token;
  } catch (error: any) {
    console.error(
      'Error fetching access token:',
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const getSpotifyCategories = async () => {
  const categoriesUrl = 'browse/categories';

  try {
    const response = await axiosInstance.get(categoriesUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories from Spotify', error);
    throw error;
  }
};

export const getSpotifyGenres = async () => {
  const genreUrl = 'recommendations/available-genre-seeds';

  try {
    const response = await axiosInstance.get(genreUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching genres from Spotify', error);
    throw error;
  }
};

export const getAlbum = async () => {
  const getAlbumUrl = 'browse/new-releases';

  try {
    const response = await axiosInstance.get(getAlbumUrl);
    return response.data.albums;
  } catch (error) {
    console.error('Error fetching albums from Spotify', error);
    throw error;
  }
};

export const getAlbumSongs = async (albumId: string) => {
  const endpoint = `albums/${albumId}/tracks`;
  try {
    const response = await axiosInstance.get(endpoint);
    const Preview = response.data.items.filter(
      (track: any) => track.preview_url,
    );
    return {...response.data, items: Preview};
  } catch (error) {
    console.error('Error fetching album songs from Spotify', error);
    throw error;
  }
};

export const getSeveralTracks = async () => {
  const trackIds =
    '7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B';
  const trackUrl = `tracks?ids=${trackIds}`;

  try {
    const response = await axiosInstance.get(trackUrl);
    return response.data.tracks;
  } catch (error) {
    console.error('Error fetching tracks from Spotify', error);
    throw error;
  }
};

export const getRecommendations = async () => {
  const getRecommendUrl =
    'recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA';

  try {
    const response = await axiosInstance.get(getRecommendUrl);
    return response.data.tracks;
  } catch (error) {
    console.error('Error fetching recommendations', error);
    throw error;
  }
};

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
