import React, {Component} from 'react';
import './MultiPlayerGenre.css';
import ships from './../../Pictures/ships.png';
import tanks1 from './../../Pictures/tanks1.png';
import tanks2 from './../../Pictures/tanks2.png';

class MultiPlayerGenre extends Component {
    render(){
        return (
            <div className="multi-player-root">
                <p className="multiplayer-genre-header">Multi-Player Games</p>
                <div className="multiplayer-game-container">
                    <a href="/lobby:ships"><div className="multiplayerlink" onClick={this.props.closeGameMenu}><img src={ships}/>Ships</div></a>
                    <a href="/lobby:tanks"><div className="multiplayerlink" onClick={this.props.closeGameMenu}><img src={tanks1}/>Tanks</div></a>
                    <a href="/lobby:tanks-two"><div className="multiplayerlink" onClick={this.props.closeGameMenu}><img src={tanks2}/>Tanks 2</div></a>
                </div>
            </div>
        )
    }
}

export default MultiPlayerGenre;