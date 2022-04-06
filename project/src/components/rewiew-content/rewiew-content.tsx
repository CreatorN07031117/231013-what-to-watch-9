import dayjs from 'dayjs';
import {Rewiew} from '../../types/types';

type RewiewProps = {
    rewiew: Rewiew;
}

function RewiewContent ({rewiew}: RewiewProps): JSX.Element {
  const date = dayjs(rewiew.date).format('MMMM DD, YYYY');


  return (
    <div className="review" style={{borderBottomColor: 'rgba(0,0,0,0.3'}}>
      <blockquote className="review__quote">
        <p className="review__text" data-testid="comment">{rewiew.comment}</p>

        <footer className="review__details">
          <cite className="review__author" data-testid="username">{rewiew.user.name}</cite>
          <time className="review__date" dateTime={rewiew.date} data-testid="data">{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating" data-testid="rating">{rewiew.rating}</div>
    </div>
  );
}

export default RewiewContent;
