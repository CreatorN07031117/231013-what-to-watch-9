import React from 'react';
import {countLevel} from '../const';
import {Film} from '../../types/types';

type FilmOverviewProps = {
  film: Film;
}

function FilmOverview ({film}: FilmOverviewProps): JSX.Element {
  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{countLevel(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>
        <p className="film-card__director"><strong>Director: {film.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {film.starring} and other</strong></p>
      </div>
    </React.Fragment>
  );
}

export default FilmOverview;
