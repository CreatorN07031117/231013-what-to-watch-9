import {useCallback} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {AuthorizationStatus} from '../const';
import {useAppSelector} from '../../hooks/';
import {store} from '../../store/index';
import {changeFavoriteStatus} from '../../store/api-actions';


function Buttons (props: {render(): JSX.Element | null}): JSX.Element {
  const navigate = useNavigate();
  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const {promo} = useAppSelector(({FILMS}) => FILMS);
  const {filmActive} = useAppSelector(({FILM}) => FILM);

  const params = useParams();

  const idFilm = params.id === undefined? promo.id : params.id;
  const isFavorite = filmActive.isFavorite? 0 : 1;

  const favoriteStatus = {
    id: idFilm,
    status: isFavorite,
  };

  const handleMyList = useCallback((id) => {
    if(authorizationStatus !== AuthorizationStatus.Auth) {
      return navigate('/login');
    }
    return store.dispatch(changeFavoriteStatus(id));
  }, [authorizationStatus, navigate]);

  const handlePlayer = useCallback((id) =>
    navigate(`/player/${id}`), [navigate]);

  return (
    <div className="film-card__buttons">
      <button
        className="btn btn--play film-card__button"
        type="button"
        onClick={() => handlePlayer(idFilm)}
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button
        className="btn btn--list film-card__button"
        type="button"
        onClick={() => handleMyList(favoriteStatus)}
      >
        {filmActive.isFavorite?
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg> :
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>}
        <span>My list</span>
      </button>
      {props.render()}
    </div>
  );

}

export default Buttons;
