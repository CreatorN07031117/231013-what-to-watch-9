import dayjs from 'dayjs';
import {useRef, useState, ChangeEvent, useEffect} from 'react';
import {toast} from 'react-toastify';
import {Link, useParams} from 'react-router-dom';
import {NewReview} from '../../types/types';
import {addReview} from '../../store/api-actions';
import {store} from '../../store/store';
import {fetchFilmActive, fetchReviews, fetchSimilarFilms} from '../../store/api-actions';
import AuthUserBlock from '../auth-user-block/auth-user-block';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {MIN_REVIEW_LENGHT, MAX_REVIEW_LENGHT} from '../const';


function AddReview(): JSX.Element {
  const params = useParams();

  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    store.dispatch(fetchFilmActive(params.id as string));
    store.dispatch(fetchReviews(params.id as string));
    store.dispatch(fetchSimilarFilms(params.id as string));
  }, [params.id]);

  const {filmActive} = useAppSelector(({FILM}) => FILM);
  const dispatch = useAppDispatch();
  const today = dayjs();

  const [review, setReview] = useState({
    rating: 0,
    comment: '',
    date: `${today}`,
    user: {
      name: 'You',
    },
  });

  const notify = (message : string) => toast(message);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [postBtndisabled, setPostBtnDisabled] = useState(true);

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setReview((prevReview) => ({...prevReview, [name]: value}));
  };

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setReview((prevReview) => ({...prevReview, [name]: value}));

    const length = evt.target.value.length;

    if(length >= MIN_REVIEW_LENGHT && length <= MAX_REVIEW_LENGHT){
      setPostBtnDisabled(false);
    }
    if(length > MAX_REVIEW_LENGHT || length < MIN_REVIEW_LENGHT){
      setPostBtnDisabled(true);
    }
  };

  const handleSubmitReview = (newreview: NewReview) => {
    if(review.rating === 0){
      notify('Сhoose rating level');
    }
    if(review.rating > 0){
      setIsSubmitting(true);
      setPostBtnDisabled(true);
      dispatch(addReview(newreview));
      setIsSubmitting(false);
      setPostBtnDisabled(false);
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
                <Link to={`/films/${filmActive.id}/review`} className="breadcrumbs__link">Add review</Link>
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
            handleSubmitReview({
              id: filmActive.id,
              comment: review.comment,
              rating: review.rating,
            });
          }}
        >
          <div className="rating">
            <div className="rating__stars" data-testid="rating">
              <input className="rating__input" id="star-10" type="radio" name="rating" value="10" onChange={handleRatingChange} disabled={isSubmitting}/>
              <label className="rating__label" htmlFor="star-10">Rating 10</label>

              <input className="rating__input" id="star-9" type="radio" name="rating" value="9" onChange={handleRatingChange} disabled={isSubmitting}/>
              <label className="rating__label" htmlFor="star-9">Rating 9</label>

              <input className="rating__input" id="star-8" type="radio" name="rating" value="8" onChange={handleRatingChange} disabled={isSubmitting}/>
              <label className="rating__label" htmlFor="star-8">Rating 8</label>

              <input className="rating__input" id="star-7" type="radio" name="rating" value="7" onChange={handleRatingChange} disabled={isSubmitting}/>
              <label className="rating__label" htmlFor="star-7">Rating 7</label>

              <input className="rating__input" id="star-6" type="radio" name="rating" value="6" onChange={handleRatingChange} disabled={isSubmitting}/>
              <label className="rating__label" htmlFor="star-6">Rating 6</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={handleRatingChange} disabled={isSubmitting}/>
              <label className="rating__label" htmlFor="star-5">Rating 5</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={handleRatingChange} disabled={isSubmitting}/>
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onChange={handleRatingChange} disabled={isSubmitting}/>
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={handleRatingChange} disabled={isSubmitting}/>
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={handleRatingChange} disabled={isSubmitting}/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>
            </div>
          </div>

          <div className="add-review__text" style={{backgroundColor: 'rgba(255,255,255,0.4'}}>
            <textarea className="add-review__textarea" name="comment" id="comment" onChange={handleCommentChange} value={review.comment} data-testid="comment" disabled={isSubmitting} ref={textAreaRef}></textarea>
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

export default AddReview;
