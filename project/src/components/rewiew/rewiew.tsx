import {Rewiew} from '../../types/types';

type RewiewProps = {
    rewiew: Rewiew;
}

function RewiewContent ({rewiew}: RewiewProps): JSX.Element {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{rewiew.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{rewiew.user.name}</cite>
          <time className="review__date" dateTime={rewiew.date}>{rewiew.date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rewiew.rating}</div>
    </div>
  );
}

export default RewiewContent;
