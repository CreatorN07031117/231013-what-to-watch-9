import FilmCard from '../film-card/film-card';
import {FilmsList} from '../../types/types';
import { useState } from 'react';

type CatalogProps = {
  filmsList: FilmsList;
  onFilm: (id: number) => void;
}


function Catalog ({filmsList, onFilm}: CatalogProps): JSX.Element {
  const[activeFilmCard, setActiveFilmCard] = useState(0);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <a href="# " className="catalog__genres-link">All genres</a>
        </li>
        <li className="catalog__genres-item">
          <a href="# " className="catalog__genres-link">Comedies</a>
        </li>
        <li className="catalog__genres-item">
          <a href="# " className="catalog__genres-link">Crime</a>
        </li>
        <li className="catalog__genres-item">
          <a href="# " className="catalog__genres-link">Documentary</a>
        </li>
        <li className="catalog__genres-item">
          <a href="# " className="catalog__genres-link">Dramas</a>
        </li>
        <li className="catalog__genres-item">
          <a href="# " className="catalog__genres-link">Horror</a>
        </li>
        <li className="catalog__genres-item">
          <a href="# " className="catalog__genres-link">Kids & Family</a>
        </li>
        <li className="catalog__genres-item">
          <a href="# " className="catalog__genres-link">Romance</a>
        </li>
        <li className="catalog__genres-item">
          <a href="# " className="catalog__genres-link">Sci-Fi</a>
        </li>
        <li className="catalog__genres-item">
          <a href="# " className="catalog__genres-link">Thrillers</a>
        </li>
      </ul>

      <div className="catalog__films-list">
        {
          filmsList.map((item) => <FilmCard key={item.id} film={item} onFilm={onFilm} onActiveFilm={(id) => setActiveFilmCard(id)} />)
        }
      </div>

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default Catalog;
