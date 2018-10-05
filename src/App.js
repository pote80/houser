import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import Header from './Component/Header/Header'


class App extends Component {
  render() {
    return (
      <div>
        <div> <Header /> </div>
        <div> {routes} </div>
      </div>
    );
  }
}

export default App;
