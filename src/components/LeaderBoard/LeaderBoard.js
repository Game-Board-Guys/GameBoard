import React, { Component } from 'react';
import './LeaderBoard.css';


class LeaderBoard extends Component {

    showGameLeaders(){

    }

    render(){
        return (
            <div className="main-leaderboard-container">
                <div className="leaderboard-sidebar">
                    <div className="sidebar-header">Select Game</div>
                    <div className="game-name-box">
                        <p className="game-name">Pong</p>
                        <p className="game-name">Brick Breaker</p>
                        <p className="game-name">Tanks</p>
                        <p className="game-name">Invaders</p>
                        <p className="game-name">Cyber Orb</p>
                        
                    </div>
                </div>
                <div className="game-leaderboard-container">
                    <h1 className="leaderboard-game-header">Leaderboard</h1>
                    <div className="game-leaderboard-box"></div>
                </div>
            </div>
        )
    }
}

export default LeaderBoard;