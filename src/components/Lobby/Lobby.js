import React, { Component } from 'react';
import './Lobby.css';
import Pong from './GameLibrary/pong/Pong';
import Maze2d from './GameLibrary/2d-Maze/Maze2D';
import BrickBreaker from './GameLibrary/phaser-breakout/Breakout';
import Tanks from './GameLibrary/tanks/Tanks';
import Invaders from './GameLibrary/invaders/Invaders';
import Chat from '../Chat/Chat';
import gameRules from './GameLibrary/GameRules.js';

class Lobby extends Component {

    componentDidMount() {
        if (this.props.match.params.game === ':pong') {
            Pong();
        } else if (this.props.match.params.game === ':maze2d') {
            Maze2d();
        } else if (this.props.match.params.game === ':brickbreaker') {
            BrickBreaker();
        } else if (this.props.match.params.game === ':tanks') {
            Tanks();
        } else if (this.props.match.params.game === ':invaders') {
            Invaders();
        }


    }


    render() {
        return (
            <div className="lobby-main-container">
                <div className="upper-lobby-container">
                    <div className="game-box">
                        <p className="game-title">{this.props.match.params.game}</p>
                        <div id="myCanvas"></div>
                    </div>
                    <div className="upper-lobby-right">
                        <Chat height={"400px"} width={"400px"} />
                        <div className="lobby-buttons">
                            <button>Rules</button>
                            <button>Leave Room</button>
                        </div>
                    </div>
                </div>
                <div className="lower-lobby">
                    <div className="game-rules-main">
                        <p className="game-rules-header">Game Rules</p>
                        {console.log(this.props.match.params.game)}
                        <div className="rules-container">{gameRules(this.props.match.params.game)}

                        </div>
                    </div>
                    <a href="/"><div className="leave-game-button">Leave Room</div></a>
                </div>
            </div>
        )
    }
}

export default Lobby;