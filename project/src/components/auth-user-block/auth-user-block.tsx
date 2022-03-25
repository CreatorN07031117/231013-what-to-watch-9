import {logoutAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Link} from 'react-router-dom';


function AuthUserBlock (): JSX.Element {

  const dispatch = useAppDispatch();
  const {userData} = useAppSelector((state) => state);

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <Link to="/mylist" title="my list">
          <div className="user-block__avatar">
            <img src={userData.avatarUrl} alt={userData.name} width="63" height="63" />
          </div>
        </Link>
      </li>
      <li className="user-block__item">
        <Link
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
          to="/login"
          title="login"
          className="user-block__link"
        >
        Sign out
        </Link>
      </li>
    </ul>
  );
}

export default AuthUserBlock;
