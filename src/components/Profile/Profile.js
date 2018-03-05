import React, { Component } from 'react';
import './Profile.css';
import axios from 'axios';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '...',
            img: 'https://png.icons8.com/metro/1600/decision.png',
            // user is auth_id
            user: '',
            aboutMe: '',
            pongWins: 0,
            breakHigh: null,
            invadeHigh: null,
            orbHigh: null,
            pongLeaders: null,
            pong: null,
            breakLeaders: null,
            brick: null,
            invadeLeaders: null,
            invade: null,
            orbLeaders: null,
            orb: null
        }
    }
    componentDidMount() {
        axios.get('/auth/me').then((res) => {
            // console.log(res.data)
            let user = res.data.auth_id;
            this.setState({
                user: res.data.auth_id,
                aboutMe: res.data.bio,
                img: res.data.img,
                username: res.data.handle,
                pongWins: res.data.pong_wins,
                breakHigh: res.data.brick_breaker_highscore,
                invadeHigh: res.data.invade_high_score,
                orbHigh: res.data.maze_time_highscore
            }) 
        }),
        axios.get('/api/getPongOrder').then((res) => {
            // console.log(res.data)
            this.setState({
                pongLeaders: res.data
            })
            this.setState ({
                pong: 0
            })
            var pong = 0
            for(var i=0;i<=this.state.pongLeaders.length;i++){
                if(this.state.pongLeaders[i].auth_id===this.state.user){
                    ++pong;
                     break;
                }else{
                    ++pong;
                }
            }
            return this.setState({
                pong
            })
        }),
        axios.get('/api/getBreakOrder').then((res) => {
            // console.log(res.data)
            this.setState({
                breakLeaders: res.data
            })
            this.setState ({
                brick: 0
            })
            var brick = 0;
            for(var i=0;i<=this.state.breakLeaders.length;i++){
                if(this.state.breakLeaders[i].auth_id===this.state.user){
                    ++brick;
                     break;
                }else{
                    ++brick;
                }
            }
            return this.setState({
                brick
            })
        }),
        axios.get('/api/getInvadeOrder').then((res) => {
            // console.log(res.data)
            this.setState({
                invadeLeaders: res.data
            })
            this.setState ({
                invade: 0
            })
            var invade = 0;
            for(var i=0;i<=this.state.invadeLeaders.length;i++){
                if(this.state.invadeLeaders[i].auth_id===this.state.user){
                    ++invade;
                     break;
                }else{
                    ++invade;
                }
            }
            return this.setState({
                invade
            })
        }),
        axios.get('/api/getOrbOrder').then((res) => {
            // console.log("orb", res.data)
            this.setState({
                orbLeaders: res.data
            })
            this.setState ({
                orb: 0
            })
            var orb = 0;
            for(var i=0;i<=this.state.orbLeaders.length;i++){
                if(this.state.orbLeaders[i].auth_id===this.state.user){
                    // console.log(this.state.orbLeaders[i].auth_id, "break");
                    ++orb;
                     break;
                }else{
                    // console.log(this.state.orbLeaders[i].auth_id);
                    ++orb;
                }
            }
            return this.setState({
                orb
            })
        })


    }





    render() {
        return (
            <div className="main-profile-container">
                <div className="user-info">
                    <div className="user-info-box">
                        <img src={this.state.img} className="user-profile-img" />
                        <p className="profile-username">{this.state.username}</p>
                        <p className="bio-header">About</p>
                        <div className="profile-bio">
                            <p className="bio-words">{this.state.aboutMe}
                            </p>
                        </div>
                        <a href="/editprofile">
                            <button className="update-profile-button">Update Profile</button>
                        </a>
                    </div>
                </div>
                <div className="user-stats">
                    <div className="stats-header">Stats</div>
                    <div className="user-stats-actual">
                        <div className="stat-tile">
                            <div className="stat-tile-header">Pong</div>
                            <div className="wins-losses"><div>Wins: {this.state.pongWins}</div><div>Losses:</div></div>
                        </div>
                        <div className="stat-tile">
                            <div className="stat-tile-header">Brick Breaker</div>
                            <div className="wins-losses"><div>HighScore: {this.state.breakHigh}</div><div>Losses:</div></div>
                        </div>
                        <div className="stat-tile">
                            <div className="stat-tile-header">Tanks</div>
                            <div className="wins-losses"><div>Wins:</div><div>Losses:</div></div>
                        </div>
                        <div className="stat-tile">
                            <div className="stat-tile-header">Invaders</div>
                            <div className="wins-losses"><div>HighScore: {this.state.invadeHigh}</div><div>Losses:</div></div>
                        </div>
                        <div className="stat-tile">
                            <div className="stat-tile-header">Match Three</div>
                            <div className="wins-losses"><div>Wins:</div><div>Losses:</div></div>
                        </div>
                        <div className="stat-tile">
                            <div className="stat-tile-header">Cyber Orb</div>
                            <div className="wins-losses"><div>Best Time: {this.state.orbHigh}</div><div>Losses:</div></div>
                        </div>

                    </div>

                </div>
                <div className="standings">
                    <div className="standings-header">Standings</div>
                    <div className="standings-actual">
                        <div className="standings-tile">
                            <div className="standings-tile-header">Pong</div>
                            <div>{this.state.pong}</div>
                        </div>
                        <div className="standings-tile">
                            <div className="standings-tile-header">Brick Breaker</div>
                            <div>{this.state.brick}</div>
                        </div>
                        <div className="standings-tile">
                            <div className="standings-tile-header">Tanks</div>
                            <div>...</div>
                        </div>
                        <div className="standings-tile">
                            <div className="standings-tile-header">Invaders</div>
                            <div>{this.state.invade}</div>
                        </div>
                        <div className="standings-tile">
                            <div className="standings-tile-header">Match Three</div>
                            <div>...</div>
                        </div>
                        <div className="standings-tile">
                            <div className="standings-tile-header">Cyber Orb</div>
                            <div>{this.state.orb}</div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;