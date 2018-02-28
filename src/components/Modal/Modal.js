import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    closeModal = (e) => {
        console.log('here')
        this.props.closeModal(e);
    }

    onClose1 = (e) => {
        this.props.showChosenImg1();
        // this.props.onClose && this.props.onClose(e);
    }

    onClose2 = (e) => {
        this.props.showChosenImg2();
        // this.props.onClose && this.props.onClose(e);
    }

    onClose3 = (e) => {
        this.props.showChosenImg3();
        // this.props.onClose && this.props.onClose(e);
    }

    onClose4 = (e) => {
        this.props.showChosenImg4();
        // this.props.onClose && this.props.onClose(e);
    }

    render() {
        console.log(this.props)
        if (!this.props.show) {
            return null;
        }
        return (
            <div>
            <div className="backdrop" onClick={(e) => {this.closeModal(e)}}>
            </div>
                <div className="modal-style">
                <div className="avatar-modal">
                <div 
                className="picture-name-container">
                    <div className="picture-name" onClick={this.onClose1}>money</div>
                </div>
                <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                    <div className="picture-name" onClick={this.onClose2}>person</div>
                </div>
                <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                    <div className="picture-name" onClick={this.onClose3}>flower</div>
                </div>
                <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                    <div className="picture-name" onClick={this.onClose4}>chair</div>
                </div>
            </div>
                    <div className="footer-style"></div>
                </div>
            </div>
        )
    }
}