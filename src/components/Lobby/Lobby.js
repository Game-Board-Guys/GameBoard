import React, { Component } from 'react';
import './Lobby.css';
import ScrollableAnchor from 'react-scrollable-anchor';

class Lobby extends Component {
    render(){
        return (
            <div className="lobby-main-container">
                <div className="upper-lobby-container">
                <canvas id="myCanvas"></canvas>
                <div className="upper-lobby-right">
                <div className="chat-bar"></div>
                 <div className="lobby-buttons"><a href="#RulesContainer">Rules</a>   <button>Leave Game</button></div>
                </div>
                </div>
                <ScrollableAnchor className="rules-container" id={"RulesContainer"}></ScrollableAnchor>
                <div className="leave-game-button"></div>
            </div>
        )
    }
}

export default Lobby;