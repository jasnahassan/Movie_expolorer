// api.js
import axios from 'axios';

const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzk4YjAxZWU4NzljMTg4MTMyYWIwMDU2OGQxNDkxMyIsInN1YiI6IjY1YWNiNDFlNTQ0YzQxMDBlZGMyNGQ3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sGuwq4NydmMusXR8I7_TSrrAGM18gVXKqsTNg0cpxMY';
const DOMAIN = 'api.themoviedb.org';
const BASE_URL = `https://${DOMAIN}/3`;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: API_KEY,
    accept:'application/json'
  },
});

export const getPopularMovies = () => api.get('/movie/popular');
export const getMovieDetails = (id) => api.get(`/movie/${id}?language=en-US`);
// export const getMovies = (page) => api.get(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`);
export const getMovies = (page) => api.get(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`);
