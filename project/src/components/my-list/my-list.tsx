import {Link} from 'react-router-dom';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import {FilmsList} from '../../types/types';

type MyListProps = {
  filmsList: FilmsList;
}

function MyList({filmsList}: MyListProps): JSX.Element {
  const myFilmsList = filmsList.slice().filter((item) => item.isFavorite === true);

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

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <Link to="/login" title="login" className="user-block__link">Sign out</Link>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <Catalog filmsList={myFilmsList} />
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
