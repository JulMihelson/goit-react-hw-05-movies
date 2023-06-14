// const { getTrendyMovies } = require("./API");
import { useEffect, useState } from 'react';
import { getTrendyMovies } from '../components/API';

import { MovieList } from 'components/MovieList';

export const TrendyMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendyMovies()
      .then(data => {
        setMovies(data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </>
  );
};
