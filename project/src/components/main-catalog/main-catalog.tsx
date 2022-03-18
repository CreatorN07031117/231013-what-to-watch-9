import {useState} from 'react';
import Catalog from '../catalog/catalog';
import GenreList from '../genre-list/genre-list';
import ShowMoreBtn from '../show-more/show-more';
import {ALL_FILMS, FILMS_PER_LOAD} from '../const';
import {useAppSelector} from '../../hooks/';


function MainCatalog (): JSX.Element {
  const [count, setCount] = useState (FILMS_PER_LOAD);

  const genre = useAppSelector((state) => state.genre);
  let filmsList = useAppSelector((state) => state.films);

  if (genre !== ALL_FILMS) {
    filmsList = filmsList.slice().filter((item) => item.genre === genre);
  }

  const listLenght = filmsList.length;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenreList />
      <Catalog filmsList={filmsList.slice(0, count)}/>
      {count < listLenght? <ShowMoreBtn setCount={() => setCount(count + FILMS_PER_LOAD)} /> : (null)}
    </section>
  );
}

export default MainCatalog;
