import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../components/const';
import {FilmProcess} from '../../types/store';
import {FilmsList, Film, Rewiews} from '../../types/types';


const initialState: FilmProcess = {
  filmActive: {} as Film,
  rewiews: [] as Rewiews,
  similarFilms: [] as FilmsList,
};

export const filmProcess = createSlice({
  name: NameSpace.film,
  initialState,
  reducers: {
    loadFilmActive: (state, action) => {
      state.filmActive = action.payload;
    },
    loadRewiews: (state, action) => {
      state.rewiews = action.payload;
    },
    loadSimilarFilms: (state, action) => {
      state.similarFilms = action.payload;
    },
  },
});

export const {loadFilmActive, loadRewiews, loadSimilarFilms} = filmProcess.actions;
