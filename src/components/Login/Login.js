import React, { Component } from 'react';
import './Login.css';


class Login extends Component {


    render(){
        return (
            <div className="main-login-container">
                <h1 className="login-logo"><p>P</p><p>E</p><p>A</p><p>X</p></h1>
                <div className="login-buttons">
                <a href={process.env.REACT_APP_LOGIN}>
                <button className="login-button">LOGIN</button>
                </a>
                <a href="/landing"><button className="guest-button">PLAY AS GUEST</button></a>
                </div>

            </div>
        )
    }
}

export default Login;