import React, { Component } from 'react';
import './Landing.css';
import io from 'socket.io-client';


class Landing extends Component {
    constructor() {
        super();
        this.state = {
            userID: 1,
            messages: []
        }

        this.updateMessages = this.updateMessages.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.setUserId = this.setUserId.bind(this);
    }

    componentDidMount() {
        this.socket = io('/');
        this.socket.on('message dispatched', this.updateMessages)
        this.socket.on('welcome', this.setUserId)
    }

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

    // sendMessage() {
    //     this.socket.emit('message sent', {
    //         message: this.refs.message.value
    //     })
    //     this.refs.message.value = '';
    // }

    
    sendMessage() {
        const message = this.refs.message.value
        console.log(message)
        this.socket.emit('message sent', { message, userid: this.state.user })
        this.updateMessages({ message, user: this.state.userID })
        this.refs.message.value = '';
    }

    // render() {
    //     const messages = this.state.messages.map((e, i) => {
    //         const styles = e.user === this.state.userID ? { alignSelf: "flex-end", backgroundColor: "#2d96fb", color: "white" } : { alignSelf: "flex-start", backgroundColor: "#e5e6ea" }
    //         return (
    //             <p key={i} style={styles}>{e.message}</p>
    //         )
    //     })
    // }

    render() {

        // let colors = ['red', 'blue', 'yellow'];

        // var text = this.state.messages.map((object, i, r) => {
        //     return(<div key={i}>
        //         <h1>{object.message}</h1>
        //     </div>)
        // })
        const messages = this.state.messages.map((e, i) => {
            const styles = e.user === this.state.userID ? { alignSelf: "flex-end", backgroundColor: "#2d96fb", color: "white" } : { alignSelf: "flex-start", backgroundColor: "#e5e6ea" }
            return (
                <p key={i} style={styles}>{e.message}</p>
            )
        })

        return (
            <div className="landing_main_container">
                <div className="arrow-slider-container">
                    <div className="left-arrow"></div>
                    <div className="game-slider-container">
                        <div className="game-slider"></div>
                    </div>
                    <div className="right-arrow"></div>
                </div>
                <div className="landing-chat-box">

                    <input ref="message" />
                    <button onClick={this.sendMessage}>Send</button>

                    {messages}
                    {/* {text} */}
                </div>
                <div className="game-list-container">
                    <div className="listed-game">Checkers...........CheckersCheckers...........CheckersCheckers...........Checkers</div>
                    <div className="listed-game">Bricks...........Bricks...........Bricks...........Bricks</div>
                    <div className="listed-game">Chess...........Chess...........Chess...........Chess</div>
                    <div className="listed-game">Card game...........Card game...........Card game...........Card game</div>
                </div>
            </div>
        )
    }
}

export default Landing;