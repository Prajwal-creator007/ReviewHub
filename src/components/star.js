import React from 'react';
import './star.css';

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const isFilled = i <= rating;
    const starColor = isFilled ? '#ffd700' : '#ccc';
    stars.push(
      <span key={i} style={{ color: starColor }}>★</span>
    );
  }

  return <div>{stars}</div>;
};

export default StarRating;