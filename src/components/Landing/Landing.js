import React, { Component } from 'react';
import './Landing.css';
import Chat from '../Chat/Chat';
import Pong from './../../Pictures/Pong.png';
import Orb from './../../Pictures/Orb.png';
import Invaders from './../../Pictures/Invaders.png';
import Tanks from './../../Pictures/Tanks.png';
import BrickBreakers from './../../Pictures/BrickBreakers.png';


class Landing extends Component {
    constructor() {
        super();

        this.state = {
            // sliderImages: ["url('./../../Pictures/checkers.jpeg')","url('./../../Pictures/black-jack.jpg')", "url('./../../Pictures/minesweeper.jpg')", "url('./../../Pictures/Screenshot (7).png')"],
            sliderImages: [`url(${Pong}`, `url(${Orb}`, `url(${Invaders}`, `url(${BrickBreakers}`, `url(${Tanks}`],
            cur: 0
        }
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
    }

    slideLeft() {
        console.log('left')
        console.log(this.state.cur)
        if (this.state.cur === 0) {
            return this.setState({
                cur: this.state.sliderImages.length - 1
            })
        } else {
            return this.setState({
                cur: this.state.cur - 1
            })
        }
    }
    slideRight() {
        console.log('right')
        console.log(this.state.cur)
        if (this.state.cur >= this.state.sliderImages.length - 1) {
            return this.setState({
                cur: 0
            })
        } else {
            return this.setState({
                cur: this.state.cur + 1
            })
        }
    }

    render() {
        console.log('images here', this.state.sliderImages)
        const sliderStyle = {
            backgroundImage: this.state.sliderImages[this.state.cur]
        }

        return (
            <div className="landing_main_container">
                <h1 className="landing-logo"><p>P</p><p>E</p><p>A</p><p>X</p></h1>
                <div className="arrow-slider-container">
                    <div className="left-arrow" onClick={() => this.slideLeft()}></div>
                    <div className="game-slider-container">
                        <a href="lobby">
                            <div className="game-slider" style={sliderStyle}></div>
                        </a>
                    </div>
                    <div className="right-arrow" onClick={() => this.slideRight()}></div>
                </div>
                <h3 className="global-chat-header">Discussion</h3>
                <Chat />
                <h3 className="game-list-header">Games</h3>
                <div className="game-list-container" >
                    <a href="/lobby:pong" style={{ textDecoration: 'none' }}>
                        <div className="game-container">
                            <div className="listed-game-1-pong"></div>
                            <div className="game-text">Pong</div>
                        </div>
                    </a>
                    <a href="/lobby:maze2d" style={{ textDecoration: 'none' }}>
                        <div className="game-container">
                            <div className="listed-game-2-cyberorb"></div>
                            <div className="game-text">Cyber Orb</div>
                        </div>
                    </a>
                    <a href="/lobby:tanks" style={{ textDecoration: 'none' }}>
                        <div className="game-container">
                            <div className="listed-game-3-tanks"></div>
                            <div className="game-text">Tanks</div>
                        </div>
                    </a>
                    <a href="/lobby:brickbreaker" style={{ textDecoration: 'none' }}>
                        <div className="game-container">
                            <div className="listed-game-4-brickbreaker"></div>
                            <div className="game-text">Brick Breaker</div>
                        </div>
                    </a>
                    <a href="/lobby:invaders" style={{ textDecoration: 'none' }}>
                        <div className="game-container">
                            <div className="listed-game-5-invader"></div>
                            <div className="game-text">Invaders</div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default Landing;