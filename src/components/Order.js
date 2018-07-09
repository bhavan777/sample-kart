import React, { Component, Fragment } from 'react';
import UserDetails from './UserDetails';
import DeliveryDetails from './DeliveryDetails';
import OrderSummary from './OrderSummary';
import Payment from './Payment';

class Order extends Component {
  constructor (props) {
    super(props);
    this.state = {
      order: this.props.order,
      loggedIn: this.props.loggedIn,
      status: {
        'userReview': 'active',
        'deliveryReview': 'pending',
        'cartReview': 'pending',
        'paymentReview': 'pending'
      },
      finalOrder: {
        user: {},
        delivery: [],
        items: [],
        payment: {

        }
      }
    };
    this.updateCart = this.updateCart.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.logInHandle = this.logInHandle.bind(this);
    this.activateNextSection = this.activateNextSection.bind(this);
    this.setFinalOrder = this.setFinalOrder.bind(this);
  }

  static getDerivedStateFromProps (props, state) {
    if (props.order.cart !== state.order.cart || props.order.user !== state.order.user || props.order.amountDue !== state.order.amountDue || props.loginStatus !== state.loggedIn) {
      let status = props.loginStatus ? state.status : {
        'userReview': 'active',
        'deliveryReview': 'pending',
        'cartReview': 'pending',
        'paymentReview': 'pending'
      };
      let amountDue = 0;
      props.order.cart.map((item) => {
        amountDue += (item.count * item.price);
        return item;
      });
      props.order.amountDue = amountDue;
      return {
        order: props.order,
        loggedIn: props.loginStatus,
        status: status
      };
    }
    return null;
  }

  logInHandle () {
    this.props.login();
  }

  updateCart (id, count) {
    this.props.updateCart(id, count);
  }

  updateStatus (section, status, editing) {
    if (editing) {
      let newStatus = this.state.status;
      let keys = Object.keys(newStatus);
      let currKey = keys.indexOf(section);
      keys.map((k, ind) => {
        if (newStatus[k] !== 'done' || ind > currKey) {
          newStatus[k] = 'pending';
        }
        return k;
      });
      newStatus[section] = 'active';
      this.setState({status: newStatus});
    } else {
      if (status === 'done') {
        let newStatus = this.state.status;
        newStatus[section] = status;
        this.setState({status: newStatus});
        this.activateNextSection(section, status);
      }
    }
  }

  activateNextSection (section, currstatus) {
    let newStatus = this.state.status;
    let keys = Object.keys(newStatus);
    let _nextKey = keys.indexOf(section) + 1;
    let _nextSection = keys[_nextKey];
    keys.map((k) => {
      if (newStatus[k] !== 'done') {
        newStatus[k] = 'pending';
      }
      return k;
    });
    newStatus[_nextSection] = 'active';
    newStatus[section] = currstatus;
    this.setState({status: newStatus});
  }

  setFinalOrder (section, obj) {
    if (section === 'user') {
      console.log('user', obj);
      let finalOrder = this.state.finalOrder;
      finalOrder.user = obj;
      this.setState({finalOrder: finalOrder});
    } else if (section === 'delivery') {
      console.log('delivery', obj);
      let finalOrder = this.state.finalOrder;
      finalOrder.delivery = obj;
      this.setState({finalOrder: finalOrder});
    } else if (section === 'cart') {
      console.log('cart', obj);
      let finalOrder = this.state.finalOrder;
      finalOrder.items = obj;
      this.setState({finalOrder: finalOrder});
    } else {
      console.log('payment', obj);
      let finalOrder = this.state.finalOrder;
      finalOrder.payment = obj;
      this.setState({finalOrder: finalOrder});
      this.props.setFinalOrder(this.state.finalOrder);
    }
  }

  render () {
    const classList = {
      'done': 'step done',
      'pending': 'step',
      'active': 'step active'
    };
    console.log(this.state.order.cart);
    return (
      <Fragment>
        <div className='cart__steps'>
          <UserDetails setFinalOrder={this.setFinalOrder} classList={classList} updateStatus={this.updateStatus} login={this.logInHandle} user={this.state.order.user} status={this.state.status['userReview']} />
          <DeliveryDetails setFinalOrder={this.setFinalOrder} classList={classList} updateStatus={this.updateStatus} login={this.logInHandle} user={this.state.order.user} status={this.state.status['deliveryReview']} />
          <OrderSummary setFinalOrder={this.setFinalOrder} classList={classList} updateCart={this.updateCart} updateStatus={this.updateStatus} addTocartHandler={this.props.addToCartHandler} cart={this.state.order.cart} status={this.state.status['cartReview']} />
          <Payment setFinalOrder={this.setFinalOrder} classList={classList} updateStatus={this.updateStatus} status={this.state.status['paymentReview']} />
        </div>
        <div className='cart__summary'>
          <div className='summary'>
            <h3>Price Details</h3>
            {this.state.loggedIn
            ? (<Fragment>
              <div className='body'>
                <p className='key'> Price ({this.state.order.cart.length} {this.state.order.cart.length > 1 ? 'items' : 'item'}):</p><p className='val'>{this.state.order.amountDue}</p>
                <p className='key'> Delivery Charges :</p><p className='val green '>FREE</p>
              </div>
              <div className='body'>
                <p className='key'> Amount Payable :</p><p className='val'>{this.state.order.amountDue}</p>
              </div>
            </Fragment>
            )
            : (<div className='body align-center'>
              <p className='align-center'>Seems like you are not logged in. You need to login to your account to place an order.</p><br />
              <a className='button__primary button button__large' onClick={this.props.login}> Log In </a>
            </div>)}

          </div>
        </div>

      </Fragment>
    );
  }
}

export default Order;
