export default function level1State() {
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
    var playing = true;
    var startButton;
    var ballSpeed;
    return {
        init: function (data) {
            ballSpeed = data.ballSpeed;
            lives = data.lives;
        },
        create: function () {
            ball = this.game.add.sprite(50, 250, 'ball');
            ball.animations.add('wobble', [0, 1, 0, 2, 0, 1, 0, 2, 0], 24)
            ball.anchor.set(0.5);
            this.game.physics.enable(ball, window.Phaser.Physics.ARCADE);
            ball.body.collideWorldBounds = true;
            ball.body.bounce.set(1);

            this.game.physics.arcade.checkCollision.down = false;
            ball.checkWorldBounds = true;
            ball.events.onOutOfBounds.add(this.ballLeaveScreen, this)
            paddle = this.game.add.sprite(this.game.world.width * 0.5, this.game.world.height - 5, 'paddle')
            paddle.anchor.set(0.5, 1);
            this.game.physics.enable(paddle, window.Phaser.Physics.ARCADE);
            paddle.body.immovable = true;
            this.initBricks();

            scoreText = this.game.add.text(5, 5, 'Points: 0', this.textStyle)

            livesText = this.game.add.text(this.game.world.width - 5, 5, 'Lives: ' + lives, textStyle)
            livesText.anchor.set(1, 0);
            lifeLostText = this.game.add.text(this.game.world.width * 0.5, this.game.world.height * 0.5, 'Life lost, click to continue', this.textStyle)
            lifeLostText.anchor.set(0.5);
            lifeLostText.visible = false;
            ball.body.velocity.set(ballSpeed, -ballSpeed);

        },
        update: function () {
            this.game.physics.arcade.collide(ball, paddle, this.ballHitPaddle);
            this.game.physics.arcade.collide(ball, bricks, this.ballHitBrick, null, this);
            if (playing) {
                paddle.x = this.game.input.x || this.game.world.width * 0.5;
            }
        },
        initBricks: function () {
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
            bricks = this.game.add.group();
            for (let c = 0; c < brickInfo.count.col; c += 1) {
                for (let r = 0; r < brickInfo.count.row; r += 1) {
                    var brickX = (r * (brickInfo.width + brickInfo.padding)) + brickInfo.offset.left;
                    var brickY = (c * (brickInfo.height + brickInfo.padding)) + brickInfo.offset.top;
                    newBrick = this.game.add.sprite(brickX, brickY, 'brick');
                    this.game.physics.enable(newBrick, window.Phaser.Physics.ARCADE);
                    newBrick.body.immovable = true;
                    newBrick.anchor.set(0.5);
                    bricks.add(newBrick);
                }
            }
        },
        ballHitBrick: function (ball, brick) {
            var killTween = this.game.add.tween(brick.scale);
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
            if (count_alive == 0) {
                //link to win
                this.win();
            }
        },
        ballLeaveScreen: function () {
            lives -= 1;
            if (lives) {
                livesText.setText('Lives: ' + lives);
                lifeLostText.visible = true;
                ball.reset(this.game.world.width * 0.5, this.game.world.height - 25);
                paddle.reset(this.game.world.width * 0.5, this.game.world.height - 5);
                this.game.input.onDown.addOnce(function () {
                    lifeLostText.visible = false;
                    ball.body.velocity.set(ballSpeed, -ballSpeed);
                }, this)
            } else {
                //link to lose
                this.lose();
            }
        },
        ballHitPaddle: function (ball, paddle) {
            ball.animations.play('wobble')
            ball.body.velocity.x = -1 * 5 * (paddle.x - ball.x);
        },
        lose: function () {
            this.game.state.start('lose', true, false, { score: score })
        },
        win: function () {
            this.game.state.start('level2', true, false, { ball: ball, paddle: paddle, score: score, lives: lives + 1, ballSpeed: ballSpeed })

        }

    }
}
