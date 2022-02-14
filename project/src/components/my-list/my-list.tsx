import FilmCard from '../film-card/film-card';
import FilmsList from '../mock-film-list/mock-films-list';
import Footer from '../footer/footer';

function MyList(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link" href="# ">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {
            FilmsList.slice(0, 5).map((item) => <FilmCard key={item.filmTitle} filmTitle={item.filmTitle} posterImage={item.posterImage} />)
          }
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
