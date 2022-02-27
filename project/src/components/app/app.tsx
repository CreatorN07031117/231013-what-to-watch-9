import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {useState} from 'react';
import MainScreen from '../main/main';
import SingIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import FilmPage from '../film/film';
import AddRewiew from '../add-rewiew/add-rewiew';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import Player from '../player/player';
import {AuthorizationStatus} from '../const';
import {FilmsList} from '../../types/types';

type AppScreenProps = {
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmYear: number;
  filmsList: FilmsList;
}

function App ({promoFilmTitle, promoFilmGenre, promoFilmYear, filmsList}: AppScreenProps): JSX.Element {
  const [filmId, setFilmId] = useState(0);

  const filmsIdList = filmsList.slice().map((item) => item.id);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index  element={<MainScreen promoFilmTitle={promoFilmTitle} promoFilmGenre={promoFilmGenre} promoFilmYear={promoFilmYear} filmsList={filmsList} onFilm={(id) => setFilmId(id)}/>} />
          <Route path='mylist'element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList filmsList={filmsList} onFilm={(id) => setFilmId(id)}/>
            </PrivateRoute>
          }
          />
          <Route path='login' element={<SingIn />} />
          <Route path='films/:id'>
            <Route index element={<FilmPage film={filmsList[filmsIdList.indexOf(filmId)]} filmsList={filmsList} onFilm={(id) => setFilmId(id)}/>} />
            <Route path='review' element={<AddRewiew film={filmsList[filmsIdList.indexOf(filmId)]}/>} />
          </Route>
          <Route path='player/:id' element={<Player film={filmsList[filmsIdList.indexOf(filmId)]}/>} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
