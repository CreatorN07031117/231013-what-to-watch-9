import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store';
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
    <Provider store = {store}>
      <App promoFilmTitle={Setting.TITLE} promoFilmGenre={Setting.GENRE} promoFilmYear={Setting.YEAR} filmsList={filmsList} rewiews={rewiews}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
