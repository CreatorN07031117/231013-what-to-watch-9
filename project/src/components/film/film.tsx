import React from 'react';
import {useState, useCallback, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import Catalog from '../catalog/catalog';
import FilmOverview from '../film-overview/film-overview';
import FilmDetail from '../film-detail/film-detail';
import FilmRewiews from '../film-reviews/film-reviews';
import {ScreenType, SIMILAR_FILMS, AuthorizationStatus} from '../const';
import {useAppSelector} from '../../hooks/';
import Buttons from '../buttons/buttons';
import {fetchFilmActive, fetchRewiews, fetchSimilarFilms} from '../../store/api-actions';
import {store} from '../../store';


function FilmPage(): JSX.Element {
  const [screenView, setScreenView] = useState(ScreenType.Overview);
  const params = useParams();

  useEffect(() => {
    store.dispatch(fetchFilmActive(params.id as string));
    store.dispatch(fetchRewiews(params.id as string));
    store.dispatch(fetchSimilarFilms(params.id as string));
  }, [params.id]);

  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const {filmActive, rewiews, similarFilms} = useAppSelector(({FILM}) => FILM);

  const screenSwitch = (view: string) => {
    if(view === ScreenType.Details){
      return <FilmDetail film={filmActive} />;
    } else if(view === ScreenType.Reviews){
      return <FilmRewiews rewiews={rewiews} />;
    } else { return <FilmOverview film={filmActive} />;}
  };

  const handleNavChange = useCallback((evt: React.MouseEvent<HTMLElement>, screen: ScreenType) => {
    evt.preventDefault();
    setScreenView(screen);
  }, []);

  return (
    <React.Fragment>
      <section className="film-card film-card--full" style={{backgroundColor: filmActive.backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={filmActive.backgroundImage} alt={filmActive.name} />
          </div>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmActive.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmActive.genre}</span>
                <span className="film-card__year">{filmActive.released}</span>
              </p>
              <Buttons render={() => (
                authorizationStatus === AuthorizationStatus.Auth
                  ? <Link to={`/films/${filmActive.id}/review`} title="review"  className="btn film-card__button">Add review</Link>
                  : (null)
              )}
              />
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={filmActive.posterImage} alt={filmActive.name} width="218" height="327" />
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
          <Catalog filmsList={similarFilms.slice(0, SIMILAR_FILMS)} />
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );}

export default FilmPage;
