import React from 'react';
import {useAppSelector} from '../../hooks/index';


function UserBlock (props):JSX.Element {

  const {authorizationStatus} = useAppSelector((state) => state);

  return (
    <React.Fragment>
      {props.render()}
    </React.Fragment>
  );
}

export default UserBlock;
