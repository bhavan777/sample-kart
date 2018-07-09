import React, { Component, Fragment } from 'react';

class AddToCart extends Component {
  constructor (props) {
    super(props);
    this.state = {
      count: this.props.value,
      minValue: this.props.minValue
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment () {
    this.setState({count: this.state.count + 1});
    this.props.clickHandler(this.props.id, this.state.count + 1);
  }

  decrement () {
    this.setState({count: this.state.count - 1});
    this.props.clickHandler(this.props.id, this.state.count - 1);
  }

  static getDerivedStateFromProps (props, state) {
    if (props.value !== state.count) {
      return {
        count: props.count
      };
    }
    return null;
  }

  render () {
    return (
      <div className='button__wrap'>
        <Fragment><span className='addToCart'><span className={this.state.minValue === this.state.count ? 'minus disabled' : 'minus'} onClick={this.decrement}>-</span><span>{this.state.count}</span><span onClick={this.increment} className='plus'>+</span></span></Fragment>
      </div>
    );
  }
}

export default AddToCart;
