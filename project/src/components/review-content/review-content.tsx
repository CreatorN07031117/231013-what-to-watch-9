import dayjs from 'dayjs';
import {Review} from '../../types/types';

type ReviewProps = {
    review: Review;
}

function ReviewContent ({review}: ReviewProps): JSX.Element {
  const date = dayjs(review.date).format('MMMM DD, YYYY');


  return (
    <div className="review" style={{borderBottomColor: 'rgba(0,0,0,0.3'}}>
      <blockquote className="review__quote">
        <p className="review__text" data-testid="comment">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author" data-testid="username">{review.user.name}</cite>
          <time className="review__date" dateTime={review.date} data-testid="data">{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating" data-testid="rating">{review.rating}</div>
    </div>
  );
}

export default ReviewContent;
