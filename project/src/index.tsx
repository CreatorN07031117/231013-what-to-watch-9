import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {filmsList} from './mocks/film-mocks';
import {rewiews} from './mocks/rewiew-mocks';

const Setting = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  YEAR: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App promoFilmTitle={Setting.TITLE} promoFilmGenre={Setting.GENRE} promoFilmYear={Setting.YEAR} filmsList={filmsList} rewiews={rewiews}/>
  </React.StrictMode>,
  document.getElementById('root'));
