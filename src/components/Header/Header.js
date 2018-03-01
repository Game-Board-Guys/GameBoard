import React, { Component } from 'react';
import './Header.css';
// import Logout from './../Logout/Logout.js';




class Header extends Component {

    //uncomment this method and run it in the JSX in place of the nav bar once we have the ability to check if a user is logged in or just playing as a guest

    // whichHeader() {
    //     if (user.id) {
    //         return (
    //             <nav className="main-nav-container">
    //                 <a href="/leaderboard"><p>LEADERBOARD</p></a>
    //                 <a href="/profile"><p>PROFILE</p></a>
    //                 <a href={process.env.REACT_APP_LOGIN} className="logout-link">LOGOUT</a>
    //             </nav>
    //     )
    //     } else if (!user.id){
    //         return (
    //             <nav className="main-nav-container">
    //                 <a href="/leaderboard"><p>LEADERBOARD</p></a>
    //                 <a href={process.env.REACT_APP_LOGIN} className="login-link">LOGIN/SIGN UP</a>
    //             </nav>
    //         )
    //     }
    // }

    render() {
        return (
            <div className="main-header-container">
                <a href="/landing"><div className="header-logo">P  E  A  X</div></a>
                <div className="nav-hamburger-container">
                    <nav className="main-nav-container">
                        <p onClick={this.props.showGameMenu}>GAMES</p>
                        <a href="/leaderboard"><p>LEADERBOARD</p></a>
                        <a href="/profile"><p>PROFILE</p></a>
                        <a href={process.env.REACT_APP_LOGIN} className="login-link"><p>LOGIN/SIGN UP</p></a>
                        {/* <Logout /> */}
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