import {useState, ChangeEvent} from 'react';
import {Link, useParams} from 'react-router-dom';
import RewiewContent from '../rewiew/rewiew';
import {Film} from '../../types/types';
import {useAppSelector} from '../../hooks/';


function AddRewiew(): JSX.Element {
  const params = useParams();
  const filmsList = useAppSelector((state) => state.films);
  const film: Film = filmsList.find((item) => item.id === params.id) as Film;

  const [rewiew, setRewiew] = useState({
    rating: 0,
    comment: '',
    date: 'Today',
    user: {
      name: 'You',
    },
  });

  const [newComment, setNewComment] = useState(false);

  const formChangeHandle = (evt: ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setRewiew({...rewiew, [name]: value});
  };

  const newCommentContent = () => (
    <div>
      <p className="film-card__director"><strong>Success! Your comment has been published</strong></p>
      <RewiewContent rewiew={rewiew}/>
    </div>
  );


  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to='/' title='/' className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="# ">Add review</a>
              </li>
            </ul>
          </nav>

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

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        {newComment ?  newCommentContent() : null}
        <form action="#" className={newComment ? 'visually-hidden' : 'add-review__form'}
          onSubmit={(evt) => {
            evt.preventDefault();
            setNewComment(true);
          }}
        >
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-10" type="radio" name="rating" value="10" onChange={formChangeHandle}/>
              <label className="rating__label" htmlFor="star-10">Rating 10</label>

              <input className="rating__input" id="star-9" type="radio" name="rating" value="9" onChange={formChangeHandle}/>
              <label className="rating__label" htmlFor="star-9">Rating 9</label>

              <input className="rating__input" id="star-8" type="radio" name="rating" value="8" onChange={formChangeHandle}/>
              <label className="rating__label" htmlFor="star-8">Rating 8</label>

              <input className="rating__input" id="star-7" type="radio" name="rating" value="7" onChange={formChangeHandle}/>
              <label className="rating__label" htmlFor="star-7">Rating 7</label>

              <input className="rating__input" id="star-6" type="radio" name="rating" value="6" onChange={formChangeHandle}/>
              <label className="rating__label" htmlFor="star-6">Rating 6</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={formChangeHandle}/>
              <label className="rating__label" htmlFor="star-5">Rating 5</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={formChangeHandle}/>
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onChange={formChangeHandle}/>
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={formChangeHandle}/>
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={formChangeHandle}/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="comment" id="comment" onChange={formChangeHandle} value={rewiew.comment}></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
}

export default AddRewiew;
