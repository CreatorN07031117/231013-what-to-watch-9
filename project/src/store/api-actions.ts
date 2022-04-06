import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {store} from '../store/index';
import {AppDispatch, State} from '../types/store';
import {FilmsList, Film, NewRewiew, FavoriteStatus} from '../types/types';
import {APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR, TIMEOUT_SHOW_ADD_REWIEW} from '../components/const';
import {loadUserData, requireAuthorization} from './user-process/user-process';
import {loadFilmActive, loadRewiews, loadSimilarFilms} from './film-process/film-process';
import {loadFilms, setError, loadPromo, loadFavoriteFilms} from './films-process/films-process';
import {redirectToRoute} from './action';
import {errorHandle} from '../services/error-handle';
import {AuthData} from '../types/auth-data';
import {UserData} from '../types/user-data';
import {saveToken, dropToken} from '../services/token';


export const fetchFilmsAction =
createAsyncThunk <void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<FilmsList>(APIRoute.Films);
      dispatch(loadFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(loadUserData(data));
    } catch (error) {
      errorHandle(error);
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(loadUserData(data));
    } catch (error) {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const addRewiew = createAsyncThunk<void, NewRewiew, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/addRewiew',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    await api.post(`/comments/${id}`, {comment, rating});
    setTimeout(
      () => dispatch(redirectToRoute(`/films/${id}`)),
      TIMEOUT_SHOW_ADD_REWIEW,
    );
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      dispatch(loadUserData({} as UserData));
    } catch (error) {
      errorHandle (error);
    }
  },
);

export const clearErrorAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);


export const fetchPromo = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/fetchPromo',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Film>(APIRoute.Promo);
      dispatch(loadPromo(data));
    } catch (error) {
      errorHandle (error);
    }
  },
);

export const fetchFilmActive = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/fetchFilmActive',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get(`/films/${id}`);
      dispatch(loadFilmActive(data));
    } catch (error) {
      dispatch(redirectToRoute('*'));
    }
  },
);

export const fetchRewiews = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/fetchRewiews',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get(`/comments/${id}`);
    dispatch(loadRewiews(data));
  },
);

export const fetchSimilarFilms = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/fetchSimilarFilms',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get(`/films/${id}/similar`);
    dispatch(loadSimilarFilms(data));
  },
);

export const changeFavoriteStatus = createAsyncThunk<void, FavoriteStatus, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/changeFavoriteStatus',
  async ({id, status}, {dispatch, extra: api}) => {
    const {data} = await api.post(`/favorite/${id}/${status}`);
    dispatch(loadFilmActive(data));
  },
);

export const fetchFavoriteFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/fetchFavoriteFilms',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<FilmsList>(APIRoute.Favorite);
      dispatch(loadFavoriteFilms(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);
