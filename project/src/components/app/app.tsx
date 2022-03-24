import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainScreen from '../main/main';
import SingIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import FilmPage from '../film/film';
import AddRewiew from '../add-rewiew/add-rewiew';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import Player from '../player/player';
import Preloader from '../preloader/preloader';
import {AuthorizationStatus} from '../const';
import {Rewiews} from '../../types/types';
import {useAppSelector} from '../../hooks/index';


type AppScreenProps = {
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmYear: number;
  rewiews: Rewiews;
}

function App ({promoFilmTitle, promoFilmGenre, promoFilmYear, rewiews}: AppScreenProps): JSX.Element {

  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);
  const isCheckedAuth = (authStatus: AuthorizationStatus): boolean =>
    authStatus === AuthorizationStatus.Unknown;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Preloader />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<MainScreen promoFilmTitle={promoFilmTitle} promoFilmGenre={promoFilmGenre} promoFilmYear={promoFilmYear} />} />
          <Route path='mylist' element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyList />
            </PrivateRoute>
          }
          />
          <Route path='login' element={<SingIn />} />
          <Route path='films/:id'>
            <Route index element={<FilmPage rewiews={rewiews} />} />
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
