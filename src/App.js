import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import './App.css';

class App extends Component {

  render() {
    var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

var date = new Date();
var year = date.getFullYear();


    return (
      <div className="App">
        <Header />
          <Main />
          <footer className="page-footer">
            <div className="container">
              <div className="row">
                <div className="col l6 s12">
                  <h5 className="white-text">Graphite</h5>
                  <p className="grey-text text-lighten-4">Own your documents.</p>
                </div>
                <div className="col l4 offset-l2 s12">

                  <ul className="right">
                    <li><a className="grey-text text-lighten-3" href="http://app.graphitedocs.com">Sign In</a></li>
                    <li><a className="grey-text text-lighten-3" href="#features">Features</a></li>
                    <li><a className="grey-text text-lighten-3" href="http://blockstack.org">Blockstack</a></li>
                    <li><a className="grey-text text-lighten-3" href="mailto:contact@graphitedocs.com">Contact</a></li>
                    <li><a className="grey-text text-lighten-3" href="https://twitter.com/graphitedocs">Twitter</a></li>
                  </ul>
                </div>
              </div>
            </div>
          <div className="footer-copyright">
            <div className="container">
            © {year} Graphite
            </div>
          </div>
        </footer>
      </div>
    );

  }
}

export default App;
