export default function playState() {
    var GAME_WIDTH = 640;
    var GAME_HEIGHT = 960;

    var player = null;
    var candyGroup = null;
    var spawnCandyTimer = 0;
    var fontStyle = null;
    // define Candy variables to reuse them in Candy.item functions
    var scoreText = null;
    var score = 0;
    var health = 0;

    var item = {
        spawnCandy: function (game) {
            // calculate drop position (from 0 to game width) on the x axis
            var dropPos = Math.floor(Math.random() * GAME_WIDTH);
            // define the offset for every candy
            var dropOffset = [-27, -36, -36, -38, -48];
            // randomize candy type
            var candyType = Math.floor(Math.random() * 5);
            // create new candy
            var candy = game.add.sprite(dropPos, dropOffset[candyType], 'candy');
            // add new animation frame
            candy.animations.add('anim', [candyType], 10, true);
            // play the newly created animation
            candy.animations.play('anim');
            // enable candy body for physic engine
            game.physics.enable(candy, window.Phaser.Physics.ARCADE);
            // enable candy to be clicked/tapped
            candy.inputEnabled = true;
            // add event listener to click/tap
            candy.events.onInputDown.add(this.clickCandy, this);
            // be sure that the candy will fire an event when it goes out of the screen
            candy.checkWorldBounds = true;
            // reset candy when it goes out of screen
            candy.events.onOutOfBounds.add(this.removeCandy, this);
            // set the anchor (for rotation, position etc) to the middle of the candy
            candy.anchor.setTo(0.5, 0.5);
            // set the random rotation value
            candy.rotateMe = (Math.random() * 4) - 2;
            // add candy to the group
            game._candyGroup.add(candy);
        },
        clickCandy: function (candy) {
            // kill the candy when it's clicked
            candy.kill();
            // add points to the score
            score += 1;
            // update score text
            scoreText.setText(score);
        },
        removeCandy: function (candy) {
            // kill the candy
            candy.kill();
            // decrease player's health
           health -= 10;
        }
    }
    return {
        create: function () {

            // set the global gravity
            this.physics.arcade.gravity.y = 200;
            // display images: background, floor and score
            this.add.sprite(0, 0, 'background');
            this.add.sprite(-30, GAME_HEIGHT - 160, 'floor');
            this.add.sprite(10, 5, 'score-bg');
            // add pause button
            this.add.button(GAME_WIDTH - 96 - 10, 5, 'button-pause', this.managePause, this);
            // create the player
            this._player = this.add.sprite(5, 760, 'monster-idle');
            // add player animation
            this._player.animations.add('idle', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 10, true);
            // play the animation
            this._player.animations.play('idle');
            // set font style
            this._fontStyle = { font: "40px Arial", fill: "#FFCC00", stroke: "#333", strokeThickness: 5, align: "center" };
            // initialize the spawn timer
            this._spawnCandyTimer = 0;
            // initialize the score text with 0
            scoreText = this.add.text(120, 20, "0", this._fontStyle);
            // set health of the player
            health = 10;
            // create new group for candy
            this._candyGroup = this.add.group();
            // spawn first candy
            item.spawnCandy(this);
        },
        managePause: function () {
            // pause the game
            this.game.paused = true;
            // add proper informational text
            var pausedText = this.add.text(100, 250, "Game paused.\nTap anywhere to continue.", this._fontStyle);
            // set event listener for the user's click/tap the screen
            this.input.onDown.add(function () {
                // remove the pause text
                pausedText.destroy();
                // unpause the game
                this.game.paused = false;
            }, this);
        },
        update: function () {
            // update timer every frame
            this._spawnCandyTimer += this.time.elapsed;
            // if spawn timer reach one second (1000 miliseconds)
            if (this._spawnCandyTimer > 1000) {
                // reset it
                this._spawnCandyTimer = 0;
                // and spawn new candy
                item.spawnCandy(this);
            }
            // loop through all candy on the screen
            this._candyGroup.forEach(function (candy) {
                // to rotate them accordingly
                candy.angle += candy.rotateMe;
            });
            // if the health of the player drops to 0, the player dies = game over
            if (!health) {
                // show the game over message
                this.add.sprite((GAME_WIDTH - 594) / 2, (GAME_HEIGHT - 271) / 2, 'game-over');
                // pause the game
                this.game.paused = true;
            }
        }
    };
}