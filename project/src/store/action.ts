import {createAction} from '@reduxjs/toolkit';
import {FilmsList, Film, Rewiews} from '../types/types';
import {AuthorizationStatus} from '../components/const';
import {UserData} from '../types/user-data';


export const selectGenre = createAction('catalog/selectGenre', (genre) => ({payload: genre}));

export const getFilmList = createAction('getFilmList');

export const showMoreFilms = createAction('showMoreFilms');

export const loadFilms = createAction<FilmsList>('data/loadFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string>('setError');

export const getPromo = createAction('getPromo');

export const loadPromo = createAction<Film>('data/loadPromo');

export const getUserData = createAction('getUserData');

export const loadUserData = createAction<UserData>('data/loadUserData');

export const loadFilmActive = createAction<Film>('data/loadFilmAction');

export const loadRewiews = createAction<Rewiews>('data/loadRewiews');

export const loadSimilarFilms = createAction<FilmsList>('data/loadSimilarFilms');

export const sendRewiew = createAction('data/sendRewiew');

export const redirectToRoute = createAction<string>('redirectToRoute');
