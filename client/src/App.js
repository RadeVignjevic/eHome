import React, { Component } from 'react';
import './App.css';
import TitleFlex from './components/TitleFlex';
import OfferFlex from './components/OfferFlex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleFlex/>
        <OfferFlex/>
      </div>
    );
  }
}

export default App;
