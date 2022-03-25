import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://mock-api.driven.com.br/api/v5/cineflex'
});

export const getMovie = async () => {
  return api.get("/movies");
}

export const getSession = async (movieId) => {
  return api.get(`/movies/${movieId}/showtimes`)
}

export const getSeats = async (sessionId) => {
  return api.get(`/showtimes/${sessionId}/seats`)
}

export const makeReservation = async (dataPackage) => {
  return api.post("/seats/book-many", dataPackage);
}