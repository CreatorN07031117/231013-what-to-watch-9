import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, ALL_FILMS, FILMS_PER_LOAD} from '../../components/const';
import {FilmsProcess} from '../../types/store';
import {FilmsList, Film} from '../../types/types';


const initialState: FilmsProcess = {
  genre: ALL_FILMS,
  films: [] as FilmsList,
  count: FILMS_PER_LOAD,
  isDataLoaded: false,
  error: '',
  promo: {} as Film,
  favoriteFilms: [] as FilmsList,
};

export const filmsProcess = createSlice({
  name: NameSpace.films,
  initialState,
  reducers: {
    selectGenre: (state, action) => {
      state.genre = action.payload;
      state.count = FILMS_PER_LOAD;
    },
    getFilmsList: (state) => {
      ({films: state.films} = state);
    },
    showMoreFilms: (state) => {
      state.count = state.count + FILMS_PER_LOAD;
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

export const {selectGenre, getFilmsList, showMoreFilms, loadFilms, getPromo, loadPromo, loadFavoriteFilms} = filmsProcess.actions;
