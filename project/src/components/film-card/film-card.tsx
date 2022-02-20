import {Link} from 'react-router-dom';

type FilmCardProps = {
  id: number;
  filmTitle: string;
  posterImage: string
}

function FilmCard({id, filmTitle, posterImage}: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={posterImage} alt={filmTitle} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} title="" className="small-film-card__link">{filmTitle}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
