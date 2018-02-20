import React, { Component } from 'react';
import './Login.css';


class Login extends Component {


    render(){
        return (
            <div className="devinbowen">Login Component
                <a href={process.env.REACT_APP_LOGIN}>
                <button>LOGIN</button>
                </a>

            </div>
        )
    }
}

export default Login;