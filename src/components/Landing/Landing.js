import React, { Component } from 'react';
import './Landing.css';


class Landing extends Component {
    render(){
        return (
            <div className="landing_main_container">
                <div className="arrow-slider-container">
                    <div className="left-arrow"></div>
                    <div className="game-slider-container">
                        <div className="game-slider"></div>
                    </div>
                    <div className="right-arrow"></div>
                </div>
                <div className="landing-chat-box"></div>
                <div className="game-list-container">
                    <div className="listed-game">Checkers...........CheckersCheckers...........CheckersCheckers...........Checkers</div>
                    <div className="listed-game">Bricks...........Bricks...........Bricks...........Bricks</div>
                    <div className="listed-game">Chess...........Chess...........Chess...........Chess</div>
                    <div className="listed-game">Card game...........Card game...........Card game...........Card game</div>
                </div>
            </div>
        )
    }
}

export default Landing;