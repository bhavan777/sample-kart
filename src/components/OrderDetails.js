import React, { Component } from 'react';

class OrderDetails extends Component {
  render () {
    let amountPaid = 0;
    let pricesArr = [];
    this.props.order.items.map((x) => {
      amountPaid += x.count * x.price;
      pricesArr.push(x.count * x.price);
    });
    return (
    <div className='yourOrder'>
      <h2>Order Details</h2>
      <div className='card user'>
        <h4>Contact Details</h4>
        <p>{this.props.order.user.firstName} {this.props.order.user.lastName},</p>
        <p>{this.props.order.user.email},</p>
        <p>{this.props.order.user.phone}</p>
      </div>
      <div className='card address'>
        <h4>Delivery Address</h4>
        <p>{this.props.order.delivery[0].recepientName},</p>
        <p>{this.props.order.delivery[0].flat}, {this.props.order.delivery[0].street}, {this.props.order.delivery[0].area}</p>
        <p>{this.props.order.delivery[0].city} {this.props.order.delivery[0].pinCode}</p>
      </div>
      <div className='card address'>
        <h4>Payment Details</h4>
        <p>Payment Type: <b>{this.props.order.payment.paymentType}</b>,</p>
        <p>Reference Id: <b>{this.props.order.payment.refId}</b></p>
        <p>Amount Paid: <b>₹{amountPaid}</b></p>
      </div>
      <div className='card big-card'>
        <h4>Ordered Products</h4>
        <div className='yourOrder__products'>
        {
          this.props.order.items.map((item) => (
            <div key={item.id} className='yourOrder__product'>
              <img src={item.img} alt='' />
              <h4>{item.title} <small><b>({item.count}{item.count > 1 ? 'units' : 'unit'})</b></small></h4>
              <p> ₹{item.price} x {item.count} = ₹{item.count * item.price} </p>
            </div>
          ))
        }
        </div>
        <p className='align-center'>Final Price: <b>{pricesArr.join(' + ')} = {amountPaid}</b></p>
      </div>
    </div>);
  }
}

export default OrderDetails;
