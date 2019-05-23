import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import CompoundInterest from './containers/CompoundInterest';

class App extends Component {
  render () {
    document.title = '複利計算機, Compute compound interest';

    return (
      <div className="App">
        <CompoundInterest />
      </div>
    );
  }
}

export default App;
