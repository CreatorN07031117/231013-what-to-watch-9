import {store} from '../store/store';
import {AuthorizationStatus} from '../components/const.js';
import {UserData} from '../types/user-data';
import {FilmsList, Film, Reviews} from '../types/types';


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
};

export type FilmProcess = {
  filmActive: Film;
  reviews: Reviews;
  similarFilms: FilmsList;
};

export type FilmsProcess = {
  genre: string;
  films: FilmsList;
  isDataLoaded: boolean;
  promo: Film;
  favoriteFilms: FilmsList;
};
