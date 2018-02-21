import React,{Component} from 'react';
import '../Lobby.css';

window.PIXI   = require('phaser-ce/build/custom/pixi');
window.p2     = require('phaser-ce/build/custom/p2');
window.Phaser = require('phaser-ce/build/custom/phaser-split');

class BrickBreaker extends Component {

Game(){
      var game = new window.Phaser.Game(480, 320, window.Phaser.AUTO, 'Breaking', {
          preload: preload, create: create, update: update
      });
      
      var ball;
      var paddle;
      var bricks;
      var newBrick;
      var brickInfo;
      var textStyle = { font: '18px Arial', fill: '#0095DD' };
      var testTest;
      var scoreText;
      var score = 0;
      var lives = 3;
      var livesText;
      var lifeLostText;
      var playing = false;
      var startButton;
      
      
      function preload() {
      
          game.scale.scaleMode = window.Phaser.ScaleManager.NO_SCALE;
          game.scale.pageAlignHorizontally = true;
          game.scale.pageAlignVertically = true;
          game.stage.backgroundColor = '#eee';
      
          game.load.spritesheet('ball', 'img/wobble.png', 20, 20);
          game.load.image('paddle', 'img/paddle.png');
          game.load.image('brick', 'img/brick.png');
          game.load.spritesheet('button', 'img/button.png', 120, 40);
      }
      function create() {
          game.physics.startSystem(window.Phaser.Physics.ARCADE);
          ball = game.add.sprite(50, 250, 'ball');
          ball.animations.add('wobble', [0, 1, 0, 2, 0, 1, 0, 2, 0], 24)
          ball.anchor.set(0.5);
          game.physics.enable(ball, window.Phaser.Physics.ARCADE);
          ball.body.collideWorldBounds = true;
          ball.body.bounce.set(1);
      
          game.physics.arcade.checkCollision.down = false;
          ball.checkWorldBounds = true;
          ball.events.onOutOfBounds.add(ballLeaveScreen, this)
      
          paddle = game.add.sprite(game.world.width * 0.5, game.world.height - 5, 'paddle')
          paddle.anchor.set(0.5, 1);
          game.physics.enable(paddle, window.Phaser.Physics.ARCADE);
          paddle.body.immovable = true;
          initBricks();
      
          scoreText = game.add.text(5, 5, 'Points: 0', textStyle)
      
          livesText = game.add.text(game.world.width - 5, 5, 'Lives: ' + lives, textStyle)
          livesText.anchor.set(1, 0);
          lifeLostText = game.add.text(game.world.width * 0.5, game.world.height * 0.5, 'Life lost, click to continue', textStyle)
          lifeLostText.anchor.set(0.5);
          lifeLostText.visible = false;
          startButton = game.add.button(game.world.width * 0.5, game.world.height * 0.5, 'button', startGame, this, 1, 0, 2);
          startButton.anchor.set(0.5)
      
      }
      function update() {
          game.physics.arcade.collide(ball, paddle, ballHitPaddle);
          game.physics.arcade.collide(ball, bricks, ballHitBrick);
          if (playing) {
              paddle.x = game.input.x || game.world.width * 0.5;
          }
      }
      
      function initBricks() {
          brickInfo = {
              width: 50,
              height: 20,
              count: {
                  row: 7,
                  col: 3
              },
              offset: {
                  top: 50,
                  left: 60
              },
              padding: 10
          };
          bricks = game.add.group();
          for (let c = 0; c < brickInfo.count.col; c += 1) {
              for (let r = 0; r < brickInfo.count.row; r += 1) {
                  var brickX = (r * (brickInfo.width + brickInfo.padding)) + brickInfo.offset.left;
                  var brickY = (c * (brickInfo.height + brickInfo.padding)) + brickInfo.offset.top;
                  newBrick = game.add.sprite(brickX, brickY, 'brick');
                  game.physics.enable(newBrick, window.Phaser.Physics.ARCADE);
                  newBrick.body.immovable = true;
                  newBrick.anchor.set(0.5);
                  bricks.add(newBrick);
              }
          }
      }
      
      function ballHitBrick(ball, brick) {
          var killTween = game.add.tween(brick.scale);
          killTween.to({ x: 0, y: 0 }, 200, window.Phaser.Easing.Linear.None);
          killTween.onComplete.addOnce(function () {
              brick.kill();
          }, this)
          killTween.start();
          score += 10;
          scoreText.setText('Points: ' + score)
      
          var count_alive = 0;
          for (let i = 0; i < bricks.children.length; i += 1) {
              if (bricks.children[i].alive == true) {
                  count_alive += 1
              }
          }
          if (score == 210) {
              alert('You won the game, congratulations!');
              document.location.reload();
          }
      }
      
      function ballLeaveScreen() {
          lives -= 1;
          if (lives) {
              livesText.setText('Lives: ' + lives);
              lifeLostText.visible = true;
              ball.reset(game.world.width * 0.5, game.world.height - 25);
              paddle.reset(game.world.width * 0.5, game.world.height - 5);
              game.input.onDown.addOnce(function () {
                  lifeLostText.visible = false;
                  ball.body.velocity.set(150, -150);
              }, this)
          } else {
              alert('You lost, game over!')
              document.location.reload();
          }
      }
      
      function ballHitPaddle(ball, paddle) {
          ball.animations.play('wobble')
          ball.body.velocity.x = -1*5*(paddle.x-ball.x);
      }
      
      function startGame() {
          startButton.destroy();
          ball.body.velocity.set(150, -150);
          playing = true;
      }

  }
    
  render() {
    
    return (
        <div className="lobby-main-container">
        <div className="upper-lobby-container">
        <div id="Breaking">{this.Game()}</div>
        <div className="upper-lobby-right">
        <div className="chat-bar"></div>
         <div className="lobby-buttons"><button>Rules</button>   <button>Leave Game</button></div>
        </div>
        </div>
        <div className="rules-container"></div>
        <div className="leave-game-button"></div>
    </div>
    );
  }
}

export default BrickBreaker;