export default function loseState() {
    return {
        // create: function () {

        //     this.stateGroup = this.add.group();

        //     this.initSnake(3);
        //     this.initSnakeTrail(10);

        //     this.titleSprite = this.add.sprite(this.world.centerX, this.world.centerY - 100, 'spriteSet', 'title');
        //     this.titleSprite.anchor.setTo(0.5, 0.5);

        //     this.initScoreTexts();

        //     this.initBackButton();

        //     this.addToStateGroup();

        //     this.add.tween(this.stateGroup).from({ x: -500 }, 500, Phaser.Easing.Sinusoidal.InOut, true);
        // },

        // addToStateGroup: function () {
        //     for (var i = 0; i < this.snake.length; i++) {
        //         this.stateGroup.add(this.snake[i]);
        //     }
        //     this.stateGroup.add(this.snakeTrail);
        //     this.stateGroup.add(this.titleSprite);
        //     this.stateGroup.add(this.yourScoreText);
        //     this.stateGroup.add(this.highscoreText);
        //     this.stateGroup.add(this.backButton);
        // },

        // initScoreTexts: function () {

        //     this.yourScoreText = this.add.bitmapText(this.world.centerX, 300, 'olijo', BasicGame.textList.score + '\n' + BasicGame.score, 28);
        //     this.yourScoreText.align = 'center';
        //     this.yourScoreText.x = this.world.centerX - this.yourScoreText.textWidth * 0.5;
        //     var HS = 0;
        //     var tempText;
        //     //retrieve highscores according to mode
        //     switch (BasicGame.currentMode) {
        //         case 'E': HS = BasicGame.highscore.E;
        //             tempText = BasicGame.textList.easy;
        //             break;
        //         case 'M': HS = BasicGame.highscore.M;
        //             tempText = BasicGame.textList.medium;
        //             break;
        //         case 'H': HS = BasicGame.highscore.H;
        //             tempText = BasicGame.textList.hard;
        //             break;
        //     }
        //     //compare if current score is more than highscore for that mode
        //     if (BasicGame.score < HS) {
        //         this.highscoreText = this.add.bitmapText(this.world.centerX, 400, 'olijo', BasicGame.textList.highscore + ' - ' + tempText + '\n' + HS, 28);
        //         this.highscoreText.align = 'center';
        //         this.highscoreText.x = this.world.centerX - this.highscoreText.textWidth * 0.5;
        //     }
        //     else {
        //         //if yes, then set the new highscore to the localStorage
        //         switch (BasicGame.currentMode) {
        //             case 'E': BasicGame.highscore.E = BasicGame.score;
        //                 break;
        //             case 'M': BasicGame.highscore.M = BasicGame.score;
        //                 break;
        //             case 'H': BasicGame.highscore.H = BasicGame.score;
        //         }
        //         //local storage can only store key:value pairs, hence need to covert highscores to json string
        //         var tempString = {
        //             "E": BasicGame.highscore.E, "M": BasicGame.highscore.M, "H": BasicGame.highscore.H
        //         }
        //         localStorage.setItem("HS", JSON.stringify(tempString));

        //         this.highscoreText = this.add.bitmapText(this.world.centerX, 400, 'olijo', tempText + ' - ' + BasicGame.textList.highscore + '!!!', 28);
        //         this.highscoreText.align = 'center';
        //         this.highscoreText.x = this.world.centerX - this.highscoreText.textWidth * 0.5;
        //     }
        // },

        // moveSnake: function () {

        //     if (this.snakeDirection == 0 || this.snakeDirection == 1) {
        //         this.newSnakeDirection = this.rnd.integerInRange(2, 3);
        //     }
        //     else {
        //         this.newSnakeDirection = this.rnd.integerInRange(0, 1);
        //     }
        //     if (this.math.chanceRoll(15)) {
        //         this.snakeDirection = this.newSnakeDirection;
        //     }

        //     var length = this.snake.length;

        //     switch (this.snakeDirection) {
        //         case 0: this.snake[length - 1].y = this.snake[0].y - 15;
        //             this.snake[length - 1].x = this.snake[0].x;
        //             break;
        //         case 1: this.snake[length - 1].y = this.snake[0].y + 15;
        //             this.snake[length - 1].x = this.snake[0].x;
        //             break;
        //         case 2: this.snake[length - 1].x = this.snake[0].x - 15;
        //             this.snake[length - 1].y = this.snake[0].y;
        //             break;
        //         case 3: this.snake[length - 1].x = this.snake[0].x + 15;
        //             this.snake[length - 1].y = this.snake[0].y;
        //             break;
        //     }

        //     if (this.snake[length - 1].x > this.world.width - 14) {
        //         this.snake[length - 1].x = 0;
        //     }
        //     if (this.snake[length - 1].x < 0) {
        //         this.snake[length - 1].x = this.world.width - 16;
        //     }
        //     if (this.snake[length - 1].y > this.world.height - 14) {
        //         this.snake[length - 1].y = 0;
        //     }
        //     if (this.snake[length - 1].y < 0) {
        //         this.snake[length - 1].y = this.world.height - 16;
        //     }

        //     temp = this.snake.pop();
        //     this.snake.unshift(temp);

        //     this.leaveTrail(150, 6);

        // },
        // leaveTrail: function (t, n) {
        //     var length = this.snake.length - 1;
        //     var temp = this.snakeTrail.getFirstExists(false);
        //     if (temp) {
        //         temp.exists = true;
        //         temp.x = this.snake[length].x;
        //         temp.y = this.snake[length].y;
        //         temp.alpha = 0.8;
        //         temp.tint = 0xA9EE49;
        //         var trailTime = t * n;

        //         temp.tweenControl = this.add.tween(temp).to({ alpha: 0 }, trailTime, Phaser.Easing.Linear.None, true);
        //         temp.tweenControl.onComplete.add(function () {
        //             temp.exists = false;
        //         }, this);
        //     }
        // },

        // initSnake: function (no) {
        //     this.snake = [];
        //     var rX = this.world.randomX;
        //     var rY = this.world.randomY;
        //     for (var i = 0; i < no; i++) {
        //         var temp = this.add.sprite(rX + (no - i) * 15, rY, 'spriteSet', 'b');
        //         this.snake.push(temp);
        //     }
        //     this.snakeMoveTimer = this.time.events.loop(150, this.moveSnake, this);
        //     this.snakeDirection = 0;
        // },

        // initSnakeTrail: function (no) {
        //     this.snakeTrail = this.add.group();
        //     this.snakeTrail.createMultiple(no, 'spriteSet', 'b', false);
        // },

        // initBackButton: function () {
        //     this.backButton = this.add.bitmapText(this.world.centerX, 500, 'olijo', BasicGame.textList.back, 28);
        //     this.backButton.x = this.world.centerX - this.backButton.textWidth * 0.5;
        //     this.backButton.inputEnabled = true;
        //     this.backButton.events.onInputDown.add(this.quitGame, this);
        // },

        // quitGame: function (pointer) {

        //     var tweenControl = this.add.tween(this.stateGroup).to({ x: this.world.width + 500 }, 500, Phaser.Easing.Sinusoidal.InOut, true);
        //     tweenControl.onComplete.add(function () {
        //         //go back to Main Menu
        //         this.state.start('MainMenu');
        //     }, this);
        // }
    }
}