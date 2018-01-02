import React, { Component } from 'react';
import pencil from './pencil.png';
import './App.css';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Graphite.<img className="pencil" src={pencil} alt="pencil" /></a>
          <ul id="nav-mobile" className="right">
            <li><a href="#">Sign in</a></li>
            <li><a href="#features">Features</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
