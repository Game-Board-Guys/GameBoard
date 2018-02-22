import React, { Component } from 'react';
import './Lobby.css';
import { Link } from 'react-router-dom';
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
                    <div className="game-box">
                    <p className="game-title">Brick Breaker</p>
                    <div id="myCanvas"></div>
                    </div>
                    <div className="upper-lobby-right">
                        <div className="chat-bar"></div>
                        <div className="lobby-buttons">
                            <button onClick={this.draw}>Start Game</button>
                            <button>Rules</button>
                            <button>Leave Game</button>
                        </div>
                    </div>
                </div>
                <div className="lower-lobby">
                    <div className="game-rules-main">
                        <p className="game-rules-header">Game Rules</p>
                        <div className="rules-container">The objective in Brick Breaker is to eliminate all the bricks at the top of the screen.
                                                         To do this you must use the paddle at the bottom of the screen to bounce the ball up to
                                                         the bricks to break them. To move the paddle, simply use the arrow buttons on your keyboard, 
                                                         your mouse to drag it left to right, or your thumb if playing mobily. To beat the level, 
                                                         break all the bricks. Move your paddle quicker to change direction or trajectory of the 
                                                         ball. You are given three lives to complete as many levels as you can. If the ball hits 
                                                         the bottom of the screen without you making contact with your paddle, you lose a life. 
                                                         To get a new life you must complete three levels. If you leave game early, you will get
                                                         a loss on your stats. 
                                                         
                        </div>
                    </div>
                    <Link to="/"><div className="leave-game-button">Leave Game</div></Link>
                </div>
            </div>
        )
    }
}

export default Lobby;