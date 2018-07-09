import React, { PureComponent, Fragment } from 'react';
import AddToCart from './AddToCart';

class OrderSummary extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      cart: this.props.cart,
      status: this.props.status
    };
    this.orderClickHandler = this.orderClickHandler.bind(this);
    this.removethisItem = this.removethisItem.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  orderClickHandler (id, count) {
    this.props.updateCart(id, count);
  }

  static getDerivedStateFromProps (props, state) {
    if (props.cart !== state.cart || props.status !== state.status) {
      return {
        cart: props.cart,
        status: props.status
      };
    }
    return null;
  }

  removethisItem (id) {
    this.props.updateCart(id, 0);
  }

  updateStatus (status, editing) {
    this.props.setFinalOrder('cart', this.state.cart);
    this.props.updateStatus('cartReview', status, editing);
  }

  render () {
    let classes = this.props.classList[this.state.status];
    return (
      <Fragment>
        <div className={classes}>
          <div data-sequence='3' className='step__header'>
            <h5>Order Summary</h5>
            <div className='step__header--actions'><a onClick={this.updateStatus.bind(this, 'pending', true)} className='button button__secondary'>Edit</a></div>
          </div>
          <div className='step__body order'>
            {
            this.state.cart.map((item) => (
              <div key={item.id}>
                <div className='order__item'>
                  <img className='order__dp' alt='' src={item.img} />
                  <div className='order__details'>
                    <h4>{item.title}</h4>
                    <p>{item.price} x {item.count} units</p>
                    <AddToCart minValue={1} clickHandler={this.orderClickHandler} value={item.count} id={item.id} />
                    <a onClick={this.removethisItem.bind(this, item.id)} className='button button__secondary'>Remove</a>
                  </div>
                  <div className='order__pricing'>
                    <p>{item.price * item.count}</p>
                  </div>
                </div>
              </div>
              ))
            }
          </div>
          <div className='step__body align-center'>
            <a onClick={this.updateStatus.bind(this, 'done', false)} className='button button__primary button__large'>Proceed to Payment</a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default OrderSummary;
