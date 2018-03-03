export default function menuState() {
    return {
        // create: function () {

        //     //stateGroup contains all the visible elements of the state - makes tweening easier on state change
        //     this.stateGroup = this.add.group();

        //     //initialize a 3 unit length snake
        //     this.initSnake(3);
        //     //and create a cache of 10 snake trail sprites
        //     this.initSnakeTrail(10);

        //     this.titleSprite = this.add.sprite(this.world.centerX, this.world.centerY - 100, 'spriteSet', 'title');
        //     this.titleSprite.anchor.setTo(0.5, 0.5);

        //     this.playButton = this.add.bitmapText(this.world.centerX, this.world.centerY, 'olijo', textList.play, 36);
        //     this.playButton.x = this.world.centerX - this.playButton.textWidth * 0.5;
        //     this.playButton.inputEnabled = true;
        //     this.playButton.events.onInputDown.add(this.showOptions, this);

        //     this.instructionsText = this.add.bitmapText(this.world.centerX, this.world.centerY + 100, 'olijo', textList.instructions, 24);
        //     this.instructionsText.align = 'center';
        //     this.instructionsText.x = this.world.centerX - this.instructionsText.textWidth * 0.5;

        //     //again, combining sprites that tween together into a group
        //     this.optionsGroup = this.add.group();
        //     this.option1 = this.add.bitmapText(this.world.centerX, this.world.centerY + 100, 'olijo', textList.easy, 28);
        //     this.option1.x = this.world.centerX - this.option1.textWidth * 0.5;
        //     this.option1.inputEnabled = true;
        //     this.option1.events.onInputDown.add(this.startGame, this);
        //     this.option2 = this.add.bitmapText(this.world.centerX, this.world.centerY + 190, 'olijo', textList.medium, 28);
        //     this.option2.x = this.world.centerX - this.option2.textWidth * 0.5;
        //     this.option2.inputEnabled = true;
        //     this.option2.events.onInputDown.add(this.startGame, this);
        //     this.option3 = this.add.bitmapText(this.world.centerX, this.world.centerY + 280, 'olijo', textList.hard, 28);
        //     this.option3.x = this.world.centerX - this.option3.textWidth * 0.5;
        //     this.option3.inputEnabled = true;
        //     this.option3.events.onInputDown.add(this.startGame, this);
        //     this.optionsGroup.add(this.option1);
        //     this.optionsGroup.add(this.option2);
        //     this.optionsGroup.add(this.option3);

        //     this.optionsGroup.y += 300;

        //     this.addToStateGroup();

        //     this.add.tween(this.stateGroup).from({ x: -500 }, 500, Phaser.Easing.Sinusoidal.InOut, true);
        // },

        // addToStateGroup: function () {
        //     //put all elements of the state into a single group

        //     for (var i = 0; i < this.snake.length; i++) {
        //         this.stateGroup.add(this.snake[i]);
        //     }
        //     this.stateGroup.add(this.snakeTrail);
        //     this.stateGroup.add(this.titleSprite);
        //     this.stateGroup.add(this.playButton);
        //     this.stateGroup.add(this.instructionsText);
        //     this.stateGroup.add(this.optionsGroup);
        // },

        // showOptions: function () {
        //     //slide the options up
        //     this.add.tween(this.optionsGroup).to({ y: '-380' }, 1000, Phaser.Easing.Sinusoidal.InOut, true);
        //     this.add.tween(this.instructionsText).to({ alpha: 0 }, 800, Phaser.Easing.Sinusoidal.InOut, true);
        //     this.add.tween(this.playButton).to({ alpha: 0 }, 800, Phaser.Easing.Sinusoidal.InOut, true);

        //     this.playButton.inputEnabled = false;
        // },

        // moveSnake: function () {

        //     //just code that makes the snake move randomly

        //     if (this.snakeDirection == 0 || this.snakeDirection == 1) {
        //         this.newSnakeDirection = this.rnd.integerInRange(2, 3);
        //     }
        //     else {
        //         this.newSnakeDirection = this.rnd.integerInRange(0, 1);
        //     }
        //     if (this.math.chanceRoll(15)) {   //15 percent chance that the snake will change direction
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
        //     //simply puts a sprite at the end of the snake that gradually fades away - an illusion of a trail

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
        //     //create the snake - an array of sprites

        //     this.snake = [];
        //     var rX = this.world.randomX;
        //     var rY = this.world.randomY;
        //     for (var i = 0; i < no; i++) {
        //         var temp = this.add.sprite(rX + (no - i) * 15, rY, 'spriteSet', 'b');
        //         this.snake.push(temp);
        //     }
        //     //start the snake movement timer
        //     this.snakeMoveTimer = this.time.events.loop(150, this.moveSnake, this);
        //     this.snakeDirection = 0;
        // },

        // initSnakeTrail: function (no) {
        //     this.snakeTrail = this.add.group();
        //     this.snakeTrail.createMultiple(no, 'spriteSet', 'b', false);
        // },

        // update: function () {

        // },

        // startGame: function (pointer) {

        //     //set the global variables so the game knows what mode to start in.
        //     switch (pointer.text) {
        //         case textList.easy: timerDelay = 250;
        //             currentMode = 'E';
        //             break;
        //         case textList.medium: timerDelay = 200;
        //             currentMode = 'M';
        //             break;
        //         case textList.hard: timerDelay = 100;
        //             currentMode = 'H';
        //             break;
        //     }

        //     //tween out the objects
        //     var tweenControl = this.add.tween(this.stateGroup).to({ x: this.world.width + 500 }, 500, Phaser.Easing.Sinusoidal.InOut, true);
        //     tweenControl.onComplete.add(function () {

        //         //	And start the actual game
        //         this.state.start('Game');
        //     }, this);

        // }

    }
}