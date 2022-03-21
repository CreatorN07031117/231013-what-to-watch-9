import {Link} from 'react-router-dom';
import {Film} from '../../types/types';
import Video from '../video/video';

type FilmCardProps = {
  film: Film;
  isActive: boolean;
  setFilmId : (id: string | null) => void;
}

function FilmCard({film, isActive, setFilmId}: FilmCardProps): JSX.Element {

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => {
        setFilmId(film.id.toString());
      }}
      onMouseLeave={() => {
        setFilmId(null);
      }}
    >
      <div className="small-film-card__image">
        <Video src={film.previewVideoLink} previewImage={film.previewImage} isActive={isActive} isMuted isLoop />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${film.id}`} title="" className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
