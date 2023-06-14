import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TrendyMovieItem } from './TrendyMovieItem';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link state={{ from: location }} to={`/movies/${movie.id}`}>
              {<TrendyMovieItem key={movie.id} movie={movie} />}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
