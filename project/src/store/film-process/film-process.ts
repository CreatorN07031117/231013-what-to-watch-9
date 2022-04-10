import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../components/const';
import {FilmProcess} from '../../types/store';
import {FilmsList, Film, Reviews} from '../../types/types';


const initialState: FilmProcess = {
  filmActive: {} as Film,
  reviews: [] as Reviews,
  similarFilms: [] as FilmsList,
};

export const filmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {
    loadFilmActive: (state, action) => {
      state.filmActive = action.payload;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload;
    },
    loadSimilarFilms: (state, action) => {
      state.similarFilms = action.payload;
    },
  },
});

export const {loadFilmActive, loadReviews, loadSimilarFilms} = filmProcess.actions;
