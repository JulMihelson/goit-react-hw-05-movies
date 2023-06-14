import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../components/API';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    getReviews(movieId).then(data => {
      setReviews(data.results);
    });
  }, [movieId]);
  if (!reviews) {
    return;
  }

  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map(review => {
          return <p key={review.id}>{review.content}</p>;
        })
      ) : (
        <p>no reviews found</p>
      )}
    </div>
  );
};
