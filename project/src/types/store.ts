import {store} from '../store/index.js';
import {AuthorizationStatus} from '../components/const.js';
import {UserData} from '../types/user-data';
import {FilmsList, Film, Rewiews} from '../types/types';


export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
};

export type FilmProcess = {
  filmActive: Film;
  rewiews: Rewiews;
  similarFilms: FilmsList;
};

export type FilmsProcess = {
  genre: string;
  films: FilmsList;
  count: number;
  isDataLoaded: boolean;
  error: '';
  promo: Film;
};
