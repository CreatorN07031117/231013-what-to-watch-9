import Catalog from '../catalog/catalog';
import GenreList from '../genre-list/genre-list';


function MainCatalog (): JSX.Element {

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenreList />
      <Catalog />

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}

export default MainCatalog;
