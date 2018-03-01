import React, { Component } from 'react';
import './EditProfile.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
        this.handleImg9Click = this.handleImg9Click.bind(this);
        this.handleImg10Click = this.handleImg10Click.bind(this);
        this.handleImg11Click = this.handleImg11Click.bind(this);
        this.handleImg12Click = this.handleImg12Click.bind(this);
        this.handleImg13Click = this.handleImg13Click.bind(this);
        this.handleImg14Click = this.handleImg14Click.bind(this);
        this.handleImg15Click = this.handleImg15Click.bind(this);
        this.handleImg16Click = this.handleImg16Click.bind(this);
        this.handleImg17Click = this.handleImg17Click.bind(this);
        this.handleImg18Click = this.handleImg18Click.bind(this);
        this.handleImg19Click = this.handleImg19Click.bind(this);
        this.handleImg20Click = this.handleImg20Click.bind(this);
        this.handleImg21Click = this.handleImg21Click.bind(this);
        this.updateUserInfo = this.updateUserInfo.bind(this);
    }

    componentDidMount() {
        axios.get('/auth/me').then((res) => {
            // console.log(res.data)
            // this.setState({ picture: res.data.img, name: res.data.first_name })
            let user = res.data.auth_id;
            this.setState({ user: res.data.auth_id,
                            username: res.data.handle,
                            aboutMe: res.data.bio})
            axios.get(`/api/testuser?auth=${user}`).then(res => {
                console.log('user from the db', res.data)
                this.setState({ img: res.data[0].img })
                console.log(this.state.img)
                console.log(this.state.user)
            })
            var image = this.state.img;
        })
        // ---set img on load---
        // console.log("user", user);

    }

    updateUserInfo() {
        axios.put('/api/editUserInfo', {
            handle: this.state.username,
            bio: this.state.aboutMe,
            img: this.state.img,
            auth_id: this.state.user
        }).then(window.location.replace('http://localhost:3001/profile'))
    }

    setUsername(value) {
        this.setState({
            username: value
        })
    }

    setAboutMe(value) {
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

    handleImg9Click() {
        this.setState({
            img: 'https://i.imgur.com/xOwTCBh.jpg',
            show: false
        })
    }

    handleImg10Click() {
        this.setState({
            img: 'https://i.imgur.com/tz4E54E.jpg',
            show: false
        })
    }

    handleImg11Click() {
        this.setState({
            img: 'https://i.imgur.com/1DfL734.jpg',
            show: false
        })
    }

    handleImg12Click() {
        this.setState({
            img: 'https://i.imgur.com/xqvHKng.jpg',
            show: false
        })
    }

    handleImg13Click() {
        this.setState({
            img: 'https://i.imgur.com/diTObOl.jpg',
            show: false
        })
    }

    handleImg14Click() {
        this.setState({
            img: 'https://i.imgur.com/KZbROKV.jpg',
            show: false
        })
    }

    handleImg15Click() {
        this.setState({
            img: 'https://i.imgur.com/tGgRip2.jpg',
            show: false
        })
    }

    handleImg16Click() {
        this.setState({
            img: 'https://i.imgur.com/gSWD3ia.jpg',
            show: false
        })
    }

    handleImg17Click() {
        this.setState({
            img: 'https://i.imgur.com/1sN8zNH.jpg',
            show: false
        })
    }

    handleImg18Click() {
        this.setState({
            img: 'https://i.imgur.com/VeB79d4.jpg',
            show: false
        })
    }

    handleImg19Click() {
        this.setState({
            img: 'https://i.imgur.com/UUDP2uj.png',
            show: false
        })
    }

    handleImg20Click() {
        this.setState({
            img: 'https://i.imgur.com/3AFY66F.jpg',
            show: false
        })
    }

    handleImg21Click() {
        this.setState({
            img: 'https://i.imgur.com/eFeqD34.jpg',
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

    render() {
        // console.log(this.state)
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
                    showChosenImg9={this.handleImg9Click}
                    showChosenImg10={this.handleImg10Click}
                    showChosenImg11={this.handleImg11Click}
                    showChosenImg12={this.handleImg12Click}
                    showChosenImg13={this.handleImg13Click}
                    showChosenImg14={this.handleImg14Click}
                    showChosenImg15={this.handleImg15Click}
                    showChosenImg16={this.handleImg16Click}
                    showChosenImg17={this.handleImg17Click}
                    showChosenImg18={this.handleImg18Click}
                    showChosenImg19={this.handleImg19Click}
                    showChosenImg20={this.handleImg20Click}
                    showChosenImg21={this.handleImg21Click}
                    onClose1={this.showModal}
                    onClose2={this.showModal}
                    onClose3={this.showModal}
                    onClose4={this.showModal}
                    onClose5={this.showModal}
                    onClose6={this.showModal}
                    onClose7={this.showModal}
                    onClose8={this.showModal}
                    onClose9={this.showModal}
                    onClose10={this.showModal}
                    onClose11={this.showModal}
                    onClose12={this.showModal}
                    onClose13={this.showModal}
                    onClose14={this.showModal}
                    onClose15={this.showModal}
                    onClose16={this.showModal}
                    onClose17={this.showModal}
                    onClose18={this.showModal}
                    onClose19={this.showModal}
                    onClose20={this.showModal}
                    onClose21={this.showModal}
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
                            maxLength="300" type="text"
                            onChange={e => this.setAboutMe(e.target.value)}
                            value={this.state.aboutMe}>
                        </textarea>
                        <div className="profile-buttons-bottom">
                        {/* <a href="/profile"> */}
                        <button className="save-changes-button" onClick={this.updateUserInfo}>Save Changes</button>
                        {/* </a> */}
                        <a href="/profile"><button className="save-changes-button">Cancel</button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, {/*redux stuff*/ })(EditProfile);