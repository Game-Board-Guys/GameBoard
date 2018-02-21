import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div className="main-header-container">
                <Link to="/"><div className="header-logo">P  E  A  X</div></Link>
                <div className="nav-hamburger-container">
                    <nav className="main-nav-container">
                        <Link to="/lobby"><p>LOBBY</p></Link>
                        <Link to="/leaderboard"><p>LEADERBOARD</p></Link>
                        <Link to="/profile"><p>PROFILE</p></Link>
                    </nav>
                    <div className="hamburger_container" onClick={this.props.showSlideMenu}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Menu%2C_Web_Fundamentals_%28White%29.svg/2000px-Menu%2C_Web_Fundamentals_%28White%29.svg.png" alt=""></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;