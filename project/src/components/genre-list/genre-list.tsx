import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {ALL_FILMS, MAX_GENRES} from '../const';
import {selectGenre, getFilmsList} from '../../store/films-process/films-process';


function GenreList (): JSX.Element {
  const dispatch = useAppDispatch();

  const {genre, films} = useAppSelector(({FILMS}) => FILMS);

  const genresSet = new Set<string>([ALL_FILMS]);
  films.forEach((item) => genresSet.add(item.genre));
  const genresList: string[] = [...genresSet].slice(0, MAX_GENRES);

  const handleClick = (item: string) => {
    dispatch(selectGenre(item));
    dispatch(getFilmsList());
  };

  return (
    <ul className="catalog__genres-list">
      {genresList.map((item) => (
        <li className={`catalog__genres-item ${item === genre  && 'catalog__genres-item--active'}`}
          key={item}
          onClick={(evt) => {
            evt.preventDefault();
            handleClick(item);
          }}
        >
          <span className="catalog__genres-link">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
