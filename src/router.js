import React from 'react';
import Landing from './components/Landing/Landing.js';
import Login from './components/Login/Login.js';
import Lobby from './components/Lobby/Lobby.js';
import Profile from './components/Profile/Profile.js';
import LeaderBoard from './components/LeaderBoard/LeaderBoard.js';
import EditProfile from './components/EditProfile/EditProfile.js';
import ArcadeGenre from './components/ArcadeGenre/ArcadeGenre.js';
import MultiPlayerGenre from './components/MultiPlayerGenre/MultiPlayerGenre.js';
import PuzzleGenre from './components/PuzzleGenre/PuzzleGenre.js';
import SideScrollGenre from './components/SideScrollGenre/SideScrollGenre.js';
import Genres from './components/Genres/Genres.js';
// import BrickBreak from './components/Lobby/GameLibrary/BrickBreakerPureJS';
import Dropdown from './components/Dropdown/Dropdown.js';
import GamesDropdown from './components/GamesDropdown/GamesDropdown.js';



import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function router(showSlideMenu, closeMenu, showGameSlide, closeGameMenu){
    // console.log('closeMenu', closeMenu, 'showSlideMenu', showSlideMenu)
    return (
        <Router>
            <div>
                <Route component={Login} exact path="/"/>
                <Route component={Landing} path="/landing"/>
                <Route component={Lobby} exact path="/lobby:game"/>
                <Route component={Profile} path="/profile"/>
                <Route component={LeaderBoard} path="/leaderboard"/>
                <Route component={EditProfile} path="/editprofile"/>
                <Route component={ArcadeGenre} path="/arcade"/>
                <Route component={MultiPlayerGenre} path="/multiplayer"/>
                <Route component={PuzzleGenre} path="/puzzle"/>
                <Route component={SideScrollGenre} path="/sidescroll"/>
                <Route component={Genres} path="/genres"/>
                <Route render={() => <Dropdown showSlideMenu={showSlideMenu} closeMenu={closeMenu}/>} path='/'/>
                <Route render={() => <GamesDropdown showGameSlide={showGameSlide} closeGameMenu={closeGameMenu}/>} path='/'/>


            </div>
        </Router>
    )
}

