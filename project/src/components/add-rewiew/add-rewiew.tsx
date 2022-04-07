import dayjs from 'dayjs';
import {useState, ChangeEvent, useEffect} from 'react';
import {toast} from 'react-toastify';
import {Link, useParams} from 'react-router-dom';
import {NewRewiew} from '../../types/types';
import {addRewiew} from '../../store/api-actions';
import {store} from '../../store';
import {fetchFilmActive, fetchRewiews, fetchSimilarFilms} from '../../store/api-actions';
import AuthUserBlock from '../auth-user-block/auth-user-block';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {MIN_REWIEW_LENGHT, MAX_REWIEW_LENGHT} from '../const';


function AddRewiew(): JSX.Element {
  const params = useParams();

  useEffect(() => {
    store.dispatch(fetchFilmActive(params.id as string));
    store.dispatch(fetchRewiews(params.id as string));
    store.dispatch(fetchSimilarFilms(params.id as string));
  }, [params.id]);

  const {filmActive} = useAppSelector(({FILM}) => FILM);
  const dispatch = useAppDispatch();
  const today = dayjs();

  const [rewiew, setRewiew] = useState({
    rating: 0,
    comment: '',
    date: `${today}`,
    user: {
      name: 'You',
    },
  });

  const notify = (message : string) => toast(message);

  const [, setIsSubmitting] = useState(false);
  const [postBtndisabled, setPostBtnDisabled] = useState(true);
  const [, setNewComment] = useState(false);

  const formChangeHandle = (evt: ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setRewiew({...rewiew, [name]: value});

    if(rewiew.comment.length >= MIN_REWIEW_LENGHT && rewiew.comment.length <= MAX_REWIEW_LENGHT){
      setPostBtnDisabled(false);
    }
    if(rewiew.comment.length > MAX_REWIEW_LENGHT || rewiew.comment.length < MIN_REWIEW_LENGHT){
      setPostBtnDisabled(true);
    }
  };

  const onSubmitRewiew = (newRewiew: NewRewiew) => {
    if(rewiew.rating === 0){
      notify('Сhoose rating level');
    }
    if(rewiew.rating > 0){
      setIsSubmitting(true);
      dispatch(addRewiew(newRewiew));
      setIsSubmitting(false);
      notify('Success! Your comment has been published');
    }
  };

  return (
    <section className="film-card film-card--full" style={{backgroundColor: filmActive.backgroundColor}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={filmActive.backgroundImage} alt={filmActive.name} />
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
                <Link to={`/films/${filmActive.id}`} className="breadcrumbs__link">{filmActive.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="# ">Add review</a>
              </li>
            </ul>
          </nav>

          <AuthUserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={filmActive.posterImage} alt={filmActive.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#"
          className="add-review__form"
          onSubmit={(evt) => {
            evt.preventDefault();
            setNewComment(true);
            onSubmitRewiew({
              id: filmActive.id,
              comment: rewiew.comment,
              rating: rewiew.rating,
            });
          }}
        >
          <div className="rating">
            <div className="rating__stars" data-testid="rating">
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

          <div className="add-review__text" style={{backgroundColor: 'rgba(255,255,255,0.4'}}>
            <textarea className="add-review__textarea" name="comment" id="comment" onChange={formChangeHandle} value={rewiew.comment} data-testid="comment"></textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                data-testid="submit"
                disabled={postBtndisabled}
              >
                Post
              </button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
}

export default AddRewiew;
