import {Reviews} from '../../types/types';
import ReviewContent from '../review-content/review-content';

type FilmReviewsProps = {
    reviews: Reviews;
}

function FilmReviews ({reviews}: FilmReviewsProps): JSX.Element {
  const rewiewsPart = (reviews.length/2);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(rewiewsPart).map((item) => <ReviewContent review={item} key={item.id} />)}
      </div>

      <div className="film-card__reviews-col">
        {reviews.slice(0, rewiewsPart).map((item) => <ReviewContent review={item} key={item.id}/>)}
      </div>
    </div>
  );
}

export default FilmReviews;
