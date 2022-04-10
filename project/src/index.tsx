import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';
import App from './components/app/app';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {fetchFilmsAction, checkAuthAction, fetchPromo, fetchFavoriteFilms} from '../src/store/api-actions';
import HistoryRouter from '../src/components/history-router/history-router';
import browserHistory from './browser-history';


store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromo());
store.dispatch(fetchFavoriteFilms());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer  theme={'dark'} />
      <HistoryRouter history={browserHistory}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
