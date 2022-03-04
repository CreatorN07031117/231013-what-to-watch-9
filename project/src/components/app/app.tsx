import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainScreen from '../main/main';
import SingIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import FilmPage from '../film/film';
import AddRewiew from '../add-rewiew/add-rewiew';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import Player from '../player/player';
import {AuthorizationStatus} from '../const';
import {FilmsList, Rewiews} from '../../types/types';

type AppScreenProps = {
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmYear: number;
  filmsList: FilmsList;
  rewiews: Rewiews;
}

function App ({promoFilmTitle, promoFilmGenre, promoFilmYear, filmsList, rewiews}: AppScreenProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index  element={<MainScreen promoFilmTitle={promoFilmTitle} promoFilmGenre={promoFilmGenre} promoFilmYear={promoFilmYear} filmsList={filmsList} />} />
          <Route path='mylist'element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList filmsList={filmsList}/>
            </PrivateRoute>
          }
          />
          <Route path='login' element={<SingIn />} />
          <Route path='films/:id'>
            <Route index element={<FilmPage filmsList={filmsList} rewiews={rewiews} />} />
            <Route path='review' element={<AddRewiew filmsList={filmsList} />} />
          </Route>
          <Route path='player/:id' element={<Player filmsList={filmsList} />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
