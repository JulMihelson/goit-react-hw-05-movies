// const { getTrendyMovies } = require("./API");
import { useEffect, useState } from 'react';
import { getTrendyMovies } from '../components/API';
import { TrendyMovieItem } from '../components/TrendyMovieItem';
import { Link } from 'react-router-dom';

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
      <ul>
        {movies.map(movie => {
          return (
            <Link state={'100'} to={`/movies/${movie.id}`}>
              {<TrendyMovieItem key={movie.id} movie={movie} />}
            </Link>
          );
        })}
      </ul>
    </>
  );
};
