import React from 'react';
import './Chat.css';
import io from 'socket.io-client';
import axios from 'axios';

class Chat extends React.Component {
  constructor(props) {
    super(props);

        this.state = {
        userID: 1,
        username: '',
        messages: []
}

// ----sockets binds-----
      this.updateMessages = this.updateMessages.bind(this);
      this.sendMessage = this.sendMessage.bind(this);
      this.setUserId = this.setUserId.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
     }

detectScreenSize() {
      if (window.screen.width === 1440 || window.screen.width === 1680)
          return {
              height: this.props.height ? this.props.height : '400px',
              width: this.props.width ? this.props.width : '400px'
            }
                else
                return {};
            }

componentDidMount() {
        console.log(window.screen);
        // this.state.sliderImages[0]
            this.socket = io('/');
            this.socket.on('message dispatched', this.updateMessages);
            this.socket.on('welcome', this.setUserId);

        axios.get('/auth/me').then((res) => {
            this.setState({
                userID: res.data.auth_id,
                username: res.data.handle
              });

            })
        }

// -------socket methods--------
updateMessages(message) {
      const updatedMessages = this.state.messages.slice();
          updatedMessages.push(message);
              this.setState({
                  messages: updatedMessages
                }, () => this.refs.box.scrollTop = this.refs.box.scrollHeight);
              console.log(this.state.messages); // We will get rid of this later.
      }

setUserId(user) {
    this.setState(user);
}

sendMessage() {
      const message = this.refs.message.value;
          this.socket.emit('message sent', { message, userid: this.state.user });
          this.updateMessages({ message, user: this.state.userID });
          this.refs.message.value = '';
}

handleSubmit(event) {
      if (event.keyCode === 13) {
          this.sendMessage();
    }
}

render() {
      const userName = this.state.username ? this.state.username + ': ' : 'Guest: ';
      const messages = this.state.messages.map((e, i) => {
      const colors = e.user === this.state.userID ? {color: '#ff316c'} : {color: '#6bd9ed'};
      const styles = e.user === this.state.userID ? { alignSelf: "flex-end", color: "#fff", paddingLeft: "7px", fontWeight: "900", fontSize: "20px" } : { alignSelf: "flex-start", color: "#fff", fontWeight: "900", paddingLeft: "7px", fontSize: "20px" };
        return (
            <p key={i} style={styles}><span style={colors}>{userName}</span>{e.message}</p>
          );
        });

// let box = React.createElement('div', {className: 'landing-chat-box'}, messages);


return (
    <div className="chat">
    <div className="landing-chat-box" ref="box">
        {messages}
    </div>
    <div className="chat-control">
        <input className="chat-input" ref="message" onKeyUp={this.handleSubmit} style={{width: this.props.width ? `${Number(this.props.width.replace("px", "")) / 2}px` : {}}}/>
        <button className="chat-button" onClick={this.sendMessage}>Send</button>
    </div>
    </div>

    );
  }
}

export default Chat;