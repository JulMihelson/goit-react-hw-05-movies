// import { getTrendyMovies } from './API';

import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../components/API';
import { useEffect, useRef, useState } from 'react';

const imgPlaceholder =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';

export const MovieDetails = () => {
  const [movies, setMovies] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const goBack = useRef(location?.state?.from || '/');

  useEffect(() => {
    getMovieDetails(movieId).then(data => {
      setMovies(data);
    });
  }, [movieId]);
  if (!movies) {
    return;
  }

  return (
    <div>
      <Link to={goBack.current}>Go back</Link>
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
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </ul>
      <Outlet />
    </div>
  );
};
