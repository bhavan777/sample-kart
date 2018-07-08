import React, { Component, Fragment } from 'react';
import UserDetails from './UserDetails';
import DeliveryDetails from './DeliveryDetails';
import OrderSummary from './OrderSummary';

class Order extends Component {
  constructor (props) {
    super(props);
    this.state = {
      order: {
        user: this.props.user,
        cart: this.props.cart
      }
    };
    this.updateCart = this.updateCart.bind(this);
    // this.removeItem = this.removeItem.bind(this);
  }

  static getDerivedStateFromProps (props, state) {
    if (props.order.user !== state.user || props.order.cart !== state.cart) {
      return {
        order: {
          user: props.order.user,
          cart: props.order.cart
        }
      };
    }
  }

  updateCart (id, updatedcount) {
    let newCart = this.state.order.cart.map((item) => {
      if (id === item.id) {
        item.count = updatedcount;
      }
      return item;
    });
    console.log(newCart);
    this.setState({order: {user: this.state.order.user, cart: newCart}});
  }

  render () {
    return (
      <Fragment>
        <UserDetails login={this.props.login} user={this.state.order.user} />
        <DeliveryDetails login={this.props.login} user={this.state.order.user} />
        <OrderSummary updateCart={this.updateCart} addTocartHandler={this.props.addToCartHandler} cart={this.state.order.cart} />
      </Fragment>
    );
  }
}

export default Order;
