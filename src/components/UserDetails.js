import React, { PureComponent, Fragment } from 'react';
import User from './User';

class UserDetails extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      user: this.props.user,
      status: this.props.status
    };
    this.getUser = this.getUser.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  getUser () {
    if (this.state.user.id) {
      return (
        <Fragment>
          <div className='user__content'>
            <User user={this.props.user} />
          </div>
          <div className='user__action'>
            <a onClick={this.updateStatus.bind(this, 'done', false)} className='button button__primary button__block'>Proceed to checkout</a>
          </div>
        </Fragment>
      );
    } else {
      return (
        <div className='step__login align-center'>
          <p className='align-center'>Seems like you are not logged in. You need to login to your account to place an order.</p>
          <a className='button__primary button button__large' onClick={this.props.login}> Log In </a>
        </div>
      );
    }
  }
  static getDerivedStateFromProps (props, state) {
    if (props.user !== state.user || props.status !== state.status) {
      return {
        user: props.user,
        status: props.status
      };
    }
  }

  updateStatus (status, editing) {
    this.setState({finalUser: this.state.user});
    this.props.setFinalOrder('user', this.state.user);
    this.props.updateStatus('userReview', status, editing);
  }

  render () {
    let classes = this.props.classList[this.state.status];
    console.log(this.state.status);
    return (
      <Fragment>
        <div className={classes}>
          <div data-sequence='1' className='step__header'>
            <h5>User Details</h5>
            <div className='step__header--actions'><a onClick={this.updateStatus.bind(this, 'pending', true)} className='button button__secondary'>Edit</a></div>
          </div>
          <div className='step__body'>
            {this.getUser()}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default UserDetails;
