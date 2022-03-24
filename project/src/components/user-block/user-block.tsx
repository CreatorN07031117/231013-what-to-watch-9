import React from 'react';


function UserBlock (props: {render(): JSX.Element}):JSX.Element {


  return (
    <React.Fragment>
      {props.render()}
    </React.Fragment>
  );
}

export default UserBlock;
