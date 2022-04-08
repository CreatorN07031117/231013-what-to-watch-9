import {showMoreFilms} from '../../store/films-process/films-process';
import {useAppDispatch} from '../../hooks/';


function ShowMoreBtn (): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() =>
          dispatch(showMoreFilms())}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMoreBtn;