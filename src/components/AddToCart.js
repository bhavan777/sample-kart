import React, { Component, Fragment } from 'react';

class AddToCart extends Component {
  constructor (props) {
    super(props);
    this.state = {
      count: this.props.value || 0,
      minValue: this.props.minValue || 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    // this.RemoveItem = this.RemoveItem.bind(this);
  }

  increment () {
    this.setState({count: this.state.count + 1});
    this.props.clickHandler(this.props.id, 'inc', this.state.count + 1);
  }

  decrement () {
    if (this.state.count > this.state.minValue) {
      this.setState({count: this.state.count - 1});
      this.props.clickHandler(this.props.id, 'dec', this.state.count - 1);
    }
  }

  render () {
    return (
      <div className='button__wrap'>
        {(this.state.count === 0)
        ? (<a onClick={this.increment} className='button__primary button'>add to cart</a>)
        : (<Fragment><span className='addToCart'><span onClick={this.decrement}>-</span><span>{this.state.count}</span><span onClick={this.increment}>+</span></span></Fragment>)}
      </div>
    );
  }
}

export default AddToCart;
