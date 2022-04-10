import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, ALL_FILMS} from '../../components/const';
import {FilmsProcess} from '../../types/store';
import {FilmsList, Film} from '../../types/types';


const initialState: FilmsProcess = {
  genre: ALL_FILMS,
  films: [] as FilmsList,
  isDataLoaded: false,
  promo: {} as Film,
  favoriteFilms: [] as FilmsList,
};

export const filmsProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    selectGenre: (state, action) => {
      state.genre = action.payload;
    },
    getFilmsList: (state) => {
      ({films: state.films} = state);
    },
    loadFilms: (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    },
    getPromo: (state) => {
      ({promo: state.promo} = state);
    },
    loadPromo: (state, action) => {
      state.promo = action.payload;
    },
    loadFavoriteFilms: (state, action) =>{
      state.favoriteFilms = action.payload;
    },
  },
});

export const {selectGenre, getFilmsList, loadFilms, getPromo, loadPromo, loadFavoriteFilms} = filmsProcess.actions;
