import React, { Component } from 'react';
import Header from './components/Header';
import Order from './components/Order';
import data from './data.js';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import OrderDetails from './components/OrderDetails';

class App extends Component {
  constructor (props) {
    super(props);
    let amountDue = 0;
    data.order.cart.map((item) => {
      amountDue += (item.count * item.price);
      return item;
    });
    this.state = {
      loggedIn: true,
      order: {
        user: data.user,
        cart: data.order.cart,
        amountDue: amountDue
      }
    };
    this.toggleView = this.toggleView.bind(this);
    this.updateCart = this.updateCart.bind(this);
    this.setFinalOrder = this.setFinalOrder.bind(this);
  }

  toggleView () {
    let user = this.state.loggedIn ? {} : data.user;
    this.setState({loggedIn: !this.state.loggedIn, order: {user: user, cart: this.state.order.cart}});
  }

  updateCart (id, count) {
    let newCart = [...this.state.order.cart];
    newCart.map((item) => {
      if (item.id === id) {
        item.count = count;
      }
      return item;
    });
    console.log(newCart);

    let amountDue = 0;
    newCart.map((item) => {
      amountDue += (item.count * item.price);
      return item;
    });

    let newState = {
      ...this.state,
      order: {
        ...this.state.order,
        cart: newCart.filter(x => x.count > 0),
        amountDue: amountDue
      }
    };
    this.setState(newState);
  }

  setFinalOrder (finalOrder) {
    console.log('final Order', finalOrder);
    this.setState({finalOrder: finalOrder});
  }

  render () {
    return (
      <BrowserRouter>
      <div className='App'>
        <Header toggleView={this.toggleView} loggedIn={this.state.loggedIn} />
        <Switch>
          <Route path='/' exact>
            <div className='container'>
              <Order setFinalOrder={this.setFinalOrder} updateCart={this.updateCart} order={this.state.order} login={this.toggleView} loginStatus={this.state.loggedIn} user={this.state.user} />
            </div>
          </Route>
          <Route path='/orders' exact>
            <div className='container'>
              <OrderDetails order={this.state.finalOrder} />
            </div>
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
