import React, { Component } from 'react';
import './LeaderBoard.css';
import axios from 'axios';


class LeaderBoard extends Component {
    constructor() {
        super();

        this.state ={
            view: []
        }
    this.showPongClick = this.showPongClick.bind(this);
    this.showBreakClick = this.showBreakClick.bind(this);
    this.showInvadeClick = this.showInvadeClick.bind(this);
    }
    

    showPongClick(){
        axios.get('/api/getPongOrder').then((res) => {
            // console.log(res.data)
            this.setState({
                view: res.data
            })
        })
    }
    showBreakClick(){
        axios.get('/api/getBreakOrder').then((res) => {
            // console.log(res.data)
            this.setState({
                view: res.data
            })
        })
    }
    showInvadeClick(){
        axios.get('/api/getInvadeOrder').then((res) => {
            // console.log(res.data)
            this.setState({
                view: res.data
            })
        })
    }
    showInvadeClick(){
        axios.get('/api/getInvadeOrder').then((res) => {
            // console.log(res.data)
            this.setState({
                view: res.data
            })
        })
    }

    render(){
        var board = this.state.view.slice(0,10).map(view => (
            <div key={view.id}>
              {view.handle} - {view.pong_wins}
              <br />
      
            </div>))

        return (
            <div className="main-leaderboard-container">
                <div className="leaderboard-sidebar">
                    <div className="sidebar-header">Select Game</div>
                    <div className="game-name-box">
                        <p onClick={this.showPongClick} className="game-name">Pong</p>
                        <p onClick={this.showBreakClick} className="game-name">Brick Breaker</p>
                        <p className="game-name">Tanks</p>
                        <p onClick={this.showInvadeClick} className="game-name">Invaders</p>
                        <p className="game-name">Match Three</p>
                        <p className="game-name">Cyber Orb</p>
                    </div>
                </div>
                <div className="game-leaderboard-container">
                    <h1 className="leaderboard-game-header">Leaderboard</h1>
                    <div className="game-leaderboard-box">
                        {board}
                    </div>
                </div>
            </div>
        )
    }
}

export default LeaderBoard;