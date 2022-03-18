/* eslint-disable no-self-assign */
import {createReducer} from '@reduxjs/toolkit';
import {selectGenre, getFilmList, showMoreFilms} from './action';
import {filmsList} from '../mocks/film-mocks';
import {ALL_FILMS, FILMS_PER_LOAD} from '../components/const';

const initialState = {
  genre: ALL_FILMS,
  films: filmsList,
  count: FILMS_PER_LOAD,
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
    });
});

export {reducer};
