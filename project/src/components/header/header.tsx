import React from 'react';
import {Link} from 'react-router-dom';
import UserBlock from '../user-block/user-block';
import AuthUserBlock from '../auth-user-block/auth-user-block';
import NoAuthUserBlock from '../noauth-user-block/noauth-user-block';
import {AuthorizationStatus} from '../const';
import {useAppSelector} from '../../hooks/hooks';


function Header(): JSX.Element {

  const {authorizationStatus} = useAppSelector(({USER}) => USER);

  return (
    <React.Fragment>
      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <div className="logo">
          <Link to='/' title='/' className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <UserBlock render={
          () => (
            authorizationStatus === AuthorizationStatus.Auth? <AuthUserBlock /> : <NoAuthUserBlock />
          )
        }
        />
      </header>
    </React.Fragment>
  );
}

export default Header;
