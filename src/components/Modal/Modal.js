import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    closeModal = (e) => {
        this.props.closeModal(e);
    }

    onClose1 = (e) => {
        this.props.showChosenImg1();
    }

    onClose2 = (e) => {
        this.props.showChosenImg2();
    }

    onClose3 = (e) => {
        this.props.showChosenImg3();
    }

    onClose4 = (e) => {
        this.props.showChosenImg4();
    }

    onClose5 = (e) => {
        this.props.showChosenImg5();
    }

    onClose6 = (e) => {
        this.props.showChosenImg6();
    }

    onClose7 = (e) => {
        this.props.showChosenImg7();
    }

    onClose8 = (e) => {
        this.props.showChosenImg8();
    }

    render() {
        console.log(this.props)
        if (!this.props.show) {
            return null;
        }
        return (
            <div>
                <div className="backdrop" onClick={(e) => {this.closeModal(e)}}></div>
                <div className="modal-style">
                    <div className="closing-x" onClick={(e) => {this.closeModal(e)}}>X</div>
                    <div className="avatar-modal">
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/vCjxv9S.jpg" className="picture-name" onClick={this.onClose1}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/LUGHTal.jpg" className="picture-name" onClick={this.onClose2}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/gdwBnlM.jpg" className="picture-name" onClick={this.onClose3}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/liTLW97.png" className="picture-name" onClick={this.onClose4}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/cnGlWJl.jpg" className="picture-name" onClick={this.onClose5}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/1HKf7ga.jpg" className="picture-name" onClick={this.onClose6}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/X6Inegp.jpg" className="picture-name" onClick={this.onClose7}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/xGHnLxk.jpg" className="picture-name" onClick={this.onClose8}/>
                        </div>
                    </div>
                    <div className="footer-style"></div>
                </div>
            </div>
        )
    }
}