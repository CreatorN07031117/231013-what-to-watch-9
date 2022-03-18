import {useState} from 'react';
import FilmCard from '../film-card/film-card';
import {FilmsList} from '../../types/types';


type CatalogProps = {
  filmsList: FilmsList;
}

function Catalog ({filmsList}: CatalogProps): JSX.Element {

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
