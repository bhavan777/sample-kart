import React, { Component} from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {
  render () {
    return (
      <header>
        <div className='container'>
          <Link to='/'><h1>sampleKart</h1></Link>
          <a onClick={this.props.toggleView} className='button button__large button__primary'>{this.props.loggedIn ? 'Logout ' : 'Login'}</a>
        </div>
      </header>
    );
  }
}

export default Header;
