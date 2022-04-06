import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import {fetchFilmsAction, checkAuthAction, fetchPromo, fetchFavoriteFilms} from '../src/store/api-actions';
import HistoryRouter from '../src/components/history-route/history-route';
import browserHistory from './browser-history';

store.dispatch(fetchPromo());
store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchFavoriteFilms());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage />
      <HistoryRouter history={browserHistory}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
