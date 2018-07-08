import React from 'react';

const User = (props) => (
  <div>
    <p>User Name: <span><strong>{props.user.firstName} {props.user.lastName}</strong></span></p>
    <p>Email Id: <span><strong>{props.user.email}</strong></span></p>
    <p>Phone: <span><strong>{props.user.phone}</strong></span></p>
  </div>
);

export default User;
