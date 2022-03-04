import React from 'react';
import {useState, useCallback} from 'react';
import {Link, useParams} from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import Catalog from '../catalog/catalog';
import FilmOverview from '../film-overview/film-overview';
import FilmDetail from '../film-detail/film-detail';
import FilmRewiews from '../film-reviews/film-reviews';
import {ScreenType} from '../const';
import {Film, FilmsList, Rewiews} from '../../types/types';


type FilmProps = {
  filmsList: FilmsList;
  rewiews: Rewiews;
}

function FilmPage({filmsList, rewiews}: FilmProps): JSX.Element {
  const [screenView, setScreenView] = useState(ScreenType.Overview);
  const params = useParams();
  const film = filmsList.find((item) => item.id === params.id) as Film;
  const relativeFilms = filmsList.slice().filter((item) => item.genre===film.genre);

  const screenSwitch = (view: string) => {
    if(view === ScreenType.Details){
      return <FilmDetail film={film} />;
    } else if(view === ScreenType.Reviews){
      return <FilmRewiews rewiews={rewiews} />;
    } else { return <FilmOverview film={film} />;}
  };

  const handleNavChange = useCallback((evt: React.MouseEvent<HTMLElement>, screen: ScreenType) => {
    evt.preventDefault();
    setScreenView(screen);
  }, []);

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
                  {Object.entries(ScreenType).map(([screen, title]) => (
                    <li className={`film-nav__item ${screen === screenView && 'film-nav__item--active'}`}
                      key={screen} onClick={(evt) => handleNavChange(evt, screen as ScreenType)}
                    >
                      <a href="/" className="film-nav__link">{title}</a>
                    </li>
                  ))}
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
          <Catalog filmsList={relativeFilms}/>
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );}

export default FilmPage; 

