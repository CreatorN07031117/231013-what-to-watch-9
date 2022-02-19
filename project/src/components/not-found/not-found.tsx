import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';

function NotFound (): JSX.Element {
  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/theater.jpg" alt="theater shutterstock" />
        </div>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info" style={{height: '500px'}}>
            <div className="film-card__desc">
              <h2 className="film-card__title">404</h2>
              <p className="film-card__meta">
              The page not found. Back to&nbsp;<Link to='/' title='/' style={{color: '#dfcf77'}}><b>movie catalog</b></Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default NotFound;
