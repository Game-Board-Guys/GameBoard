import React, { Component } from 'react';
import './Lobby.css';
import Pong from './GameLibrary/pong/Pong';
import Maze2d from './GameLibrary/2d-Maze/Maze2D';
import BrickBreaker from './GameLibrary/Phaser-Breakout/Breakout';
import Tanks from './GameLibrary/tanks/Tanks';
import Invaders from './GameLibrary/invaders/Invaders';
import Chat from '../Chat/Chat';
import gameRules from './GameLibrary/GameRules.js';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor'

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
            configureAnchors({offset: -60, scrollDuration: 1000})
        return (
            <div className="lobby-main-container">
                    <ScrollableAnchor id={'Gamebox'}>
                <div className="this is just for the anchor"></div>
                    </ScrollableAnchor>
                <div className="upper-lobby-container">
                    <div className="game-box">
                        <p className="game-title">{this.props.match.params.game}</p>
                        <div id="myCanvas"></div>
                    </div>
                    <div className="upper-lobby-right">
                        <Chat height={"400px"} width={"400px"} />
                        <div className="lobby-buttons">
                            <a href='#Rules'><button>Rules</button></a>
                            <a href='#Rules'><button>Leave Room</button></a>
                        </div>
                    </div>
                </div>
                <div className="lower-lobby">
                    <div className="game-rules-main">
                        <p className="game-rules-header">Game Rules</p>
                        {console.log(this.props.match.params.game)}
                        <ScrollableAnchor id={'Rules'}>
                        <div className="rules-container">{gameRules(this.props.match.params.game)}

                        </div>
                        </ScrollableAnchor>
                    </div>
                    <div className="lower-lobby-buttons">
                    <a href="/landing"><div className="leave-game-button">Leave Room</div></a>
                    <a href='#Gamebox'><div className="back-to-game-button">Back To Game</div></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Lobby;