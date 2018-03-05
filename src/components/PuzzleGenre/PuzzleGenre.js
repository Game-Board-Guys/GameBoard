import React, {Component} from 'react';
import './PuzzleGenre.css';
import Match3 from './../../Pictures/Match 3jpeg.jpg';
import gemmatch from './../../Pictures/gemmatchjpeg.jpg';
import memory from './../../Pictures/memoryjpeg.jpg';
import simon from './../../Pictures/simonjpeg.jpg';
import slidingpuzzle from './../../Pictures/slidingpuzzlejpeg.jpg';

class PuzzleGenre extends Component {
    render(){
        return (
            <div className="puzzle-root">
                <p className="puzzle-genre-header">Puzzle Games</p>
                <div className="puzzle-game-container">
                    <a href="/lobby:match-three"><div className="puzzlelink" onClick={this.props.closeGameMenu}><img src={Match3}/>Match Three</div></a>
                    <a href="/lobby:gemmatch"><div className="puzzlelink" onClick={this.props.closeGameMenu}><img src={gemmatch}/>Gem Match</div></a>
                    <a href="/lobby:matching-pairs"><div className="puzzlelink" onClick={this.props.closeGameMenu}><img src={memory}/>Memory</div></a>
                    <a href="/lobby:simon"><div className="puzzlelink" onClick={this.props.closeGameMenu}><img src={simon}/>Simon</div></a>
                    <a href="/lobby:sliding-puzzle"><div className="puzzlelink" onClick={this.props.closeGameMenu}><img src={slidingpuzzle}/>Sliding Puzzle</div></a>
                </div>
            </div>
        )
    }
}

export default PuzzleGenre;