import React, {Component} from 'react';
import './Genres.css';
import gemmatch from './../../Pictures/gemmatchjpeg.jpg';
import tanks2 from './../../Pictures/tanks2jpeg.jpg';
import star from './../../Pictures/starjpeg.jpg';
import breakout from './../../Pictures/breakoutjpeg.jpg';

class Genres extends Component {
    render(){
        return(
            <div className="main-genres-container">
                <div className="genre-container">
                <a href="/puzzle"><div className="puzzlelink" onClick={this.props.closeGameMenu}><img className="genre-image" src={gemmatch}/>Puzzle Games</div></a>
                <a href="/arcade"><div  className="arcadelink" onClick={this.props.closeGameMenu}><img className="genre-image" src={breakout}/>Arcade Games</div></a>
                <a href="/multiplayer"><div className="multiplayerlink" onClick={this.props.closeGameMenu}><img className="genre-image" src={tanks2}/>Multi-Player Games</div></a>
                <a href="/sidescroll"><div className="sidescrolllink" onClick={this.props.closeGameMenu}><img className="genre-image" src={star}/>Sidescroll Games</div></a> 
                </div>
            </div>
        )
    }
}
export default Genres;