import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import App from './components/app/app';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {fetchFilmsAction, checkAuthAction, fetchPromo, fetchFavoriteFilms} from '../src/store/api-actions';
import HistoryRouter from '../src/components/history-route/history-route';
import {AuthorizationStatus} from './components/const';
import browserHistory from './browser-history';


store.dispatch(checkAuthAction());
store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromo());
if(AuthorizationStatus.Auth){store.dispatch(fetchFavoriteFilms());}

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer limit={1}  theme={'dark'} />
      <HistoryRouter history={browserHistory}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
