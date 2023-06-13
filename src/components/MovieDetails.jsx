// import { getTrendyMovies } from './API';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from './API';
import { useEffect, useState } from 'react';
// import { Location } from 'react-router-dom';
const imgPlaceholder =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';

export const MovieDetails = () => {
  const [movies, setMovies] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(data => {
      setMovies(data);
    });
  }, [movieId]);
  if (!movies) {
    return;
  }
  return (
    <>
      <Link to={'/'}> Go back</Link>
      <h1>{movies.title}</h1>
      <img
        src={
          movies.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movies.poster_path}`
            : imgPlaceholder
        }
        alt={movies.title}
      ></img>
      <p>{movies.overview}</p>
      <p>Additional information</p>
      <ul>
        <Link to={'cast'}>Cast</Link>
        <Link to={'reviews'}>Reviews</Link>
      </ul>
      <Outlet />
    </>
  );
};
