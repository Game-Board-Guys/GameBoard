import React, { Component } from 'react';
import './Landing.css';
import io from 'socket.io-client';


class Landing extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          messages: []
        }
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount() {
        this.socket = io('/');
        this.socket.on('message', message => {
            console.log("hi")
          this.setState({
            messages: [...this.state.messages, message]
          });
        })
      }
    
      handleSubmit(event) {
        const body = event.target.value;
    
        if (event.keyCode === 13 && body) {
          const message = {
            body,
            from: 'Me'
          }
          this.socket.emit('message', body);
          console.log(body)
        //   this.setState({
        //     messages: [...this.state.messages, body]
        //   });
          event.target.value = '';
          
        }
      }

    render(){

    let colors = ['red', 'blue', 'yellow'];

    // let messages = this.state.messages.map((message, index) => {
    //   return <li className="comment" key={index}><b style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{message.from}:</b> {message.body}</li>
    // });

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
                
                <input type="text" placeholder="Enter a message..." onKeyUp={this.handleSubmit} />
                {this.state.messages}
                
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