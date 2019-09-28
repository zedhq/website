import React, { Component } from 'react';
import Typing from 'react-typing-animation';
import logo from './images/zed.svg';
import zedText from './images/zed-text.svg';
import alice from './images/alice.svg';
import sigma from './images/sigma-prime.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="main-container">
        <img src={logo} className="main-image"/>
        <div className="sub-container">
          <div className="grid">
            <div className="cell">
              <img src={alice} className="responsive-image"/>
            </div>
            <div className="cell">
              <img src={sigma} className="responsive-image"/>
            </div>
          </div>
        </div>
        <img src={zedText} alt="" className="footer-image"/>
      </div>
    );
  }
};

