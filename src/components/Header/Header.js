import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div className="main-header-container">
                <Link to="/landing"><div className="header-logo">P  E  A  X</div></Link>
                <nav className="main-nav-container">
                    <Link to="/lobby"><p>LOBBY</p></Link>
                    <Link to="/leaderboard"><p>LEADERBOARD</p></Link>
                    <Link to="/profile"><p>PROFILE</p></Link>
                </nav>
            </div>
        )
    }
}

export default Header;