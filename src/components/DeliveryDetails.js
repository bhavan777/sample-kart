import React, { PureComponent, Fragment } from 'react';
import Adresses from './Adresses';

class DeliveryDetails extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      user: this.props.user,
      status: this.props.status,
      selectedAddress: this.props.user.addresses[0].id
    };
    this.getDeliveryAddresses = this.getDeliveryAddresses.bind(this);
    this.setAddress = this.setAddress.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  getDeliveryAddresses () {
    return (<Adresses user={this.props.user} updateStatus={this.updateStatus.bind(this, 'done', false)} setAddress={this.setAddress} selectedAddress={this.state.selectedAddress} />);
  }

  setAddress (id) {
    this.setState({selectedAddress: id});
  }

  static getDerivedStateFromProps (props, state) {
    if (props.status !== state.status) {
      return {
        status: props.status
      };
    }
  }

  updateStatus (status, editing) {
    let selectedAddress = this.state.user.addresses.filter((addr) => addr.id === this.state.selectedAddress);
    console.log(selectedAddress);
    this.props.setFinalOrder('delivery', selectedAddress);
    this.props.updateStatus('deliveryReview', status, editing);
  }

  render () {
    let classes = this.props.classList[this.state.status];
    return (
      <Fragment>
        <div className={classes}>
          <div data-sequence='2' className='step__header'>
            <h5>Delivery and Billing</h5>
            <div className='step__header--actions'><a onClick={this.updateStatus.bind(this, 'pending', true)} className='button button__secondary'>Edit</a></div>
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
