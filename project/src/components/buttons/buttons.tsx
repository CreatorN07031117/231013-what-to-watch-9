import React from 'react';
import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthorizationStatus} from '../const';
import {useAppSelector} from '../../hooks/';


function Buttons (): JSX.Element {
  const navigate = useNavigate();
  const {authorizationStatus} = useAppSelector((state) => state);

  const handleMyList = useCallback(() => {
    if(authorizationStatus !== AuthorizationStatus.Auth) {
      navigate('/login');
    }
  }, [authorizationStatus, navigate]);

  return (
    <React.Fragment>
      <button className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button
        className="btn btn--list film-card__button"
        type="button"
        onClick={() => handleMyList()}
      >
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </button>
    </React.Fragment>
  );

}

export default Buttons;
