import React, { PureComponent, Fragment } from 'react';
import Order from '../components/Order';
import Summary from '../components/Summary';
import {Link} from 'react-router-dom';

class Cart extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      order: this.props.order
    };
  }

  static getDerivedStateFromProps (props, state) {
    if (props.user !== state.order.user) {
      return {
        order: {
          user: props.user,
          cart: props.cart
        }
      };
    }
  }

  render () {
    return (
      <div className='cart'>
        {this.state.order.cart.length > 0
        ? <Fragment>
          <div className='cart__steps'>
            <Order user={this.state.order.user} login={this.props.login} order={this.state.order} cart={this.state.cart} />
          </div>
          <div className='cart__summary'>
            <Summary data={this.state.order.cart} />
          </div>
        </Fragment>
        : <Fragment>
          <h3 className='align-center empty-cart'>
            <img alt='' src='empty-cart-icon.png' />
            <Link to='/'>Go Home</Link>
          </h3>
        </Fragment>
        }
      </div>
    );
  }
}

export default Cart;
