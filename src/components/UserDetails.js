import React, { PureComponent, Fragment } from 'react';
import User from './User';
import UserLogin from './UserLogin';

class UserDetails extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      user: this.props.user
    };
    this.getUser = this.getUser.bind(this);
  }

  getUser () {
    if (this.state.user.id) {
      return (<User user={this.props.user} />);
    } else {
      return (<UserLogin login={this.props.login} />);
    }
  }
  static getDerivedStateFromProps (props, state) {
    if (props.user !== state.user) {
      return {
        user: props.user
      };
    }
  }

  render () {
    console.log(this.state.user);
    return (
      <Fragment>
        <div className='user'>
          <div className='user__header'>
            <h5>User Details</h5>
          </div>
          <div className='user__body'>
            <div className='user__body--content'>
              {this.getUser()}
            </div>
            <div className='user__body--action'>
              <a className='button button__primary button__block'>Continue</a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default UserDetails;
