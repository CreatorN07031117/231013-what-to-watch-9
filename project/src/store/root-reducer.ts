import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../components/const';
import {userProcess} from './user-process/user-process';
import {filmProcess} from './film-process/film-process';
import {filmsProcess} from './films-process/films-process';


export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Film]: filmProcess.reducer,
  [NameSpace.Films]: filmsProcess.reducer,
});
