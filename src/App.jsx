import React, { Component } from 'react';
import logo from './logo.svg';
import icon1 from './icon1.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='container-home'>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Say hello to ReactJS</h1>
            <p>You will learn a Frontend framework from scratch, to become an Ninka Developer.
            </p>
            <button>Awesome!</button>
          </div>
          <div></div>
        </header>
        <container class='container-boxes'>
           <div>
            <img src={icon1} className="icon1" alt="icon1" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
           </div>
           <div>
            <img src="images/icon2.png" className="icon2" alt="icon2" />
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
           </div>
           <div><img src="images/icon3.png" className="icon3" alt="icon3" />
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the componants.</p>
          </div>
           <div><img src="images/icon4.png" className="icon4" alt="icon4" />
            <h2>JSX</h2>
            <p>Statically typed, designed to run on modern browsers.</p>
          </div>
        </container>
      </div>
    );
  }
}

export default App;
