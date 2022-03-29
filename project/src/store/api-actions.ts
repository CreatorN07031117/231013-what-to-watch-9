import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, store} from '../store';
import {FilmsList, Film, NewRewiew} from '../types/types';
import {APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR, TIMEOUT_SHOW_ADD_REWIEW} from '../components/const';
import {loadUserData, requireAuthorization} from './user-process/user-process';
import {loadFilmActive, loadRewiews, loadSimilarFilms} from './film-process/film-process';
import {loadFilms, setError, loadPromo} from './films-process/films-process';
import {redirectToRoute} from './action';
import {errorHandle} from '../services/error-handle';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {saveToken, dropToken} from '../services/token';


export const fetchFilmsAction =
createAsyncThunk(
  'data/fetchFilms',
  async () => {
    try {
      const {data} = await api.get<FilmsList>(APIRoute.Films);
      store.dispatch(loadFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      const {data} = await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(loadUserData(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(loadUserData(data));
    } catch (error) {
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const addRewiew = createAsyncThunk(
  'data/addRewiew',
  async ({id, comment, rating}: NewRewiew) => {
    await api.post(`/comments/${id}`, {comment, rating});
    setTimeout(
      () => store.dispatch(redirectToRoute(`/films/${id}`)),
      TIMEOUT_SHOW_ADD_REWIEW,
    );
  },
);


export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      store.dispatch(loadUserData({} as UserData));
    } catch (error) {
      errorHandle (error);
    }
  },
);

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);


export const fetchPromo = createAsyncThunk(
  'data/fetchPromo',
  async () => {
    try {
      const {data} = await api.get<Film>(APIRoute.Promo);
      store.dispatch(loadPromo(data));
    } catch (error) {
      errorHandle (error);
    }
  },
);

export const fetchFilmActive = createAsyncThunk(
  'data/fetchFilmActive',
  async (id: string) => {
    try {
      const {data} = await api.get(`/films/${id}`);
      store.dispatch(loadFilmActive(data));
    } catch (error) {
      store.dispatch(redirectToRoute('*'));
    }
  },
);

export const fetchRewiews = createAsyncThunk(
  'data/fetchRewiews',
  async (id: string) => {
    const {data} = await api.get(`/comments/${id}`);
    store.dispatch(loadRewiews(data));
  },
);

export const fetchSimilarFilms = createAsyncThunk(
  'data/fetchSimilarFilms',
  async (id: string) => {
    const {data} = await api.get(`/films/${id}/similar`);
    store.dispatch(loadSimilarFilms(data));
  },
);

