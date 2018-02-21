import React, { Component } from 'react';
import './App.css';
import router from './router.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Dropdown from './components/Dropdown/Dropdown.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSlideMenu: false
    }
    this.showMenu = this.showMenu.bind(this);
  }

  showMenu() {
    // console.log('hello Blair')
    this.setState({
      showSlideMenu: !this.state.showSlideMenu
    })
  }

  whichMenu() {
    if (this.state.showSlideMenu === false) {
      // console.log('showSlideMenu is false!')
      return (
        <div className="header">
        <Header showSlideMenu={this.showMenu} />
        </div>
      )
    } else if (this.state.showSlideMenu === true) {
      // console.log('showSlideMenu is true!')
      return (
        <div className="header">
        <Header showSlideMenu={this.showMenu} />
        <Dropdown showMenu={this.showMenu}/>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <div className="header-main">
          <Header />
        </div>
        {this.whichMenu()}
        {router(this.state.showSlideMenu, this.showMenu)}
        <div className="footer-main">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

