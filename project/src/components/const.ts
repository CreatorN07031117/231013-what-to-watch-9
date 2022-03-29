export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const RATING_LEVEL = ['Bad', 'Normal', 'Good', 'Very good', 'Awesome'];

export function countLevel (rating: number): string {
  if (rating < 3){
    return RATING_LEVEL[0];
  } else if (rating < 5){
    return RATING_LEVEL[1];
  } else if (rating < 8){
    return  RATING_LEVEL[2];
  } else if (rating < 10){
    return  RATING_LEVEL[3];
  } else {return RATING_LEVEL[4];}
}

export enum ScreenType {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

export const ALL_FILMS = 'All genres';

export const FILMS_PER_LOAD = 8;

export const SIMILAR_FILMS = 4;

export const MAX_GENRES = 9;

export const BACKEND_URL = 'https://9.react.pages.academy/wtw';

export const REQUEST_TIMEOUT = 5000;

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Promo = '/promo',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export const TIMEOUT_SHOW_ERROR = 2000;

export const TIMEOUT_SHOW_ADD_REWIEW = 800;

export enum NameSpace {
  films = 'DATA',
  film = 'FILM',
  user = 'USER'
}
