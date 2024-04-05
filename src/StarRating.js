import star from './assets/images/8fab66317d6c35dc211a165dbc3735e15466ae68';
import emptyStarImagePath from './assets/images/emptystar.png';


const StarRating = ({ rating, starrating }) => {
  const fullStar = <img src={star} alt="star" style={{ width: '20px', height: '20px' }} />;
  const emptyStar = <img src={emptyStarImagePath} alt="empty star" style={{ width: '20px', height: '20px' }} />;

  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(fullStar);
  }
  for (let i = rating; i < 5; i++) {
    stars.push(emptyStar);
  }

  return <div className={starrating}>{stars}</div>;
};

export default StarRating