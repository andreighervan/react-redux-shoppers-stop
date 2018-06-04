import React, { Component } from 'react';
import '../App.css';
import Grocery from "./Grocery";
import ShoppingBag from "./ShoppingBag";
import Stats from "./Stats";
import groceryItemsList from '../data/groceryItems.json';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Grocery grocery={groceryItemsList}/>
      <ShoppingBag shoppingBag={groceryItemsList}/>
          <Stats/>
      </div>
    );
  }
}

export default App;
