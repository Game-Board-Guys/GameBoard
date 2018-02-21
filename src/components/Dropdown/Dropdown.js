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
                <nav className="dropdown-nav">
                    <Link to="/lobby"><div onClick={this.props.closeMenu}>LOBBY</div></Link>
                    <Link to="/leaderboard"><div onClick={this.props.closeMenu}>LEADERBOARD</div></Link>
                    <Link to="/profile"><div onClick={this.props.closeMenu}>PROFILE</div></Link>
                </nav>
            </div>

        )

    }
}

export default Dropdown;