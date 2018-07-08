import React from 'react';

const UserLogin = (props) => (
  <div className='step__login'>
    <a className='button__primary button button__large' onClick={props.login}> Log In </a>
  </div>
);

export default UserLogin;
