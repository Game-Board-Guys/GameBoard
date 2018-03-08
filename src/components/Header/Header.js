import React, { Component } from 'react';
import './Header.css';
import axios from 'axios';
// import Logout from './../Logout/Logout.js';




class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: ''
        }
        this.whichHeader = this.whichHeader.bind(this)
    }
    componentDidMount(){
        axios.get('/auth/me').then((res) => {
            // console.log(res.data)
            let user = res.data.auth_id;
            this.setState({
                user: user
            }) 
        })
    }
    

    //uncomment this method and run it in the JSX in place of the nav bar once we have the ability to check if a user is logged in or just playing as a guest

    whichHeader() {
        if (this.state.user) {
            return (
                <nav className="main-nav-container">
                    <p onClick={this.props.showGameMenu}>GAMES</p>
                    <a href="/leaderboard"><p>LEADERBOARD</p></a>
                    <a href="/profile"><p>PROFILE</p></a>
                    <a href={process.env.REACT_APP_LOGIN} className="logout-link"><p>LOGOUT</p></a>
                </nav>
        )
        } else if (!this.state.user){
            return (
                <nav className="main-nav-container">
                    <p onClick={this.props.showGameMenu}>GAMES</p>
                    <a href="/leaderboard"><p>LEADERBOARD</p></a>
                    <a href={process.env.REACT_APP_LOGIN} className="login-link"><p>LOGIN/SIGN UP</p></a>
                </nav>
            )
        }
    }

    render() {
        console.log("user in header", this.state.user)
        return (
            <div className="main-header-container">
                <a href="/landing"><div className="header-logo">P  E  A  X</div></a>
                <div className="nav-hamburger-container">
                    {/* <nav className="main-nav-container">
                        <p onClick={this.props.showGameMenu}>GAMES</p>
                        <a href="/leaderboard"><p>LEADERBOARD</p></a>
                        <a href="/profile"><p>PROFILE</p></a>
                        <a href={process.env.REACT_APP_LOGIN} className="login-link"><p>LOGIN/SIGN UP</p></a>
                    </nav> */}
                    {this.whichHeader()}
                    <div className="hamburger_container" onClick={this.props.showSlideMenu}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Menu%2C_Web_Fundamentals_%28White%29.svg/2000px-Menu%2C_Web_Fundamentals_%28White%29.svg.png" alt=""></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;