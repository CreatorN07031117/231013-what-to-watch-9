import {createAction} from '@reduxjs/toolkit';


export const sendRewiew = createAction('data/sendRewiew');

export const redirectToRoute = createAction<string>('redirectToRoute');
