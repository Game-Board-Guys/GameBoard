import React, {Component} from 'react';
import './SideScrollGenre.css';
import star from './../../Pictures/starjpeg.jpg';
import tanks1 from './../../Pictures/tanks1jpeg.jpg';

class SideScrollGenre extends Component {
    render(){
        return (
            <div className="sidescroll-root">
                <p className="sidescroll-genre-header">Sidescroll Games</p>
                <div className="sidescroll-game-container">
                     <a href="/lobby:star-platformer"><div className="sidescrolllink" onClick={this.props.closeGameMenu}><img src={star}/>Star Platformer</div></a> 
                     <a href="/lobby:tanks"><div className="sidescrolllink" onClick={this.props.closeGameMenu}><img src={tanks1}/>Tanks</div></a>                  
                </div>
            </div>
        )
    }
}

export default SideScrollGenre;