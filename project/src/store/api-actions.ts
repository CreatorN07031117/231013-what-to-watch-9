import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../store';
import {store} from '../store';
import {FilmsList} from '../types/types';
import {APIRoute} from '../components/const';
import { loadFilms } from './action';

export const fetchFilmsAction =
createAsyncThunk(
  'data/fetch/Films',
  async () => {
    const {data} = await api.get<FilmsList>(APIRoute.Films);
    store.dispatch(loadFilms(data));
  },
);
