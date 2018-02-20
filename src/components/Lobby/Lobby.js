import React, { Component } from 'react';
import './Lobby.css';


class Lobby extends Component {
    render(){
        return (
            <div className="lobby-main-container">
                <div className="upper-lobby-container">
                <canvas id="myCanvas"></canvas>
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