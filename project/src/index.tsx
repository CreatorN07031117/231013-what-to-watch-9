import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import {rewiews} from './mocks/rewiew-mocks';
import {fetchFilmsAction, checkAuthAction} from '../src/store/api-actions';


const Setting = {
  TITLE: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  YEAR: 2014,
};

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage />
      <App promoFilmTitle={Setting.TITLE} promoFilmGenre={Setting.GENRE} promoFilmYear={Setting.YEAR} rewiews={rewiews}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
