import {Link} from 'react-router-dom';
import {Film} from '../../types/types';

type FilmCardProps = {
  film: Film;
  onFilm: (id: number) => void;
  onActiveFilm: (id: number) => void;
}

function FilmCard({film, onFilm, onActiveFilm}: FilmCardProps): JSX.Element {
  const id = film.id;

  return (
    <article className="small-film-card catalog__films-card"
      onClick={(evt) => {
        evt.preventDefault();
        onFilm(id);}}
      onPointerOver={() => {onActiveFilm(id);}}
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
