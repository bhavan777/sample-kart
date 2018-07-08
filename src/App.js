import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import Header from './components/Header';
import Cart from './containers/Cart';
import data from './data.js';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      products: data.products,
      loggedIn: true,
      user: data.user,
      cart: [],
      order: {
        user: data.user,
        cart: []
      }
    };
    this.addToCart = this.addToCart.bind(this);
    this.toggleView = this.toggleView.bind(this);
    // this.updateCart = this.updateCart.bind(this);
  }

  addToCart (id, act) {
    let prod = this.state.products.find(item => item.id === id);
    let newCart = [...this.state.cart];
    prod['count'] = prod['count'] || 1;
    let itemInCart = this.state.cart.find(item => item.id === id);
    if (itemInCart) {
      // incase product is already in the cart, but the change is only in the number of the existing product in the cart
      var removeItem = false;
      newCart = this.state.cart.map((item) => {
        if (item.id === id) {
          item['count'] += act === 'inc' ? 1 : -1;
        }
        if (item['count'] === 0) {
          removeItem = true;
        }
        return item;
      });
      if (removeItem) {
        // remove the product if the count of the product is 0 in the cart
        newCart = newCart.filter(item => item.id !== id);
      }
    } else {
      // when the product being added is not in the cart already, then push the product into the cart which will increase the product count in the cart as well
      newCart.push(prod);
    }
    let orderToUpdate = {...this.state.order};
    orderToUpdate.cart = newCart;

    this.setState({cart: newCart, order: orderToUpdate});
  }

  toggleView () {
    let user = this.state.loggedIn ? {} : data.user;
    this.setState({loggedIn: !this.state.loggedIn, user: user});
  }

  // updateCart (id) {
  //   let indToRemove = -1;
  //   let newCart = [...this.state.cart];
  //   for (let i = 0; i < newCart.length; i++) {
  //     if (newCart[i].id === id) {
  //       indToRemove = i;
  //     }
  //   }

  //   let cartToUpdate = [...newCart.slice(0, indToRemove), ...newCart.slice(indToRemove + 1)];
  //   this.setState({cart: cartToUpdate});
  // }

  render () {
    return (
      <BrowserRouter>
        <div className='App'>
          <Header toggleView={this.toggleView} loggedIn={this.state.loggedIn} itemsInCart={this.state.cart.length} />
          <div className='container'>
            <Switch>
              <Route path='/' exact>
                <Home data={this.state.products} addToCart={this.addToCart} />
              </Route>
              <Route path='/cart' exact>
                <Cart updateCart={this.updateCart} order={this.state.order} login={this.toggleView} user={this.state.user} />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
