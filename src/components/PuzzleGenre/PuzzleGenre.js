import React, {Component} from 'react';
import './PuzzleGenre.css';
import Match3 from './../../Pictures/Match 3.png';
import gemmatch from './../../Pictures/gemmatch.png';
import memory from './../../Pictures/memory.png';
import simon from './../../Pictures/simon.png';
import slidingpuzzle from './../../Pictures/slidingpuzzle.png';

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