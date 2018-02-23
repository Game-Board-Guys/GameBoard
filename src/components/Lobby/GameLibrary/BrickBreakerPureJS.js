import React, { Component } from 'react';
import '../Lobby.css';

class Lobby extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            dx: 2,
            dy: -2,
            score: 0,
            lives: 3,
            ballRadius: 10,
            paddleHeight: 10,
            paddleWidth: 75,
            paddleX: 0,
            rightPressed: false,
            leftPressed: false,
            brickRowCount: 3,
            brickColumnCount: 5,
            brickWidth: 75,
            brickHeight: 20,
            brickPadding: 10,
            brickOffsetTop: 30,
            brickOffsetLeft: 30,
            brickField: [],
            ctx: 0,
            canvas: 0,
            drawBall: this.drawBall,
            drawPaddle: this.drawPaddle,
        }
        this.drawBricks = this.drawBricks.bind(this)
        this.drawBall = this.drawBall.bind(this);
        this.drawBricks = this.drawBricks.bind(this);
        this.collisionDetection = this.collisionDetection.bind(this)
        this.drawPaddle = this.drawPaddle.bind(this);
        this.drawScore = this.drawScore.bind(this);
        this.drawLives = this.drawLives.bind(this);
        this.draw = this.draw.bind(this)
        this.keyDownHandler = this.keyDownHandler.bind(this)
        this.keyUpHandler = this.keyUpHandler.bind(this)
    }
    componentDidMount() {
        document.addEventListener("keydown", this.keyDownHandler, false);
        document.addEventListener("keyup", this.keyUpHandler, false);
        let canvas = this.refs.myCanvas
        var ctx = canvas.getContext("2d")
        let paddX = (canvas.width - this.state.paddleWidth) / 2
        let bricks = []
        let x = canvas.width / 2;
        let y = canvas.height - 30;
        for (let c = 0; c < this.state.brickColumnCount; c += 1) {
            bricks[c] = []
            for (let r = 0; r < this.state.brickRowCount; r += 1) {
                bricks[c][r] = { x: 0, y: 0, status: 1 };
            }
        }
        this.setState({ brickField: bricks, canvas: canvas, ctx: ctx, paddleX: paddX, x, y })
    }
    drawBall() {
        this.state.ctx.beginPath();
        this.state.ctx.arc(this.state.x, this.state.y, this.state.ballRadius, 0, Math.PI * 2);
        this.state.ctx.fillStyle = "#0095DD";
        this.state.ctx.fill();
        this.state.ctx.closePath();

    }

    drawPaddle() {
        this.state.ctx.beginPath();
        this.state.ctx.rect(this.state.paddleX, this.state.canvas.height - this.state.paddleHeight, this.state.paddleWidth, this.state.paddleHeight);
        this.state.ctx.fillStyle = "#0095DD";
        this.state.ctx.fill();
        this.state.ctx.closePath();

    }

    drawBricks() {
        for (let c = 0; c < this.state.brickColumnCount; c += 1) {
            for (let r = 0; r < this.state.brickRowCount; r += 1) {
                if (this.state.brickField[c][r].status == 1) {
                    var brickX = (c * (this.state.brickWidth + this.state.brickPadding)) + this.state.brickOffsetLeft;
                    var brickY = (r * (this.state.brickHeight + this.state.brickPadding)) + this.state.brickOffsetTop;
                    this.state.brickField[c][r].x = brickX;
                    this.state.brickField[c][r].y = brickY;
                    this.state.ctx.beginPath();
                    this.state.ctx.rect(brickX, brickY, this.state.brickWidth, this.state.brickHeight);
                    this.state.ctx.fillStyle = "#0095DD";
                    this.state.ctx.fill();
                    this.state.ctx.closePath();
                }
            }
        }
    }

    keyDownHandler(e) {
        if (e.keyCode === 39) {

            this.setState({ rightPressed: true })
        } else if (e.keyCode === 37) {
            this.setState({ leftPressed: true })
        }
    }
    keyUpHandler(e) {
        if (e.keyCode === 39) {
            this.setState({ rightPressed: false })
        } else if (e.keyCode === 37) {
            this.setState({ leftPressed: false })
        }
    }
    // mouseMoveHandler(e) {
    //     var relativeX = e.clientX - this.state.canvas.offsetLeft;
    //     if (relativeX > 0 && relativeX < this.state.canvas.width) {
    //         this.setState({paddleX : relativeX - this.state.paddleWidth / 2})
    //     }
    // }
    collisionDetection() {
        for (let c = 0; c < this.state.brickColumnCount; c += 1) {
            for (let r = 0; r < this.state.brickRowCount; r += 1) {
                var b = this.state.brickField[c][r];
                if (b.status == 1) {
                    if (this.state.x > b.x && this.state.x < b.x + this.state.brickWidth && this.state.y > b.y && this.state.y < b.y + this.state.brickHeight) {
                        this.state.dy = -this.state.dy;
                        b.status = 0;
                        this.state.score += 1;
                        if (this.state.score == this.state.brickRowCount * this.state.brickColumnCount) {
                            alert("YOU WIN, CONGRATULATIONS!");
                            document.location.reload();
                        }
                    }
                }
            }
        }
    }
    drawScore() {
        this.state.ctx.font = '16px Arial';
        this.state.ctx.fillStyle = "#0095DD"
        this.state.ctx.fillText("Score: " + this.state.score, 8, 20);
    }
    drawLives() {
        this.state.ctx.font = "16px Arial";
        this.state.ctx.fillStyle = "#0095DD"
        this.state.ctx.fillText("Lives: " + this.state.lives, this.state.canvas.width - 65, 20)
    }
    draw() {
        this.state.ctx.clearRect(0, 0, this.state.canvas.width, this.state.canvas.height);
        this.drawBricks();
        this.drawBall();
        this.drawPaddle()
        this.collisionDetection()
        this.drawScore()
        this.drawLives()
        if (this.state.x + this.state.dx > this.state.canvas.width - this.state.ballRadius || this.state.x + this.state.dx < this.state.ballRadius) {
            this.state.dx = -this.state.dx;
        }
        if (this.state.y + this.state.dy < this.state.ballRadius) {
            this.state.dy = -this.state.dy;
        }
        else if (this.state.y + this.state.dy > this.state.canvas.height - this.state.ballRadius) {
            if (this.state.x > this.state.paddleX && this.state.x < this.state.paddleX + this.state.paddleWidth) {
                this.setState({ dy: -this.state.dy })
            }
            else {
                this.state.lives--;
                if (!this.state.lives) {
                    alert("GAME OVER");
                    document.location.reload();
                }
                else {
                    this.state.x = this.state.canvas.width / 2;
                    this.state.y = this.state.canvas.height - 30;
                    this.state.dx = 3;
                    this.state.dy = -3;
                    this.state.paddleX = (this.state.canvas.width - this.state.paddleWidth) / 2;
                }
            }
        }

        if (this.state.rightPressed && this.state.paddleX < this.state.canvas.width - this.state.paddleWidth) {
            this.setState({ paddleX: this.state.paddleX + 5 })
        } else if (this.state.leftPressed && this.state.paddleX > 0) {
            this.state.paddleX -= 5
        }
        this.setState({ x: this.state.x + this.state.dx, y: this.state.y + this.state.dy })
        requestAnimationFrame(this.draw)
    }
    render() {


        return (
            <div className="lobby-main-container">
                <div className="upper-lobby-container">
                    <div className="game-box">
                    <p className="game-title">Brick Breaker</p>
                    <canvas ref="myCanvas" width='480px' height='320px'></canvas>
                    </div>
                    <div className="upper-lobby-right">
                        <div className="chat-bar"></div>
                        <div className="lobby-buttons">
                            <button onClick={this.draw}>Start Game</button>
                            <button>Rules</button>
                            <button>Leave Game</button>
                        </div>
                    </div>
                </div>
                <div className="lower-lobby">
                    <div className="game-rules-main">
                        <p className="game-rules-header">Game Rules</p>
                        <div className="rules-container">The objective in Brick Breaker is to eliminate all the bricks at the top of the screen.
                                                         To do this you must use the paddle at the bottom of the screen to bounce the ball up to
                                                         the bricks to break them. To move the paddle, simply use the arrow buttons on your keyboard, 
                                                         your mouse to drag it left to right, or your thumb if playing mobily. To beat the level, 
                                                         break all the bricks. Move your paddle quicker to change direction or trajectory of the 
                                                         ball. You are given three lives to complete as many levels as you can. If the ball hits 
                                                         the bottom of the screen without you making contact with your paddle, you lose a life. 
                                                         To get a new life you must complete three levels. If you leave game early, you will get
                                                         a loss on your stats. 
                                                         
                        </div>
                    </div>
                    <a href="/"><div className="leave-game-button">Leave Game</div></a>
                </div>
            </div>
        )
    }
}

export default Lobby;