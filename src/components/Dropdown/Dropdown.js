import React, { Component } from 'react';
import './Dropdown.css';



class Dropdown extends Component {

    render() {
        return (
            <div className={this.props.showSlideMenu ? "main_dropdown_container slidedown" : "main_dropdown_container"}>
                <div className="slidedown_header">
                    <a href="/" onClick={this.props.closeMenu}>
                        <div className="slidedown_logo_wrapper">
                            P E A X
                        </div>
                    </a>

                    <div className="close_x" onClick={this.props.closeMenu}>X</div>
                </div>
                <nav className="dropdown-nav">
                    <a href="/genres"><div onClick={this.props.closeMenu}>GAMES</div></a>
                    <a href="/leaderboard"><div onClick={this.props.closeMenu}>LEADERBOARD</div></a>
                    <a href="/profile"><div onClick={this.props.closeMenu}>PROFILE</div></a>
                </nav>
            </div>

        )

    }
}

export default Dropdown;