/* eslint-disable no-self-assign */
import {createReducer} from '@reduxjs/toolkit';
import {selectGenre, getFilmList, showMoreFilms, loadFilms} from './action';
import {ALL_FILMS, FILMS_PER_LOAD} from '../components/const';
import {FilmsList} from '../types/types';

const initialState = {
  genre: ALL_FILMS,
  films: [] as FilmsList,
  count: FILMS_PER_LOAD,
  isDataLoaded: false,
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
    });
});

export {reducer};
