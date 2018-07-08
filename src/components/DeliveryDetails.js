import React, { PureComponent, Fragment } from 'react';
import Adresses from './Adresses';

class DeliveryDetails extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      user: this.props.user,
      selectedAddress: this.props.user.addresses[0].id
    };
    this.getDeliveryAddresses = this.getDeliveryAddresses.bind(this);
    this.setAddress = this.setAddress.bind(this);
  }

  getDeliveryAddresses () {
    return (<Adresses user={this.props.user} setAddress={this.setAddress} selectedAddress={this.state.selectedAddress} />);
  }

  setAddress (id) {
    this.setState({selectedAddress: id});
  }

  // static getDerivedStateFromProps (props, state) {
  //   if (props.user !== state.user) {
  //     return {
  //       user: props.user
  //     };
  //   }
  // }

  render () {
    return (
      <Fragment>
        <div className='step'>
          <div className='step__header'>
            <h5>Delivery and Billing</h5>
          </div>
          <div className='step__body'>
            {this.getDeliveryAddresses()}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default DeliveryDetails;
