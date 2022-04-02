import {createAction} from '@reduxjs/toolkit';


export const setError = createAction<string>('setError');

export const sendRewiew = createAction('data/sendRewiew');

export const redirectToRoute = createAction<string>('redirectToRoute');
