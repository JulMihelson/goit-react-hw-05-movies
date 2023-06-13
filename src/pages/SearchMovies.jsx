import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchedMovies } from 'components/API';
import { Link } from 'react-router-dom';
import { TrendyMovieItem } from 'components/TrendyMovieItem';

export const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query');

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query });
  };

  useEffect(() => {
    if (!search) {
      return;
    }
    getSearchedMovies(search)
      .then(request => {
        setFoundMovies(request);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [search]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type={'text'}
          value={query}
          onChange={event => {
            setQuery(event.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      {foundMovies.length > 0 ? (
        <ul>
          {foundMovies.map(movie => (
            <Link state={'100'} to={`/movies/${movie.id}`}>
              {<TrendyMovieItem key={movie.id} movie={movie} />}
            </Link>
          ))}
        </ul>
      ) : (
        <p>No movies found for the query: {search}</p>
      )}
    </>
  );
};
