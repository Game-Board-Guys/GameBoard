import React, { Component } from 'react';
import './GamesDropdown.css';



class GamesDropdown extends Component {

    render() {
        return (
            <div className={this.props.showGameSlide ? "main_gamedropdown_container gameslidedown" : "main_gamedropdown_container"}>
                <div className="games_slidedown_header">

                </div>
                <nav className="gamedropdown-nav">
                    <a href="/puzzle"><div onClick={this.props.closeGameMenu}>Puzzle</div></a>
                    <a href="/arcade"><div onClick={this.props.closeGameMenu}>Arcade</div></a>
                    <a href="/sidescroll"><div onClick={this.props.closeGameMenu}>Side Scroll</div></a>
                    <a href="/multiplayer"><div onClick={this.props.closeGameMenu}>Multi-Player</div></a>
                    {/* <a href="/lobby:ships"><div onClick={this.props.closeGameMenu}>Ships</div></a> *
                    <a href="/lobby:pong"><div onClick={this.props.closeGameMenu}>Pong</div></a> *
                    <a href="/lobby:brickbreaker"><div onClick={this.props.closeGameMenu}>Brick Breaker</div></a> *
                    <a href="/lobby:maze2d"><div onClick={this.props.closeGameMenu}>Cyber Orb</div></a> *
                    <a href="/lobby:invaders"><div onClick={this.props.closeGameMenu}>Invaders</div></a> *
                    <a href="/lobby:tanks"><div onClick={this.props.closeGameMenu}>Tanks</div></a> *
                    <a href="/lobby:match-three"><div onClick={this.props.closeGameMenu}>Match Three</div></a> *
                    <a href="/lobby:asteroids"><div onClick={this.props.closeGameMenu}>asteroids</div></a> *
                    <a href="/lobby:breakout"><div onClick={this.props.closeGameMenu}>breakout</div></a> *
                    <a href="/lobby:invaders-two"><div onClick={this.props.closeGameMenu}>invaders 2</div></a> *
                    <a href="/lobby:snake"><div onClick={this.props.closeGameMenu}>snake</div></a> *
                    <a href="/lobby:star-platformer"><div onClick={this.props.closeGameMenu}>star platformer-</div></a> *
                    <a href="/lobby:gemmatch"><div onClick={this.props.closeGameMenu}>gemmatch</div></a> *
                    <a href="/lobby:matching-pairs"><div onClick={this.props.closeGameMenu}>matching pairs</div></a> *
                    <a href="/lobby:simon"><div onClick={this.props.closeGameMenu}>simon</div></a> *
                    <a href="/lobby:sliding-puzzle"><div onClick={this.props.closeGameMenu}>sliding puzzle</div></a> *
                    <a href="/lobby:defender"><div onClick={this.props.closeGameMenu}>defender</div></a> *
                    <a href="/lobby:tanks-two"><div onClick={this.props.closeGameMenu}>tanks 2</div></a> * */}
                </nav>
            </div>

        )

    }
}

export default GamesDropdown;