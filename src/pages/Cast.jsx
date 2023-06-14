import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from '../components/API';
const imgPlaceholder =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';
export const Cast = () => {
  const [casts, setCasts] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    getCredits(movieId).then(data => {
      console.log(data.cast);
      setCasts(data.cast);
    });
  }, [movieId]);
  if (!casts) {
    return;
  }

  return (
    <ul>
      {casts.length > 0 ? (
        casts.map(cast => {
          return (
            <li key={cast.id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : imgPlaceholder
                }
                alt={cast.name}
              ></img>
              {cast.original_name}
              <p>Character: {cast.character}</p>
            </li>
          );
        })
      ) : (
        <p>no reviews found</p>
      )}
    </ul>
  );
};
