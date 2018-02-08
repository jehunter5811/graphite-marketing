import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import pencil from './pencil.png';
import './App.css';

class Test extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mobileToggle: "hide"
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    if(this.state.mobileToggle == "") {
      this.setState({mobileToggle: "hide"})
    } else {
      this.setState({mobileToggle: ""})
    }
  }

  render() {
    let mobileToggle = this.mobileToggle;
    return (
      <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">Logo</a>
          <a onClick={this.toggle} className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
          </ul>
          <div className={mobileToggle}>
          <ul className="" >
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
          </ul>
          </div>
        </div>
      </nav>
      </div>
    );
  }
}

export default Test;
