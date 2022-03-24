import {createAction} from '@reduxjs/toolkit';
import {FilmsList, Film} from '../types/types';
import {AuthorizationStatus} from '../components/const';


export const selectGenre = createAction('catalog/selectGenre', (genre) => ({payload: genre}));

export const getFilmList = createAction('getFilmList');

export const showMoreFilms = createAction('showMoreFilms');

export const loadFilms = createAction<FilmsList>('data/loadFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string>('setError');

export const getPromo = createAction('getPromo');

export const loadPromo = createAction<Film>('data/loadPromo');
