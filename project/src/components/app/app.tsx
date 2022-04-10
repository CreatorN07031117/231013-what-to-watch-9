import {Route, Routes, Navigate} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import SingIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import FilmPage from '../film-page/film-page';
import AddReview from '../add-review/add-review';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import Player from '../player/player';
import Preloader from '../preloader/preloader';
import {AuthorizationStatus} from '../const';
import {useAppSelector} from '../../hooks/hooks';


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
    <Routes>
      <Route path='/'>
        <Route index element={<MainScreen  />} />
        <Route path='mylist' element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <MyList />
          </PrivateRoute>
        }
        />
        <Route path='login' element={
          authorizationStatus === AuthorizationStatus.NoAuth
            ? <SingIn />
            : <Navigate replace to='/' />
        }
        />
        <Route path='films/:id'>
          <Route index element={<FilmPage />} />
          <Route path='review' element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <AddReview />
            </PrivateRoute>
          }
          />
        </Route>
        <Route path='player/:id' element={<Player />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
