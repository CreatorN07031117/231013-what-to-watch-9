import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainScreen from '../main/main';
import SingIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddRewiew from '../add-rewiew/add-rewiew';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import Player from '../player/player';
import {AuthorizationStatus} from '../const';

type AppScreenProps = {
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmYear: number;
}

function App ({promoFilmTitle, promoFilmGenre, promoFilmYear}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index  element={<MainScreen promoFilmTitle={promoFilmTitle} promoFilmGenre={promoFilmGenre} promoFilmYear={promoFilmYear} />} />
          <Route path='my-list'element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList />
            </PrivateRoute>
          }
          />
          <Route path='login' element={<SingIn />} />
          <Route path='films/:id'>
            <Route index element={<Film />} />
            <Route path='review' element={<AddRewiew />} />
          </Route>
          <Route path='player/:id' element={<Player />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
