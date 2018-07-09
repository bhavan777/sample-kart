import React, { PureComponent, Fragment } from 'react';
import Order from '../components/Order';
import {Link} from 'react-router-dom';

class Cart extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      order: this.props.order
    };
  }

  getderivedStateFromProps (props, state) {
    console.log(props.user !== state.order.user);

    if (props.user !== state.order.user) {
      return {
        order: props.order
      };
    }
    return null;
  }

  render () {
    return (
      <div className='cart'>
        {this.state.order.cart.length > 0
        ? <Order login={this.props.login} order={this.state.order} />
        : <Fragment>
          <h3 className='align-center empty-cart'>
            <img alt='' src='empty-cart-icon.png' />
          </h3>
        </Fragment>
        }
      </div>
    );
  }
}

export default Cart;
