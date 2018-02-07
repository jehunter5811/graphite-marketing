import React, { Component } from 'react';
import pencil from './pencil.png';
import './App.css';

class About extends Component {

  render() {
    return (
      <div className="white about-section">
        <div className="container">
          <h1 className="flow-text">About Graphite</h1>
          <p className="flow-text">Graphite provides a decentralized and encrypted alternative to G-Suite and Microsoft Office. As the first blockchain-based software to enable
          truly private and user-owned personal and business applications for creating, sharing, and communicating, Graphite empowers people to own their own data.</p>
          <div className="background-image-about">
          </div>
          <div className="row">
            <div className="col s12 m4 center-align">
              <h5>Connect anywhere.</h5>
            </div>
            <div className="col s12 m4 center-align">
              <h5>Share anytime.</h5>
            </div>
            <div className="col s12 m4 center-align">
              <h5>Privacy always.</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
