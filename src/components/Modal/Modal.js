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
    
    onClose9 = (e) => {
        this.props.showChosenImg9();
    }
    
    onClose10 = (e) => {
        this.props.showChosenImg10();
    }
    
    onClose11 = (e) => {
        this.props.showChosenImg11();
    }
    
    onClose12 = (e) => {
        this.props.showChosenImg12();
    }
    
    onClose13 = (e) => {
        this.props.showChosenImg13();
    }
    
    onClose14 = (e) => {
        this.props.showChosenImg14();
    }
    
    onClose15 = (e) => {
        this.props.showChosenImg15();
    }
    
    onClose16 = (e) => {
        this.props.showChosenImg16();
    }
    
    onClose17 = (e) => {
        this.props.showChosenImg17();
    }
    
    onClose18 = (e) => {
        this.props.showChosenImg18();
    }
    
    onClose19 = (e) => {
        this.props.showChosenImg19();
    }
    
    onClose20 = (e) => {
        this.props.showChosenImg20();
    }
    
    onClose21 = (e) => {
        this.props.showChosenImg21();
    }

    render() {
        // console.log(this.props)
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
                            <img src="https://i.imgur.com/vCjxv9S.jpg" alt="" className="picture-name" onClick={this.onClose1}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/LUGHTal.jpg" alt="" className="picture-name" onClick={this.onClose2}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/gdwBnlM.jpg" alt="" className="picture-name" onClick={this.onClose3}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/liTLW97.png" alt="" className="picture-name" onClick={this.onClose4}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/cnGlWJl.jpg" alt="" className="picture-name" onClick={this.onClose5}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/1HKf7ga.jpg" alt="" className="picture-name" onClick={this.onClose6}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/X6Inegp.jpg" alt="" className="picture-name" onClick={this.onClose7}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/xGHnLxk.jpg" alt="" className="picture-name" onClick={this.onClose8}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/xOwTCBh.jpg" alt="" className="picture-name" onClick={this.onClose9}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/tz4E54E.jpg" alt="" className="picture-name" onClick={this.onClose10}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/1DfL734.jpg" alt="" className="picture-name" onClick={this.onClose11}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/xqvHKng.jpg" alt="" className="picture-name" onClick={this.onClose12}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/diTObOl.jpg" alt="" className="picture-name" onClick={this.onClose13}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/KZbROKV.jpg" alt="" className="picture-name" onClick={this.onClose14}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/tGgRip2.jpg" alt="" className="picture-name" onClick={this.onClose15}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/gSWD3ia.jpg" alt="" className="picture-name" onClick={this.onClose16}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/1sN8zNH.jpg" alt="" className="picture-name" onClick={this.onClose17}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/VeB79d4.jpg" alt="" className="picture-name" onClick={this.onClose18}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/UUDP2uj.png" alt="" className="picture-name" onClick={this.onClose19}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/3AFY66F.jpg" alt="" className="picture-name" onClick={this.onClose20}/>
                        </div>
                        <div onClick={(e) => {this.closeModal(e)}} className="picture-name-container">
                            <img src="https://i.imgur.com/eFeqD34.jpg" alt="" className="picture-name" onClick={this.onClose21}/>
                        </div>
                    </div>
                    <div className="footer-style"></div>
                </div>
            </div>
        )
    }
}