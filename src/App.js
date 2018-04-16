import React, { Component } from 'react';
import './App.css';
import Accordion from './Accordion';
import FlexibleCards from './FlexibleCards';
import HeaderBar from './HeaderBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">PATTRN <span>PARTY</span></h1>
          <h2>Nora Gully</h2>
        </header>
        <main>
          <Accordion />
          <FlexibleCards />
          <HeaderBar /> 
        </main>
      </div>
    );
  }
}

export default App;
