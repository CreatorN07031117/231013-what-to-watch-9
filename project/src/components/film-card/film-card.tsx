import {Link} from 'react-router-dom';
import {Film} from '../../types/types';

type FilmCardProps = {
  film: Film;
  setFilmId : (id: string | null) => void;
}

function FilmCard({film, setFilmId}: FilmCardProps): JSX.Element {

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => setFilmId(film.id)}
      onMouseLeave={() => setFilmId(null)}
    >
      <div className="small-film-card__image">
        <img src={film.posterImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${film.id}`} title="" className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
