import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatus} from '../../components/const';
import {UserProcess} from '../../types/store';
import {UserData} from '../../types/user-data';


const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: {} as UserData,
};

export const userProcess = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    loadUserData: (state, action) => {
      state.userData = action.payload;
    },
    getUserData: (state) => {
      ({userData: state.userData} = state);
    },
  },
});

export const {requireAuthorization, loadUserData, getUserData} = userProcess.actions;
