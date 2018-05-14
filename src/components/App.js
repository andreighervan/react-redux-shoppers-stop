import React, { Component } from 'react';
import '../App.css';
import Grocery from "./Grocery";
import ShoppingBag from "./ShoppingBag";
import Stats from "./Stats";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Grocery/>
      <ShoppingBag/>
          <Stats/>
      </div>
    );
  }
}

export default App;
