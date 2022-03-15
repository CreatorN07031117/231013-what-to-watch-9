import {useState} from 'react';
import FilmCard from '../film-card/film-card';
import {useAppSelector} from '../../hooks/';
import {ALL_FILMS} from '../const';


function Catalog (): JSX.Element {
  const genre = useAppSelector((state) => state.genre);
  let filmsList = useAppSelector((state) => state.films);

  if (genre !== ALL_FILMS) {
    filmsList = filmsList.slice().filter((item) => item.genre === genre);
  }

  const [filmId, setFilmId] = useState <string | null> (null);

  const setActiveFilm = (id: null | string) => {
    if (id === filmId) {
      return true;
    }
    return false;
  };

  return (
    <div className="catalog__films-list">
      {
        filmsList.map((item) => <FilmCard key={item.id} film={item} setFilmId = {(id) => setFilmId(id)} isActive = {setActiveFilm(item.id)} />)
      }
    </div>
  );
}

export default Catalog;
