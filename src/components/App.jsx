import { TrendyMovies } from '../pages/TrendyMovies';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { SearchMovies } from 'pages/SearchMovies';
import { MovieDetails } from '../pages/MovieDetails';
import { Reviews } from '../pages/Reviews';
import { Cast } from '../pages/Cast';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<TrendyMovies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="movies" element={<SearchMovies />} />
        </Route>
      </Routes>
    </div>
  );
};
