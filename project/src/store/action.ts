import {createAction} from '@reduxjs/toolkit';
import {FilmsList} from '../types/types';

export const selectGenre = createAction('catalog/selectGenre', (genre) => ({payload: genre}));

export const getFilmList = createAction('getFilmList');

export const showMoreFilms = createAction('showMoreFilms');

export const loadFilms = createAction<FilmsList>('data/loadFilms');
