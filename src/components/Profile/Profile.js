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
            aboutMe: ''
        }
    }
    componentDidMount() {
        // ---checks who is logged in and loades their picture---
        axios.get('/auth/me').then((res) => {
            // console.log(res.data)
            let user = res.data.auth_id;
            this.setState({
                user: res.data.auth_id,
                aboutMe: res.data.bio
            })
            axios.get(`/api/testuser?auth=${user}`).then(res => {
                // console.log(res.data)
                this.setState({ img: res.data[0].img })
                this.setState({ username: res.data[0].handle })
                // console.log(this.state.img)
                // console.log(user)
            })
            // var image = this.state.img;
        })

    }





    render() {
        return (
            <div className="main-profile-container">
                <div className="user-info">
                    <div className="user-info-box">
                        <img src={this.state.img} className="user-profile-img" />
                        <p className="profile-username">{this.state.username}</p>
                        <p className="bio-header">About {this.state.username}</p>
                        <p className="profile-bio">
                            <p className="bio-words">{this.state.aboutMe}
                            </p>
                        </p>
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
                            <div className="wins-losses"><div>Wins:</div><div>Losses:</div></div>
                        </div>
                        <div className="stat-tile">
                            <div className="stat-tile-header">Brick Breaker</div>
                            <div className="wins-losses"><div>Wins:</div><div>Losses:</div></div>
                        </div>
                        <div className="stat-tile">
                            <div className="stat-tile-header">Tanks</div>
                            <div className="wins-losses"><div>Wins:</div><div>Losses:</div></div>
                        </div>
                        <div className="stat-tile">
                            <div className="stat-tile-header">Invaders</div>
                            <div className="wins-losses"><div>Wins:</div><div>Losses:</div></div>
                        </div>
                        <div className="stat-tile">
                            <div className="stat-tile-header">Cyber Orb</div>
                            <div className="wins-losses"><div>Wins:</div><div>Losses:</div></div>
                        </div>

                    </div>

                </div>
                <div className="standings">
                    <div className="standings-header">Standings</div>
                    <div className="standings-actual">
                        <div className="standings-tile">
                            <div className="standings-tile-header">Pong</div>
                            <div>34th Place</div>
                        </div>
                        <div className="standings-tile">
                            <div className="standings-tile-header">Brick Breaker</div>
                            <div>13th Place</div>
                        </div>
                        <div className="standings-tile">
                            <div className="standings-tile-header">Tanks</div>
                            <div>2th Place</div>
                        </div>
                        <div className="standings-tile">
                            <div className="standings-tile-header">Invaders</div>
                            <div>56th Place</div>
                        </div>
                        <div className="standings-tile">
                            <div className="standings-tile-header">Cyber Orb</div>
                            <div>314th Place</div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;