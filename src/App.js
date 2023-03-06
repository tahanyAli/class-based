import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
// import React from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: 'Ahmad'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           {this.state.name}
          </p>
          <button onClick={() => {
            this.setState({name: 'Andrei'})
          }}>Update</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


export default App;
