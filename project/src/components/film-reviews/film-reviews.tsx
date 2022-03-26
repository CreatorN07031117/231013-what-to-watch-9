import {Rewiews} from '../../types/types';
import RewiewContent from '../rewiew/rewiew';

type FilmRewiewsProps = {
    rewiews: Rewiews;
}

function FilmRewiews ({rewiews}: FilmRewiewsProps): JSX.Element {
  const rewiewsPart = (rewiews.length/2);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {rewiews.slice(rewiewsPart).map((item) => <RewiewContent rewiew={item} key={item.id} />)}
      </div>

      <div className="film-card__reviews-col">
        {rewiews.slice(0, rewiewsPart).map((item) => <RewiewContent rewiew={item} key={item.id}/>)}
      </div>
    </div>
  );
}

export default FilmRewiews;
