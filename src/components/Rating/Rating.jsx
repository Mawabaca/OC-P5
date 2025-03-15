import './Rating.scss';

function Rating({ rating }) {
  const totalStars = 5;
  const starsArray = [];

  for (let i = 1; i <= totalStars; i++) {
    const starClass = i <= rating ? 'star red-star' : 'star grey-star';
    starsArray.push(
      <span key={i} className={starClass}>
        ★
      </span>
    );
  }

  return <div className="rating-container">{starsArray}</div>;
}

export default Rating;
