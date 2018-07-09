import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Payment extends Component {
  constructor (props) {
    super(props);
    this.state = {
      status: this.props.status
    };
    this.placeOrder = this.placeOrder.bind(this);
  }
  static getDerivedStateFromProps (props, state) {
    if (props.status !== state.status) {
      return {
        status: props.status
      };
    }
  }

  placeOrder () {
    this.props.setFinalOrder('payment', {'paymentType': 'online Bankning HDFC Bank', refId: '89898797889797asdaf'});
  }

  render () {
    let classes = this.props.classList[this.state.status];
    return (
      <div className={classes}>
        <div className='step__header' data-sequence='4'>
          <h5>Payment</h5>
        </div>
        <div className='step__body order'>
          <p className='align-center'> Assuming a Payment gateway is implemented and the order can be placed with the action below</p>
          <div className='order__action'>
          <Link to='/orders'>
            <a onClick={this.placeOrder} className='button button__primary button__block'>Pay with some Method</a>
          </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Payment;
