import React, { Component } from 'react';
import './EditProfile.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';


class EditProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            aboutMe: '',
            id: 0
        }
        this.handleImgClick = this.handleImgClick.bind(this);
    }

    setUsername(value){
        this.setState({
            username: value
        })
    }

    setAboutMe(value){
        this.setState({
            aboutMe: value
        })
    }

    handleImgClick() {
        console.log(this.state.id)
        this.setState({
            id: 1
        })
        console.log(this.state.id)
    }

    render(){
        return (
            <div className="main-edit-container">
            <div className="avatar-modal">
                <div onClick={this.handleImgClick}>mountain</div>
                {/* <div onClick={this.setState({id: 1})}>pizza</div>
                <div onClick={this.setState({id: 2})}>cat</div>
                <div onClick={this.setState({id: 3})}>plane</div> */}
            </div>
                <div className="edit-body">
                    <div className="edit-pic-container">
                        <img src="https://lh3.googleusercontent.com/-Sh2ali7Rm1Q/AAAAAAAAAAI/AAAAAAAAAMY/eYgSvFha8ww/photo.jpg" className="user-profile-img"></img>
                        <button className="change-picture-button">Change Picture</button>
                    </div>
                    <div className="edit-info-container">
                        <span className="username-title">Username</span>
                        <input className="change-name"
                            type="text" 
                            onChange={e => this.setUsername(e.target.value)} 
                            value={this.state.username}>
                        </input>
                        <span className="about-me-title">About Me</span>
                        <textarea className="about-me"
                            maxLength="300"type="text" 
                            onChange={e => this.setAboutMe(e.target.value)} 
                            value={this.state.aboutMe}>
                        </textarea>
                        <a href="/profile">
                            <button className="save-changes-button">Save Changes</button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {/*redux stuff*/})(EditProfile);