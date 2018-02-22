import React, { Component } from 'react';
import './Lobby.css';

import Pong from './GameLibrary/pong/Pong';
import Maze2d from './GameLibrary/2d_maze/2d_maze';
import BrickBreaker from './GameLibrary/brickBreaker/BrickBreakPhase';
class Lobby extends Component {

    componentDidMount() {
        if (this.props.match.params.game === ':pong') {
            Pong();
        }else if(this.props.match.params.game === ':maze2d'){
            Maze2d();
        }else if(this.props.match.params.game === ':brickbreaker'){
            BrickBreaker();
        }

        
    }
    render() {
        return (
            <div className="lobby-main-container">
                <div className="upper-lobby-container">
                    <div id="myCanvas"></div>
                    <div className="upper-lobby-right">
                        <div className="chat-bar"></div>
                        <div className="lobby-buttons"><button>Rules</button>   <button>Leave Game</button></div>
                    </div>
                </div>
                <div className="rules-container"></div>
                <div className="leave-game-button"></div>
            </div>
        )
    }
}

export default Lobby;