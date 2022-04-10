import {useState} from 'react';
import FilmCard from '../film-card/film-card';
import {FilmsList} from '../../types/types';


type CatalogProps = {
  filmsList: FilmsList;
}

function Catalog ({filmsList}: CatalogProps): JSX.Element {

  const [filmId, setFilmId] = useState <null | string> (null);

  const checkIsActive = (id: string | null ): boolean => id === filmId;

  return (
    <div className="catalog__films-list">
      {
        filmsList.map((item) => <FilmCard key={item.id} film={item} onFilmId = {(id) => setFilmId(id)} isActive = {checkIsActive(item.id.toString())} />)
      }
    </div>
  );
}

export default Catalog;
