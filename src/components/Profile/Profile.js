import React, { Component } from 'react';
import './Profile.css';


class Profile extends Component {
    render() {
        return (
            <div className="main-profile-container">
                <div className="user-info">
                    <div className="user-info-box">
                        <img src="https://lh3.googleusercontent.com/-Sh2ali7Rm1Q/AAAAAAAAAAI/AAAAAAAAAMY/eYgSvFha8ww/photo.jpg" className="user-profile-img" />
                        <p className="profile-username">Blair Woodward</p>
                        <p className="profile-level">Level 26</p>
                        <a href="/editprofile">
                            <button className="update-profile-button">Update Profile</button>
                        </a>
                    </div>
                </div>
                <div className="user-stats">
                    <div className="stats-header">Stats</div>
                    <div className="user-stats-actual">
                        <div className="stat-tile">
                            <h1 className="stat-tile-header">Pong</h1>
                            <div className="wins-losses"><div>Wins:</div><div>Losses:</div></div>
                        </div>
                        <div className="stat-tile">
                            <h1 className="stat-tile-header">Brick Breaker</h1>
                            <div className="wins-losses"><div>Wins:</div><div>Losses:</div></div>
                        </div>
                        <div className="stat-tile">
                            <h1 className="stat-tile-header">Tanks</h1>
                            <div className="wins-losses"><div>Wins:</div><div>Losses:</div></div>
                        </div>
                        <div className="stat-tile">
                            <h1 className="stat-tile-header">Invaders</h1>
                            <div className="wins-losses"><div>Wins:</div><div>Losses:</div></div>
                        </div>
                        <div className="stat-tile">
                            <h1 className="stat-tile-header">Cyber Orb</h1>
                            <div className="wins-losses"><div>Wins:</div><div>Losses:</div></div>
                        </div>

                    </div>

                </div>
                <div className="standings">
                    <div className="standings-header">Standings</div>
                    <div className="standings-actual">
                        <div className="standings-tile">
                            <h1 className="standings-tile-header">Pong</h1>
                            <div>34th Place</div>
                        </div>
                        <div className="standings-tile">
                            <h1 className="standings-tile-header">Brick Breaker</h1>
                            <div>13th Place</div>
                        </div>
                        <div className="standings-tile">
                            <h1 className="standings-tile-header">Tanks</h1>
                            <div>2th Place</div>
                        </div>
                        <div className="standings-tile">
                            <h1 className="standings-tile-header">Invaders</h1>
                            <div>56th Place</div>
                        </div>
                        <div className="standings-tile">
                            <h1 className="standings-tile-header">Cyber Orb</h1>
                            <div>314th Place</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;