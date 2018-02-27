import React, { Component } from 'react';
import './GamesDropdown.css';



class GamesDropdown extends Component {

    render() {
        return (
            <div className={this.props.showGameSlide ? "main_gamedropdown_container gameslidedown" : "main_gamedropdown_container"}>
                <div className="games_slidedown_header">

                </div>
                <nav className="gamedropdown-nav">
                    <a href="/lobby:pong"><div onClick={this.props.closeGameMenu}>PONG</div></a>
                    <a href="/lobby:brickbreaker"><div onClick={this.props.closeGameMenu}>BRICK BREAKER</div></a>
                    <a href="/lobby:maze2d"><div onClick={this.props.closeGameMenu}>Cyber Orb</div></a>
                    <a href="/lobby:invaders"><div onClick={this.props.closeGameMenu}>Invaders</div></a>
                    <a href="/lobby:tanks"><div onClick={this.props.closeGameMenu}>Tanks</div></a>
                </nav>
            </div>

        )

    }
}

export default GamesDropdown;