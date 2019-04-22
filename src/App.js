import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import logo from './images/zed-white.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <img src={logo} alt=""/>
        <Typing speed={50}>
          <div className="typing">A digital agency for the new web</div>
          <Typing.Delay ms={1000} />
          <a className="typing-link" href = "mailto:markpereira17@gmail.com?subject = Zed&body = Hey there, would love to know more about zed!">
            Email us
          </a>
        </Typing>
      </div>
    );
  }
}

export default App;
