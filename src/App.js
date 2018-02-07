import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import About from './About';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Footer />
        </div>
      </BrowserRouter>


      </div>
    );

  }
}

export default App;
