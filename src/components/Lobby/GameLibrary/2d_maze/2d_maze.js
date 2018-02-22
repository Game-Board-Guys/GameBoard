// import Reat, {Component} from 'react'
window.PIXI = require('phaser-ce/build/custom/pixi');
window.p2 = require('phaser-ce/build/custom/p2');
window.Phaser = require('phaser-ce/build/custom/phaser-split');

    //Global Ball - window size
    var Ball = {
        _WIDTH: 320,
        _HEIGHT: 480
    };
    /* boot functions */
    Ball.Boot = function (game) { }
    Ball.Boot.prototype = {
        preload: function () {
            this.load.image('preloaderBg', 'img/2d-maze/loading-bg.png');
            this.load.image('preloaderBar', 'img/2d-maze/loading-bar.png');
        },
        create: function () {
            this.game.scale.scaleMode = window.Phaser.ScaleManager.SCALE_ALL;
            this.game.scale.pageAlignHorizontally = true; 
            this.game.scale.pageAlignVertically = true;
            this.game.state.start('Preloader');
        }
    }

    /* Preload Functions */
    Ball.Preloader = function (game) { };
    Ball.Preloader.prototype = {
        preload: function () {
            this.preloadBg = this.add.sprite((Ball._WIDTH - 297) * 0.5, (Ball._HEIGHT - 145) * 0.5, 'preloaderBg');
            this.preloadBar = this.add.sprite((Ball._WIDTH - 158) * 0.5, (Ball._HEIGHT - 50) * 0.5, 'preloaderBar');
            this.load.setPreloadSprite(this.preloadBar);

            this.load.image('ball', 'img/2d-maze/ball.png');
            this.load.image('hole', 'img/2d-maze/hole.png');
            this.load.image('element-w', 'img/2d-maze/element-w.png');
            this.load.image('element-h', 'img/2d-maze/element-h.png');
            this.load.image('panel', 'img/2d-maze/panel.png');
            this.load.image('title', 'img/2d-maze/title.png');
            this.load.image('button-pause', 'img/2d-maze/button-pause.png');
            this.load.image('screen-bg', 'img/2d-maze/screen-bg.png');
            this.load.image('screen-mainmenu', 'img/2d-maze/screen-mainmenu.png');
            this.load.image('screen-howtoplay', 'img/2d-maze/screen-howtoplay.png');
            this.load.image('border-horizontal', 'img/2d-maze/border-horizontal.png');
            this.load.image('border-vertical', 'img/2d-maze/border-vertical.png');

            this.load.spritesheet('button-audio', 'img/2d-maze/button-audio.png', 35, 35);
            this.load.spritesheet('button-start', 'img/2d-maze/button-start.png', 146, 51);

            // this.load.audio('audio-bounce', ['audio/bounce.ogg', 'audio/bounce.mp3', 'audio/bounce.m4a']);
        },
        create: function () {
            this.game.state.start('MainMenu')
        }
    }
    /* Main Menu Functions */
    Ball.MainMenu = function (game) { };
    Ball.MainMenu.prototype = {
        create: function () {
            this.add.sprite(0, 0, 'screen-mainmenu');
            this.gameTitle = this.add.sprite(Ball._WIDTH * 0.5, 40, 'title');
            this.gameTitle.anchor.set(0.5, 0);
            this.startButton = this.add.button(Ball._WIDTH * 0.5, 200, 'button-start', this.startGame, this, 2, 0, 1)
            this.startButton.anchor.set(0.5, 0);
            this.startButton.input.useHandCursor = true;
        },
        startGame: function () {
            this.game.state.start('Howto')
        }
    }

    /* How to */
    Ball.Howto = function (game) { };
    Ball.Howto.prototype = {
        create: function () {
            this.buttonContinue = this.add.button(0, 0, 'screen-howtoplay', this.startGame, this);
        },
        startGame: function () {
            this.game.state.start('Game');
        }
    };

    /* Game state, where the magic happens */
    Ball.Game = function (game) { };
    Ball.Game.prototype = {
        create: function () {
            this.add.sprite(0, 0, 'screen-bg');
            this.add.sprite(0, 0, 'panel');
            this.physics.startSystem(window.Phaser.Physics.ARCADE);
            this.fontSmall = { font: "16px Arial", fill: "#e4beef" };
            this.fontBig = { font: "24px Arial", fill: "#e4beef" };
            this.fontMessage = { font: "24px Arial", fill: "#e4beef", align: "center", stroke: "#320C3E", strokeThickness: 4 };
            this.audioStatus = true;
            this.timer = 0;
            this.totalTimer = 0;
            this.level = 1;
            this.maxLevels = 5;
            this.movementForce = 10;
            this.ballStartPos = { x: Ball._WIDTH * 0.5, y: 450 };

            this.pauseButton = this.add.button(Ball._WIDTH - 8, 8, 'button-pause', this.managePause, this);
            this.pauseButton.anchor.set(1, 0);
            this.pauseButton.input.useHandCursor = true;
            this.audioButton = this.add.button(Ball._WIDTH - this.pauseButton.width - 8 * 2, 8, 'button-audio', this.manageAudio, this);
            this.audioButton.anchor.set(1, 0);
            this.audioButton.input.useHandCursor = true;
            this.audioButton.animations.add('true', [0], 10, true);
            this.audioButton.animations.add('false', [1], 10, true);
            this.audioButton.animations.play(this.audioStatus);
            this.timerText = this.game.add.text(15, 15, "Time: " + this.timer, this.fontBig);
            this.levelText = this.game.add.text(120, 10, "Level: " + this.level + " / " + this.maxLevels, this.fontSmall);
            this.totalTimeText = this.game.add.text(120, 30, "Total time: " + this.totalTimer, this.fontSmall);

            this.hole = this.add.sprite(Ball._WIDTH * 0.5, 90, 'hole');
            this.physics.enable(this.hole, window.Phaser.Physics.ARCADE);
            this.hole.anchor.set(0.5);
            this.hole.body.setSize(2, 2);

            this.ball = this.add.sprite(this.ballStartPos.x, this.ballStartPos.y, 'ball');
            this.ball.anchor.set(0.5);
            this.physics.enable(this.ball, window.Phaser.Physics.ARCADE);
            this.ball.body.setSize(18, 18);
            this.ball.body.bounce.set(0.3, 0.3);

            this.initLevels();
            this.showLevel(1);
            this.keys = this.game.input.keyboard.createCursorKeys();

            Ball._player = this.ball;
            window.addEventListener("deviceorientation", this.handleOrientation, true);

            this.time.events.loop(window.Phaser.Timer.SECOND, this.updateCounter, this);

            this.borderGroup = this.add.group();
            this.borderGroup.enableBody = true;
            this.borderGroup.physicsBodyType = window.Phaser.Physics.ARCADE;
            this.borderGroup.create(0, 50, 'border-horizontal');
            this.borderGroup.create(0, Ball._HEIGHT - 2, 'border-horizontal');
            this.borderGroup.create(0, 0, 'border-vertical');
            this.borderGroup.create(Ball._WIDTH - 2, 0, 'border-vertical');
            this.borderGroup.setAll('body.immovable', true);
            this.bounceSound = this.game.add.audio('audio-bounce');
        },
        initLevels: function () {
            this.levels = [];
            this.levelData = [
                [
                    { x: 80, y: 224, t: 'w' }
                ],
                [
                    { x: 72, y: 320, t: 'w' },
                    { x: 200, y: 320, t: 'h' },
                    { x: 72, y: 150, t: 'w' }
                ],
                [
                    { x: 64, y: 352, t: 'h' },
                    { x: 224, y: 352, t: 'h' },
                    { x: 0, y: 240, t: 'w' },
                    { x: 128, y: 240, t: 'w' },
                    { x: 200, y: 52, t: 'h' }
                ],
                [
                    { x: 78, y: 352, t: 'h' },
                    { x: 78, y: 320, t: 'w' },
                    { x: 0, y: 240, t: 'w' },
                    { x: 192, y: 240, t: 'w' },
                    { x: 30, y: 150, t: 'w' },
                    { x: 158, y: 150, t: 'w' }
                ],
                [
                    { x: 188, y: 352, t: 'h' },
                    { x: 92, y: 320, t: 'w' },
                    { x: 0, y: 240, t: 'w' },
                    { x: 128, y: 240, t: 'w' },
                    { x: 256, y: 240, t: 'h' },
                    { x: 180, y: 52, t: 'h' },
                    { x: 52, y: 148, t: 'w' }
                ]
            ];
            for (var i = 0; i < this.maxLevels; i++) {
                var newLevel = this.add.group();
                newLevel.enableBody = true;
                newLevel.physicsBodyType = window.Phaser.Physics.ARCADE;
                for (var e = 0; e < this.levelData[i].length; e++) {
                    var item = this.levelData[i][e];
                    newLevel.create(item.x, item.y, 'element-' + item.t);
                }
                newLevel.setAll('body.immovable', true);
                newLevel.visible = false;
                this.levels.push(newLevel);
            }
        }, //initializes the level data
        showLevel: function (level) {
            var lvl = level | this.level;
            if (this.levels[lvl - 2]) {
                this.levels[lvl - 2].visible = false;
            }
            this.levels[lvl - 1].visible = true;
        }, //prints the level data on screen
        updateCounter: function () {
            this.timer++;
            this.timerText.setText("Time: " + this.timer);
            this.totalTimeText.setText("Total time: " + (this.totalTimer + this.timer));
        }, //updates time spent and total time playing
        managePause: function () {
            this.game.paused = true;
            var pausedText = this.add.text(Ball._WIDTH * 0.5, 250, "Game paused,\ntap anywhere to continue.", this.fontMessage);
            pausedText.anchor.set(0.5);
            this.input.onDown.add(function () {
                pausedText.destroy();
                this.game.paused = false;
            }, this);
        }, //pauses and resumes game
        manageAudio: function () {
            this.audioStatus = !this.audioStatus;
            this.audioButton.animations.play(this.audioStatus);
        }, //turns audio on and off
        update: function () {
            if (this.keys.left.isDown) {
                this.ball.body.velocity.x -= this.movementForce;
            }
            else if (this.keys.right.isDown) {
                this.ball.body.velocity.x += this.movementForce;
            }
            if (this.keys.up.isDown) {
                this.ball.body.velocity.y -= this.movementForce;
            }
            else if (this.keys.down.isDown) {
                this.ball.body.velocity.y += this.movementForce;
            }
            this.physics.arcade.collide(this.ball, this.borderGroup, this.wallCollision, null, this);
            this.physics.arcade.collide(this.ball, this.levels[this.level - 1], this.wallCollision, null, this);
            this.physics.arcade.overlap(this.ball, this.hole, this.finishLevel, null, this);
        },
        wallCollision: function () {
            // if (this.audioStatus) {
            //     this.bounceSound.play();
            // }
            // if ("vibrate" in window.navigator) {
            //     window.navigator.vibrate(100);
            // } 
        }, //happens when ball hits wall or other stuff
        handleOrientation: function (e) {
            var x = e.gamma;
            var y = e.beta;
            Ball._player.body.velocity.x += x;
            Ball._player.body.velocity.y += y;
        }, // handles device orientation on mobile
        finishLevel: function () {
            if (this.level >= this.maxLevels) {
                this.totalTimer += this.timer;
                alert('Congratulations, game completed!\nTotal time of play: ' + this.totalTimer + ' seconds!');
                this.game.state.start('MainMenu');
            }
            else {
                alert('Congratulations, level ' + this.level + ' completed!');
                this.totalTimer += this.timer;
                this.timer = 0;
                this.level++;
                this.timerText.setText("Time: " + this.timer);
                this.totalTimeText.setText("Total time: " + this.totalTimer);
                this.levelText.setText("Level: " + this.level + " / " + this.maxLevels);
                this.ball.body.x = this.ballStartPos.x;
                this.ball.body.y = this.ballStartPos.y;
                this.ball.body.velocity.x = 0;
                this.ball.body.velocity.y = 0;
                this.showLevel();
            }
        }, //loads new level when cur is done
        render: function () {

        }
    };


    /* Main Loop */
    export default function Maze() {
        var game = new window.Phaser.Game(Ball._WIDTH, Ball._HEIGHT, window.Phaser.Auto, 'myCanvas');
        game.state.add('Boot', Ball.Boot);
        game.state.add('Preloader', Ball.Preloader);
        game.state.add('MainMenu', Ball.MainMenu);
        game.state.add('Howto', Ball.Howto);
        game.state.add('Game', Ball.Game);
        game.state.start('Boot');

        // function preload() {
        //     game.scale.scaleMode = window.Phaser.ScaleManager.NO_SCALE;
        //     game.scale.pageAlignHorizontally = true;
        //     game.scale.pageAlignVertically = true;
        //     game.stage.backgroundColor = '#eee';
        // }
        // function create() {
        //     //adds onto the device orientation function
        //     window.addEventListener("deviceorientation", this.handleOrientation, true);
        //     this.bounceSound = this.game.add.audio('audio-bounce');

        //     this.ball = this.add.sprite(this.ballStartPos.x, this.ballStartPos.y, 'ball');
        //     this.ball.anchor.set(0.5);
        //     this.physics.enable(this.ball, window.Phaser.Physics.ARCADE);
        //     this.ball.body.setSize(18, 18);
        //     this.ball.body.bounce.set(0.3, 0.3);
        //     this.keys = this.game.input.keyboard.createCursorKeys();//intiates input

        //     /* below creates a hole to go in to */
        //     this.hole = this.add.sprite(Ball._WIDTH * 0.5, 90, 'hole');
        //     this.physics.enable(this.hole, window.Phaser.Physics.ARCADE);
        //     this.hole.anchor.set(0.5);
        //     this.hole.body.setSize(2, 2);

        //     this.timer = 0; // time elapsed in the current level
        //     this.totalTimer = 0; // time elapsed in the whole game

        //     this.timerText = this.game.add.text(15, 15, "Time: " + this.timer, this.fontBig);
        //     this.totalTimeText = this.game.add.text(120, 30, "Total time: " + this.totalTimer, this.fontSmall);
        //     this.time.events.loop(window.Phaser.Timer.SECOND, this.updateCounter, this);
        // }
    }
