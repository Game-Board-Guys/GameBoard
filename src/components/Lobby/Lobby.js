import React, { Component } from 'react';
import './Lobby.css';
//games
//action
import MonsterCandy from './GameLibrary/Action/MonsterCandy/MonsterCandy';

//adventure


//arcade
import Asteroids from './GameLibrary/Arcade/asteroids/Asteroids';
import BreakoutTwo from './GameLibrary/Arcade/breakout-two/BreakoutTwo';
import Invaders from './GameLibrary/Arcade/invaders/Invaders';
import InvadersTwo from './GameLibrary/Arcade/invaders-two/InvadersTwo';
import BrickBreaker from './GameLibrary/Arcade/Phaser-Breakout/Breakout';
import Pong from './GameLibrary/Arcade/pong/Pong';
import Snake from './GameLibrary/Arcade/snake/Snake';
import Tetris from './GameLibrary/Arcade/tetris/Tetris';

//board
// import Yahtzee from './GameLibrary/Board/yahtzee/Yahtzee';

//card


//mmo


//mobile
import Maze2d from './GameLibrary/Mobile/2d-Maze/Maze2D';

//multiplayer
import Ships from './GameLibrary/Multiplayer/ships/Ship';

//platform
import StarPlatformer from './GameLibrary/Platform/star-platformer/Star-Platformer';

//puzzle
import Gemmatch from './GameLibrary/Puzzle/gemmatch/Gemmatch';
import MatchingPairs from './GameLibrary/Puzzle/matching-pairs/MatchingPairs';
import MatchThree from './GameLibrary/Puzzle/match-three/MatchThree';
import Simon from './GameLibrary/Puzzle/simon/Simon';
import SlidingPuzzle from './GameLibrary/Puzzle/sliding-puzzle/Sliding-Puzzle';

//racing


//shooters
import Defender from './GameLibrary/Shooters/defender/Defender';
import Tanks from './GameLibrary/Shooters/tanks/Tanks';
import TanksTwo from './GameLibrary/Shooters/tanks-two/tanksTwo';

//sports


//strategy



import Chat from '../Chat/Chat';
import gameRules from './GameLibrary/GameRules.js';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';


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
        } else if (this.props.match.params.game === ':match-three') {
            MatchThree();
        } else if (this.props.match.params.game === ':ships') {
            Ships();
        } else if (this.props.match.params.game === ':asteroids') {
            Asteroids();
        } else if (this.props.match.params.game === ':breakout') {
            BreakoutTwo();
        } else if (this.props.match.params.game === ':invaders-two') {
            InvadersTwo();
        } else if (this.props.match.params.game === ':snake') {
            Snake();
        } else if (this.props.match.params.game === ':star-platformer') {
            StarPlatformer();
        } else if (this.props.match.params.game === ':gemmatch') {
            Gemmatch();
        } else if (this.props.match.params.game === ':matching-pairs') {
            MatchingPairs();
        } else if (this.props.match.params.game === ':simon') {
            Simon();
        } else if (this.props.match.params.game === ':sliding-puzzle') {
            SlidingPuzzle();
        } else if (this.props.match.params.game === ':defender') {
            Defender();
        } else if (this.props.match.params.game === ':tanks-two') {
            TanksTwo();
        } else if (this.props.match.params.game === ':monster-candy') {
            MonsterCandy();
        } else if (this.props.match.params.game === ':tetris') {
            Tetris();
        }



    }


    render() {
        configureAnchors({ offset: -60, scrollDuration: 1000 })
        return (
            <div className="lobby-main-container">
                <ScrollableAnchor id={'Gamebox'}>
                    <div className="this is just for the anchor"></div>
                </ScrollableAnchor>
                <div className="upper-lobby-container">
                    <div className="game-box">
                        <p className="game-title">{this.props.match.params.game.replace(":", "")}</p>
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