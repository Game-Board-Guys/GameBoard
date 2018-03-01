import React from 'react';
import './Chat.css';
import io from 'socket.io-client';
import axios from 'axios';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: 1, // 1 is a placeholder until we have user accounts up.
      messages: [],
      username: ''
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
    this.socket.on('message dispatched', this.updateMessages);
    this.socket.on('welcome', this.setUserId);

    axios.get('/auth/me').then((res) => {
      console.log(res.data)
      let user = res.data.auth_id;
      this.setState({
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
      const message = this.state.username + ': ' + this.refs.message.value;
      console.log(message);  // We will get rid of this later.
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
    const messages = this.state.messages.map((e, i) => {
      const styles = e.user === this.state.userID ? { alignSelf: "flex-end", color: "#9C0D38", paddingLeft: "7px", fontWeight: "900", fontSize: "20px" } : { alignSelf: "flex-start", color: "#E9D758", fontWeight: "900", paddingLeft: "7px", fontSize: "20px" };
      return (
        <p key={i} style={styles}>{e.message}</p>
      );
    });

    // let box = React.createElement('div', {className: 'landing-chat-box'}, messages);

    return (
      <div className="chat">
      <div className="landing-chat-box" ref="box" style={{height: this.props.height ? this.props.height : '250px', width: this.props.width ? this.props.width : '900px'}}>
          {messages}
        </div>
        <div className="chat-control">
          <input className="chat-input" ref="message" onKeyUp={this.handleSubmit} style={{width: this.props.width ? `${Number(this.props.width.replace("px", "")) / 2}px` : "450px"}}/>
          <button className="chat-button" onClick={this.sendMessage}>Send</button>
        </div>
      </div>
    );
  }
}

export default Chat;
