import React from 'react';
import Landing from './components/Landing/Landing.js';
import Login from './components/Login/Login.js';
//import Lobby from './components/Lobby/Lobby.js';
import Profile from './components/Profile/Profile.js';
import LeaderBoard from './components/LeaderBoard/LeaderBoard.js';
import EditProfile from './components/EditProfile/EditProfile.js';
import { HashRouter as Router, Route } from 'react-router-dom';
import BrickBreak from './components/Lobby/GameLibrary/BrickBreakerPureJS';

export default (

    <Router>
        <div>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/lobby" component={BrickBreak} />
            <Route path="/profile" component={Profile} />
            <Route path="/leaderboard" component={LeaderBoard} />
            <Route path="/editprofile" component={EditProfile} />
        </div>
    </Router>
)

