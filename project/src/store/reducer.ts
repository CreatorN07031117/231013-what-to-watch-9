/* eslint-disable no-self-assign */
import {createReducer} from '@reduxjs/toolkit';
import {selectGenre, getFilmList} from './action';
import {filmsList} from '../mocks/film-mocks';
import {ALL_FILMS} from '../components/const';

const initialState = {
  genre: ALL_FILMS,
  films: filmsList,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilmList, (state) => {
      state.films = state.films;
    });
});

export {reducer};
