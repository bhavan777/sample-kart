import React, { Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render () {
    return (
      <header className='App-header'>
        <div className='container'>
          <Link to='/'><h1>sampleKart</h1></Link>
          <div className='user-switch'>
            <input type='checkbox' id='login_status' checked={this.props.loggedIn} onChange={this.props.toggleView} />
            <label htmlFor='login_status'>
              {this.props.loggedIn ? 'User Logged In ' : 'User Logged Out'}
            </label>
          </div>
          <Link to='/cart'>
            <span className='fas fa-shopping-cart'>
              {this.props.itemsInCart > 0 && <span className='cart-count'>{this.props.itemsInCart}</span>}
            </span>
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
