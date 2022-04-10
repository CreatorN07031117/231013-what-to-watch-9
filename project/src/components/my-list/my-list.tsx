import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import {useAppSelector} from '../../hooks/hooks';
import {fetchFavoriteFilms} from '../../store/api-actions';
import {store} from '../../store/store';
import UserBlock from '../user-block/user-block';
import AuthUserBlock from '../auth-user-block/auth-user-block';


function MyList(): JSX.Element {

  const {favoriteFilms} = useAppSelector(({FILMS}) => FILMS);

  useEffect(() => {store.dispatch(fetchFavoriteFilms());}, []);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to='/' title='/' className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock render={
          () => <AuthUserBlock />
        }
        />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <Catalog filmsList={favoriteFilms} />
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
