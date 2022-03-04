import {useState} from 'react';
import FilmCard from '../film-card/film-card';
import {FilmsList} from '../../types/types';

type CatalogProps = {
  filmsList: FilmsList;
}

function Catalog ({filmsList}: CatalogProps): JSX.Element {
  // eslint-disable-next-line
  const[filmId, setFilmId] = useState <string | null> (null);

  return (
    <div className="catalog__films-list">
      {
        filmsList.map((item) => <FilmCard key={item.id} film={item} setFilmId ={() => setFilmId(item.id)} />)
      }
    </div>
  );
}

export default Catalog;
