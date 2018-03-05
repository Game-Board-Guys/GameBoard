import React, {Component} from 'react';
import './ArcadeGenre.css';
import breakout from './../../Pictures/breakoutjpeg.jpg';
import gemmatch from './../../Pictures/gemmatchjpeg.jpg';
import pong from './../../Pictures/ponggamejpeg.jpg';
import invaders1 from './../../Pictures/invaders1jpeg.jpg';
import invaders2 from './../../Pictures/invaders2jpeg.jpg';
import Match3 from './../../Pictures/Match 3jpeg.jpg';
import asteroids from './../../Pictures/asteroidsjpeg.jpg';
import defender from './../../Pictures/defenderjpeg.jpg';
import cyberorb from './../../Pictures/cyberorbjpeg.jpg';
import snake from './../../Pictures/snakejpeg.jpg';


class ArcadeGenre extends Component {
    render(){
        return (
            <div className="arcade-root">
                <p className="arcade-genre-header">Arcade Games</p>
                <div className="arcade-game-container">
                <a href="/lobby:pong"><div className="arcadelink" onClick={this.props.closeGameMenu}><img src={pong}/>Pong</div></a>
                <a href="/lobby:invaders"><div className="arcadelink"onClick={this.props.closeGameMenu}><img src={invaders1}/>Invaders</div></a>
                <a href="/lobby:invaders-two"><div className="arcadelink" onClick={this.props.closeGameMenu}><img src={invaders2}/>Invaders 2</div></a>
                <a href="/lobby:match-three"><div className="arcadelink" onClick={this.props.closeGameMenu}><img src={Match3}/>Match Three</div></a>
                <a href="/lobby:asteroids"><div className="arcadelink" onClick={this.props.closeGameMenu}><img src={asteroids}/>Asteroids</div></a>
                <a href="/lobby:breakout"><div  className="arcadelink" onClick={this.props.closeGameMenu}><img src={breakout}/>Breakout</div></a>
                <a href="/lobby:gemmatch"><div className="arcadelink" onClick={this.props.closeGameMenu}><img src={gemmatch}/>Gem Match</div></a>
                <a href="/lobby:defender"><div className="arcadelink" onClick={this.props.closeGameMenu}><img src={defender}/>Defender</div></a>
                <a href="/lobby:maze2d"><div className="arcadelink" onClick={this.props.closeGameMenu}><img src={cyberorb}/>Cyber Orb</div></a>
                <a href="/lobby:snake"><div className="arcadelink" onClick={this.props.closeGameMenu}><img src={snake}/>Snake</div></a>
                </div>
            </div>
        )
    }
}

export default ArcadeGenre;