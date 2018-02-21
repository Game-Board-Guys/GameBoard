import React, { Component } from 'react';
import './EditProfile.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class EditProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render(){
        return (
            <div className="main-edit-container">
                <img src="https://lh3.googleusercontent.com/-Sh2ali7Rm1Q/AAAAAAAAAAI/AAAAAAAAAMY/eYgSvFha8ww/photo.jpg" className="user-profile-img" />
                <div className="edit-info-container">
                    <span className="username-title">Username</span>
                    <input className="change-name"></input>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {/*redux stuff*/})(EditProfile);