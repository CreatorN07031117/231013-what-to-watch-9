import {useState} from 'react';
import Catalog from '../catalog/catalog';
import GenreList from '../genre-list/genre-list';
import ShowMoreBtn from '../show-more-btn/show-more-btn';
import {ALL_FILMS, FILMS_PER_LOAD} from '../const';
import {useAppSelector} from '../../hooks/hooks';


function MainCatalog (): JSX.Element {

  const {genre, films} = useAppSelector(({FILMS}) => FILMS);
  const [counterFilms, setCounterFilms] = useState(FILMS_PER_LOAD);

  let filmsList = films;

  if (genre !== ALL_FILMS) {
    filmsList  = films.slice().filter((item) => item.genre === genre);
  }

  const listLength = filmsList.length;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenreList />
      <Catalog filmsList={filmsList.slice(0, counterFilms)} />
      {counterFilms < listLength && <ShowMoreBtn onClick={() => setCounterFilms(counterFilms + FILMS_PER_LOAD)} />}
    </section>
  );
}

export default MainCatalog;
