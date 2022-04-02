import {Route, Routes} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import SingIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import FilmPage from '../film/film';
import AddRewiew from '../add-rewiew/add-rewiew';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import Player from '../player/player';
import Preloader from '../preloader/preloader';
import {AuthorizationStatus} from '../const';
import {useAppSelector} from '../../hooks/index';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';


function App (): JSX.Element {

  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const {isDataLoaded} = useAppSelector(({FILMS}) => FILMS);

  const isCheckedAuth = (authStatus: AuthorizationStatus): boolean =>
    authStatus === AuthorizationStatus.Unknown;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Preloader />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path='/'>
          <Route index element={<MainScreen  />} />
          <Route path='mylist' element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyList />
            </PrivateRoute>
          }
          />
          <Route path='login' element={<SingIn />} />
          <Route path='films/:id'>
            <Route index element={<FilmPage />} />
            <Route path='review' element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <AddRewiew />
              </PrivateRoute>
            }
            />
          </Route>
          <Route path='player/:id' element={<Player />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
