import React, { Component } from 'react';
import './LeaderBoard.css';
import axios from 'axios';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';


class LeaderBoard extends Component {
    constructor() {
        super();

        this.state ={
            view: [],
            game: ''
        }
    this.showPongClick = this.showPongClick.bind(this);
    this.showBreakClick = this.showBreakClick.bind(this);
    this.showInvadeClick = this.showInvadeClick.bind(this);
    }
    

    showPongClick(){
        axios.get('/api/getPongOrder').then((res) => {
            // console.log(res.data)
            this.setState({
                view: res.data,
                game: "Pong"
            })
        })
    }
    showBreakClick(){
        axios.get('/api/getBreakOrder').then((res) => {
            // console.log(res.data)
            this.setState({
                view: res.data,
                game: "Breakout"
            })
        })
    }
    showInvadeClick(){
        axios.get('/api/getInvadeOrder').then((res) => {
            // console.log(res.data)
            this.setState({
                view: res.data,
                game: "Invaders"
            })
        })
    }
    showInvadeClick(){
        axios.get('/api/getInvadeOrder').then((res) => {
            // console.log(res.data)
            this.setState({
                view: res.data,
                game: "Invaders"
            })
        })
    }

    render(){
        var board = this.state.view.slice(0,10).map(view => (
            <div className="game-leaderboard-box" key={view.id}>
              <div className="leaderboard-placing">
              <p className="leaderboard-name">{view.handle}</p><p className="just-a-dash">-</p><p className="just-a-dash">-</p><p className="just-a-dash">-</p><p className="just-a-dash">-</p><p className="just-a-dash">-</p><p className="leaderboard-score">{view.pong_wins}</p>
              </div>
              <br />
      
            </div>))

        return (
            <div className="main-leaderboard-container">
                <ScrollableAnchor id={'LeaderTop'}><p></p></ScrollableAnchor>
                <div className="leaderboard-sidebar">
                    
                    <div className="sidebar-header">Select Game</div>
                    
                    <div className="game-name-box">
                        <a href='#Leaders' className="game-name"><p onClick={this.showPongClick}>Pong</p></a>
                        <a href='#Leaders' className="game-name"><p onClick={this.showBreakClick}>Breakout</p></a>
                        <a href='#Leaders' className="game-name"><p>Tanks</p></a>
                        <ScrollableAnchor id={'Leaders'}>
                        <p className="anchor"></p>
                        </ScrollableAnchor>
                        <a href='#Leaders' className="game-name"><p onClick={this.showInvadeClick}>Invaders</p></a>
                        <a href='#Leaders' className="game-name"><p>Match Three</p></a>
                        <a href='#Leaders' className="game-name"><p>Cyber Orb</p></a>
                    </div>
                </div>
                
                <div className="game-leaderboard-container">
                    <h1 className="leaderboard-game-header">Leaderboard</h1>
                    <div className="leaderboard-scores-container">
                    <div className="game-name-2">{this.state.game}</div>
                        {board}
                    </div>
                </div>
                <div className="bottom-button-container">
               <a href='#LeaderTop' className="back-to-top"><p>Back To Top</p></a>
               </div>
            </div>
        )
    }
}

export default LeaderBoard;