import React, { Component } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';


class Dropdown extends Component {

    render() {
        return (
            <div className={this.props.showSlideMenu ? "main_dropdown_container slidedown" : "main_dropdown_container"}>
                <div className="slidedown_header">
                    <Link onClick={this.props.closeMenu} to='/'>
                        <div className="slidedown_logo_wrapper">
                            P E A X
                        </div>
                    </Link>
                    
                    <div className="close_x" onClick={this.props.closeMenu}>X</div>
                </div>
                <nav>
                    <div onClick={this.props.closeMenu}><Link to="/lobby">LOBBY</Link></div>
                    <div onClick={this.props.closeMenu}><Link to="/leaderboard">LEADERBOARD</Link></div>
                    <div onClick={this.props.closeMenu}><Link to="/profile">PROFILE</Link></div>
                </nav>
            </div>
                
        )

    }
}

export default Dropdown;