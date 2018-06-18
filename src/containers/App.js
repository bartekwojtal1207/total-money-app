import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Header from '../components/Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                    <Header/>
                  </div>
              </div>
          </div>
      </div>

    );
  }
}

export default App;
