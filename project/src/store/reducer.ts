/* eslint-disable no-self-assign */
import {createReducer} from '@reduxjs/toolkit';
import {selectGenre, getFilmList, showMoreFilms, loadFilms, requireAuthorization, setError, loadPromo, getPromo, getUserData, loadUserData, loadFilmActive, loadRewiews, loadSimilarFilms} from './action';
import {ALL_FILMS, FILMS_PER_LOAD, AuthorizationStatus} from '../components/const';
import {FilmsList, Film, Rewiews} from '../types/types';
import {UserData} from '../types/user-data';


const initialState = {
  genre: ALL_FILMS,
  films: [] as FilmsList,
  count: FILMS_PER_LOAD,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
  promo: {} as Film,
  userData: {} as UserData,
  filmActive: {} as Film,
  rewiews: [] as Rewiews,
  similarFilms: [] as FilmsList,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectGenre, (state, action) => {
      state.genre = action.payload;
      state.count = FILMS_PER_LOAD;
    })
    .addCase(getFilmList, (state) => {
      state.films = state.films;
    })
    .addCase(showMoreFilms, (state) => {
      state.count = state.count + FILMS_PER_LOAD;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(getPromo, (state) => {
      state.promo = state.promo;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(getUserData, (state) => {
      state.userData = state.userData;
    })
    .addCase(loadUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(loadFilmActive, (state, action) => {
      state.filmActive = action.payload;
    })
    .addCase(loadRewiews, (state, action) => {
      state.rewiews = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    });
});

export {reducer};
