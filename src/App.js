import React, { Component } from 'react';
import './App.css';
import router from './router.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header-main">
        <Header />
        </div>
        {router}
        <div className="footer-main">
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;

