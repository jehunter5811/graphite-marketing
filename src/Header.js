import React, { Component } from 'react';
import pencil from './pencil.png';
import './App.css';

class Header extends Component {
  componentDidMount() {
    //TODO need to make header responsive
    // this.$el = $(this.el);
    // this.$el(".button-collapse").sideNav();
  }

  render() {
    return (
      <nav>
      <div className="container">
          <ul id="dropdown1" className="dropdown-content">
            <li><a href="#!">Personal</a></li>
            <li><a href="#!">Journalism</a></li>
            <li><a href="#!">Creative</a></li>
            <li><a href="#!">Business</a></li>
          </ul>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Graphite.<img className="pencil" src={pencil} alt="pencil" /></a>
              <a ref={el => this.el = el} href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right">
              <li><a href="/about">About</a></li>
              <li><a href="#features">Features</a></li>
              <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Uses<i className="material-icons drop right">arrow_drop_down</i></a></li>
              <li><a href="http://app.graphitedocs.com" target="_blank">Sign in</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
