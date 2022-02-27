import React from 'react';
import {Link} from 'react-router-dom';

function Header(): JSX.Element {
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

        <ul className="user-block">
          <li className="user-block__item">
            <Link to="/mylist" title="my list">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </Link>
          </li>
          <li className="user-block__item">
            <Link to="/login" title="login" className="user-block__link">Sign out</Link>
          </li>
        </ul>
      </header>
    </React.Fragment>
  );
}

export default Header;
