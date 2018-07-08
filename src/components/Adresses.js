import React, {Component} from 'react';

class Address extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedAddress: this.props.selectedAddress
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }

  clickHandler (id) {
    console.log(id);
    this.setState({selectedAddress: id});
    this.props.setAddress(id);
  }

  nextStep (id) {
    alert(id);
  }

  render () {
    return (
      <ul className='addresses'>
        {
        this.props.user.addresses.map((address) => {
          let classNames = address.id === this.state.selectedAddress ? 'address selected' : 'address';
          return (
            <li key={address.id} onClick={this.clickHandler.bind(this, address.id)} className={classNames}>
              <a className='button address__continue button__primary' onClick={this.nextStep.bind(this, address.id)}>Deliver Here</a>
              <p><b>{address.recepientName}</b> -- {address.phone}</p>
              <p>{address.flat}, {address.street}, {address.area}, {address.city}, {address.state} - {address.pinCode} </p>
            </li>
          );
        })
        }
        {/* <li className='address'>
          <a className='button address__continue button__primary' onClick={this.nextStep}>ADD new address</a>
        </li> */}
      </ul>
    );
  }
}

export default Address;
