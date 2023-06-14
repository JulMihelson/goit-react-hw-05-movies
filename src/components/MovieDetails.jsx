// import { getTrendyMovies } from './API';

import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from './API';
import { useEffect, useState } from 'react';

const imgPlaceholder =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';

export const MovieDetails = () => {
  const [movies, setMovies] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(data => {
      setMovies(data);
    });
  }, [movieId]);
  if (!movies) {
    return;
  }
  const goBack = () => {
    if (location.state && location.state.from) {
      window.location = location.state.from;
    } else {
      window.history.back();
    }
  };
  return (
    <div>
      <button onClick={goBack}>Go back</button>
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
    </div>
  );
};
