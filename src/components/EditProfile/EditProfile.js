import React, { Component } from 'react';
import './EditProfile.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import Modal from './../Modal/Modal';


class EditProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            aboutMe: '',
            img: 'https://png.icons8.com/metro/1600/decision.png',
            user: '',
            show: false
        }
        this.handleImg1Click = this.handleImg1Click.bind(this);
        this.handleImg2Click = this.handleImg2Click.bind(this);
        this.handleImg3Click = this.handleImg3Click.bind(this);
        this.handleImg4Click = this.handleImg4Click.bind(this);
        this.handleImg5Click = this.handleImg5Click.bind(this);
        this.handleImg6Click = this.handleImg6Click.bind(this);
        this.handleImg7Click = this.handleImg7Click.bind(this);
        this.handleImg8Click = this.handleImg8Click.bind(this);
    }

    componentDidMount(){
        axios.get('/auth/me').then((res) => {
            console.log(res.data)
            // this.setState({ picture: res.data.img, name: res.data.first_name })
            let user = res.data.auth_id;
            this.setState({ user: res.data.auth_id })
            axios.get(`/api/testuser?auth=${user}`).then(res => {
                console.log(res.data)
                this.setState({ img: res.data[0].img })
                console.log(this.state.img)
                console.log(user)
            })
            var image = this.state.img;
        })
        // ---set img on load---
        // console.log("user", user);
        
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

    // ---------avatar changes---------
    handleImg1Click() {
        console.log('handle image click')
        this.setState({
            img: 'https://i.imgur.com/vCjxv9S.jpg',
            show: false
        })
    }
    handleImg2Click() {
        this.setState({
            img: 'https://i.imgur.com/LUGHTal.jpg',
            show: false
        })
    }
    handleImg3Click() {
        this.setState({
            img: 'https://i.imgur.com/gdwBnlM.jpg',
            show: false
        })
    }
    handleImg4Click() {
        this.setState({
            img: 'https://i.imgur.com/liTLW97.png',
            show: false
        })
    }

    handleImg5Click() {
        this.setState({
            img: 'https://i.imgur.com/cnGlWJl.jpg',
            show: false
        })
    }

    handleImg6Click() {
        this.setState({
            img: 'https://i.imgur.com/1HKf7ga.jpg',
            show: false
        })
    }

    handleImg7Click() {
        this.setState({
            img: 'https://i.imgur.com/X6Inegp.jpg',
            show: false
        })
    }

    handleImg8Click() {
        this.setState({
            img: 'https://i.imgur.com/xGHnLxk.jpg',
            show: false
        })
    }

    showModal = () => {
        this.setState({
            show: true
        })
    }

    closeTheModal = () => {
        this.setState({
            show: false
        })
    }

    render(){
        console.log(this.state)
        return (
            <div className="main-edit-container">
            <Modal 
             closeModal={this.closeTheModal}
                showChosenImg1={this.handleImg1Click}
                showChosenImg2={this.handleImg2Click}
                showChosenImg3={this.handleImg3Click}
                showChosenImg4={this.handleImg4Click}
                showChosenImg5={this.handleImg5Click}
                showChosenImg6={this.handleImg6Click}
                showChosenImg7={this.handleImg7Click}
                showChosenImg8={this.handleImg8Click}
                onClose1={this.showModal}
                onClose2={this.showModal}
                onClose3={this.showModal}
                onClose4={this.showModal}
                onClose5={this.showModal}
                onClose6={this.showModal}
                onClose7={this.showModal}
                onClose8={this.showModal}
                // closeModal={this.showModal}
                show={this.state.show}>
            </Modal>
                <div className="edit-body">
                    <div className="edit-pic-container">
                        <img src={this.state.img} className="user-profile-img"></img>
                        <button className="change-picture-button" onClick={this.showModal}>Change Picture</button>
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