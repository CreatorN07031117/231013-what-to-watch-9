import {Link} from 'react-router-dom';


function NoAuthUserBlock (): JSX.Element {

  return (
    <ul className="user-block">
      <li className="user-block__item">
      </li>
      <li className="user-block__item">
        <Link
          to="/login"
          title="login"
          className="user-block__link"
        >
        Sign in
        </Link>
      </li>
    </ul>
  );
}

export default NoAuthUserBlock;
