import {createAction} from '@reduxjs/toolkit';

export const selectGenre = createAction('catalog/selectGenre', (genre) => ({payload: genre}));

export const getFilmList = createAction('getFilmList');
