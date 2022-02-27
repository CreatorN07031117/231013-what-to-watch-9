import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import FilmCard from '../film-card/film-card';
import Header from '../header/header';
import Footer from '../footer/footer';
import FilmOverview from '../film-overview/film-overview';
import FilmDetail from '../film-detail/film-detail';
import {Film, FilmsList} from '../../types/types';


type FilmProps = {
  film: Film;
  filmsList: FilmsList;
  onFilm: (id: number) => void;
}

function FilmPage({film, filmsList, onFilm}: FilmProps): JSX.Element {
  const [screenView, setScreenView] = useState('Overview');

  const screenSwitch = (view: string) => {
    if(view === 'Details') {
      return <FilmDetail film={film} />;
    } else { return <FilmOverview film={film} />;}
  };

  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={`/films/${film.id}/review`} title="review"  className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active"
                    onClick={(evt) => {
                      evt.preventDefault();
                      setScreenView('Overview');}}
                  >
                    <a href="/" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item"
                    onClick={(evt) => {
                      evt.preventDefault();
                      setScreenView('Details');}}
                  >
                    <a href="/" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item"
                    onClick={(evt) => {
                      evt.preventDefault();
                      setScreenView('Reviews');}}
                  >
                    <a href="/" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>
              {screenSwitch(screenView)}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {
              filmsList.slice().filter((item) => item.genre===film.genre).map((item) => <FilmCard key={item.id} film={item} onFilm={onFilm}/>)
            }
          </div>
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );}

export default FilmPage;
