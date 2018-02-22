import React, { Component } from 'react';
import io from 'socket.io-client';
import './Landing.css';
import { Link } from 'react-router-dom';
import checkers from './../../Pictures/checkers.jpeg';
import blackjack from './../../Pictures/black-jack.jpg';
import minesweeper from './../../Pictures/minesweeper.jpg';
import breakBrick from './../../Pictures/Screenshot (7).png';


class Landing extends Component {
    constructor() {
        super();

        this.state = {
            // sliderImages: ["url('./../../Pictures/checkers.jpeg')","url('./../../Pictures/black-jack.jpg')", "url('./../../Pictures/minesweeper.jpg')", "url('./../../Pictures/Screenshot (7).png')"],
            sliderImages: [`url(${checkers}`, `url(${minesweeper}`, `url(${blackjack}`],
            cur: 0,
            userID: 1,
            messages: []
        }
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
        // ----sockets binds-----
        this.updateMessages = this.updateMessages.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.setUserId = this.setUserId.bind(this);
    }

    componentDidMount() {
        // this.state.sliderImages[0]
        this.socket = io('/');
        this.socket.on('message dispatched', this.updateMessages)
        this.socket.on('welcome', this.setUserId)
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

    // -------socket methods--------
    updateMessages(message) {
        const updatedMessages = this.state.messages.slice()
        updatedMessages.push(message)
        this.setState({
            messages: updatedMessages
        })
        console.log(this.state.messages)
    }

    setUserId(user) {
        this.setState(user)
    }

    sendMessage() {
        const message = this.refs.message.value
        console.log(message)
        this.socket.emit('message sent', { message, userid: this.state.user })
        this.updateMessages({ message, user: this.state.userID })
        this.refs.message.value = '';
    }

    render() {
        console.log('images here', this.state.sliderImages)
        const sliderStyle = {
            backgroundImage: this.state.sliderImages[this.state.cur]
        }
        // -------sockets message display-------
        const messages = this.state.messages.map((e, i) => {
            const styles = e.user === this.state.userID ? { alignSelf: "flex-end", backgroundColor: "#2d96fb", color: "white" } : { alignSelf: "flex-start", backgroundColor: "#e5e6ea" }
            return (
                <p key={i} style={styles}>{e.message}</p>
            )
        })
        return (
            <div className="landing_main_container">
                <div className="arrow-slider-container">
                    <div className="left-arrow" onClick={() => this.slideLeft()}></div>
                    <div className="game-slider-container">
                        <Link to="lobby">
                            <div className="game-slider" style={sliderStyle}></div>
                        </Link>
                    </div>
                    <div className="right-arrow" onClick={() => this.slideRight()}></div>
                </div>
                <div className="landing-chat-box">

                    {/* <input type="text" placeholder="Enter a message..." onKeyUp={this.handleSubmit} />
                    {this.state.messages} */}
                    <input ref="message" />
                    <button onClick={this.sendMessage}>Send</button>
                    {messages}

                </div>
                <div className="game-list-container">
                    <Link to="lobby" style={{ textDecoration: 'none' }}>
                        <div className="game-container">
                            <div className="listed-game-1"></div>
                            <div className="game-text">Checkers</div>
                        </div>
                    </Link>
                    <Link to="lobby" style={{ textDecoration: 'none' }}>
                        <div className="game-container">
                            <div className="listed-game-2"></div>
                            <div className="game-text">Black Jack</div>
                        </div>
                    </Link>
                    <Link to="lobby" style={{ textDecoration: 'none' }}>
                        <div className="game-container">
                            <div className="listed-game-3"></div>
                            <div className="game-text">Mine Sweeper</div>
                        </div>
                    </Link>
                    <Link to="lobby" style={{ textDecoration: 'none' }}>
                        <div className="game-container">
                            <div className="listed-game-4"></div>
                            <div className="game-text">Break Brick</div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Landing;