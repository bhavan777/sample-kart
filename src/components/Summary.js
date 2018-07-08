import React, { Component } from 'react';

class Summary extends Component {
  constructor (props) {
    super(props);
    this.state = {
      cart: this.props.data
    };
  }
  render () {
    return (
      <div className='summary'>
        <h3>pricing details</h3>
        <ul className='summary__products'>{
          this.state.cart.map((item) => (
            <li key={item.id}>
              <div className='summary__product'>
                <h6>{item.title}</h6>
                <p>{item.price}</p>
              </div>
            </li>
            ))
        }
        </ul>
      </div>
    );
  }
}

export default Summary;
