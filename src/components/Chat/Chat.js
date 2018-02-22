import React from 'react';
import './Chat.css';
import io from 'socket.io-client';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: 1, // 1 is a placeholder until we have user accounts up.
      messages: []
    }

    // ----sockets binds-----
    this.updateMessages = this.updateMessages.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.setUserId = this.setUserId.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // this.state.sliderImages[0]
    this.socket = io('/');
    this.socket.on('message dispatched', this.updateMessages)
    this.socket.on('welcome', this.setUserId)
  }

    // -------socket methods--------
    updateMessages(message) {
      const updatedMessages = this.state.messages.slice();
      updatedMessages.push(message);
      this.setState({
        messages: updatedMessages
      });
      console.log(this.state.messages);
    }

    setUserId(user) {
      this.setState(user);
    }

    sendMessage() {
      const message = this.refs.message.value;
      console.log(message);
      this.socket.emit('message sent', { message, userid: this.state.user });
      this.updateMessages({ message, user: this.state.userID });
      this.refs.message.value = '';
    }

    handleSubmit(event) {
      if (event.keyCode === 13)
        this.sendMessage()
    }

  render() {

    const messages = this.state.messages.map((e, i) => {
      const styles = e.user === this.state.userID ? { alignSelf: "flex-end", color: "#9C0D38", paddingLeft: "7px", fontWeight: "900", fontSize: "20px" } : { alignSelf: "flex-start", color: "#E9D758", fontWeight: "900", paddingLeft: "7px", fontSize: "20px" };
      return (
        <p key={i} style={styles}>{e.message}</p>
      );
    });

    return (
      <div className="chat">
        <div className="landing-chat-box">
          {messages}
        </div>
        <div className="chat-control">
          <input className="chat-input" ref="message" onKeyUp={this.handleSubmit} />
          <button className="chat-button" onClick={this.sendMessage}>Send</button>
        </div>
      </div>
    );
  }
}

export default Chat;