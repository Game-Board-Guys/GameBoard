import React from 'react';
import Landing from './components/Landing/Landing.js';
import Login from './components/Login/Login.js';
import Lobby from './components/Lobby/Lobby.js';
import Profile from './components/Profile/Profile.js';
import LeaderBoard from './components/LeaderBoard/LeaderBoard.js';
import EditProfile from './components/EditProfile/EditProfile.js';
// import BrickBreak from './components/Lobby/GameLibrary/BrickBreakerPureJS';
import Dropdown from './components/Dropdown/Dropdown.js';



import { HashRouter as Router, Route } from 'react-router-dom';

export default function router(showSlideMenu, closeMenu){
    // console.log('closeMenu', closeMenu, 'showSlideMenu', showSlideMenu)
    return (
        <Router>
            <div>
                <Route component={Landing} exact path="/"/>
                <Route component={Login} path="/login"/>
                <Route component={Lobby} exact path="/lobby:game"/>
                <Route component={Profile} path="/profile"/>
                <Route component={LeaderBoard} path="/leaderboard"/>
                <Route component={EditProfile} path="/editprofile"/>
                <Route render={() => <Dropdown showSlideMenu={showSlideMenu} closeMenu={closeMenu}/>} path='/'/>


            </div>
        </Router>
    )
}

