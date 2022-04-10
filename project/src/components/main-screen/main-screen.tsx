import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import MainCatalog from '../main-catalog/main-catalog';
import {useAppSelector} from '../../hooks/hooks';
import Buttons from '../buttons/buttons';


function MainScreen(): JSX.Element {

  const {promo} = useAppSelector(({FILMS}) => FILMS);

  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promo.backgroundImage} alt={promo.name} style={{backgroundColor: promo.backgroundColor}}/>
        </div>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promo.posterImage} alt={promo.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo.genre}</span>
                <span className="film-card__year">{promo.released}</span>
              </p>
              <Buttons render={() => null}/>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <MainCatalog />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default MainScreen;
