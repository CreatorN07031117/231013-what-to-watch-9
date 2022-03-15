import {selectGenre, getFilmList} from '../../store/action';
import {useAppDispatch, useAppSelector} from '../../hooks/';
import {ALL_FILMS} from '../const';


function GenreList (): JSX.Element {
  const dispatch = useAppDispatch();

  const genre = useAppSelector((state) => state.genre);
  const filmsList = useAppSelector((state) => state.films);

  const genresList: string[] = [ALL_FILMS];
  filmsList.map((item) => {
    if (!genresList.includes(item.genre)) {genresList.push(item.genre);}
  });

  return (
    <ul className="catalog__genres-list">
      {genresList.map((item) => (
        <li className={`catalog__genres-item ${item === genre  && 'catalog__genres-item--active'}`}
          key={item}
          onClick={() => {
            dispatch(selectGenre(item));
            dispatch(getFilmList());}}
        >
          <a href="# " className="catalog__genres-link">{item}</a>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
