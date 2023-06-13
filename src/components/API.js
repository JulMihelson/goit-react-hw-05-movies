import axios from 'axios';

const API_KEY = '8aba4e3419a44727b7eb66f35fce4fa2';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrendyMovies = async () => {
  try {
    const response = await axios.get(`/trending/movie/day`);
    console.log(response.data);
    return response.data.results;
  } catch (error) {
    console.error('Nothig was found');
    throw error;
  }
};

export const getSearchedMovies = async search => {
  const { data } = await axios.get(
    `${axios.defaults.baseURL}/search/movie?query=${search}&include_adult=false&language=en-US&page=1`
  );
  return data.results;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(`${axios.defaults.baseURL}/movie/${id}`);
  return data;
};
export const getCredits = async id => {
  const { data } = await axios.get(
    `${axios.defaults.baseURL}/movie/${id}/credits?language=en-US`
  );
  return data;
};
export const getReviews = async id => {
  const { data } = await axios.get(
    `${axios.defaults.baseURL}/movie/${id}/reviews?language=en-US&page=1`
  );
  return data;
};
