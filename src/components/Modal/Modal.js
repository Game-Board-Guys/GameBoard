import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    onClose = (e) => {
        this.props.showChosenImg();
        // this.props.onClose && this.props.onClose(e);
    }

    render() {
        console.log(this.props)
        if (!this.props.show) {
            return null;
        }
        return (
            <div>
            <div className="backdrop" onClick={(e) => {this.onClose(e)}}>
            </div>
                <div className="modal-style">
                <div className="avatar-modal">
                <div 
                className="picture-name-container">
                    <div className="picture-name" onClick={this.onClose}>money</div>
                </div>
                <div onClick={(e) => {this.onClose(e)}} className="picture-name-container">
                    <div className="picture-name" onClick={this.handleImg2Click}>person</div>
                </div>
                <div onClick={(e) => {this.onClose(e)}} className="picture-name-container">
                    <div className="picture-name" onClick={this.handleImg3Click}>flower</div>
                </div>
                <div onClick={(e) => {this.onClose(e)}} className="picture-name-container">
                    <div className="picture-name" onClick={this.handleImg4Click}>chair</div>
                </div>
            </div>
                    <div className="footer-style"></div>
                </div>
            </div>
        )
    }
}