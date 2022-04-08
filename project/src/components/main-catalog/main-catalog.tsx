import Catalog from '../catalog/catalog';
import GenreList from '../genre-list/genre-list';
import ShowMoreBtn from '../show-more-btn/show-more-btn';
import {ALL_FILMS} from '../const';
import {useAppSelector} from '../../hooks/';


function MainCatalog (): JSX.Element {

  const {genre, count, films} = useAppSelector(({FILMS}) => FILMS);
  let filmsList = films;

  if (genre !== ALL_FILMS) {
    filmsList  = films.slice().filter((item) => item.genre === genre);
  }

  const listLength = filmsList.length;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenreList />
      <Catalog filmsList={filmsList.slice(0, count)} />
      {count < listLength && <ShowMoreBtn />}
    </section>
  );
}

export default MainCatalog;
