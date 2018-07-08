import React, { PureComponent, Fragment } from 'react';
import AddToCart from './AddToCart';

class OrderSummary extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      cart: this.props.cart
    };
    this.orderClickHandler = this.orderClickHandler.bind(this);
    this.removethisItem = this.removethisItem.bind(this);
  }

  orderClickHandler (id, type, count) {
    let newState = this.state.cart.map((item) => {
      if (item.id === id) {
        item.count = count;
      }
      return item;
    });
    console.log(newState);
    this.setState({cart: newState});
  }

  removethisItem (id) {
    let idx = -1;
    let newCart = [...this.state.cart];
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === id) {
        idx = i;
      }
    }

    let cartToUpdate = [...newCart.slice(0, idx), ...newCart.slice(idx + 1)];
    this.setState({cart: cartToUpdate});
  }

  render () {
    return (
      <Fragment>
        <div className='step'>
          <div className='step__header'>
            <h5>Order Summary</h5>
          </div>
          <div className='step__body order'>
            {
            this.state.cart.map((item) => (
              <div key={item.id}>
                <div className='order__item'>
                  <img className='order__dp' src={item.img} />
                  <div className='order__details'>
                    <h4>{item.title}</h4>
                    <p>{item.price} x {item.count} units</p>
                    <AddToCart minValue={1} clickHandler={this.orderClickHandler} value={item.count} id={item.id} />
                    <a onClick={this.removethisItem.bind(this, item.id)} className='button button__secondary'>Remove</a>
                  </div>
                </div>
              </div>
              ))
            }
          </div>
          <div className='order__action'>
            <a className='button button__primary button__block'>Continue</a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default OrderSummary;
