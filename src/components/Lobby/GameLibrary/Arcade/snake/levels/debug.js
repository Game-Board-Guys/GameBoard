export default function playState(game) {
    var snakeHead; //head of snake sprite
    var snakeSection = new Array(); //array of sprites that make the snake body sections
    var snakePath = new Array(); //array of positions(points) that have to be stored for the path the sections follow
    var numSnakeSections = 30; //number of snake body sections
    var snakeSpacer = 6; //parameter that sets the spacing between sections

    var cursors;

    return {
        create: function () {

            game.world.setBounds(0, 0, 800, 600);

            cursors = game.input.keyboard.createCursorKeys();

            snakeHead = game.add.sprite(400, 300, 'ball');
            snakeHead.anchor.setTo(0.5, 0.5);

            game.physics.enable(snakeHead, window.Phaser.Physics.ARCADE);

            //  Init snakeSection array
            for (var i = 1; i <= numSnakeSections - 1; i++) {
                snakeSection[i] = game.add.sprite(400, 300, 'ball');
                snakeSection[i].anchor.setTo(0.5, 0.5);
            }

            //  Init snakePath array
            for (var i = 0; i <= numSnakeSections * snakeSpacer; i++) {
                snakePath[i] = new window.Phaser.Point(400, 300);
            }

        },

        update: function () {

            snakeHead.body.velocity.setTo(0, 0);
            snakeHead.body.angularVelocity = 0;

            if (cursors.up.isDown) {
                snakeHead.body.velocity.copyFrom(game.physics.arcade.velocityFromAngle(snakeHead.angle, 300));

                // Everytime the snake head moves, insert the new location at the start of the array, 
                // and knock the last position off the end

                var part = snakePath.pop();

                part.setTo(snakeHead.x, snakeHead.y);

                snakePath.unshift(part);

                for (var i = 1; i <= numSnakeSections - 1; i++) {
                    snakeSection[i].x = (snakePath[i * snakeSpacer]).x;
                    snakeSection[i].y = (snakePath[i * snakeSpacer]).y;
                }
            }

            if (cursors.left.isDown) {
                snakeHead.body.angularVelocity = -300;
            }
            else if (cursors.right.isDown) {
                snakeHead.body.angularVelocity = 300;
            }

        },

        render: function () {

            game.debug.spriteInfo(snakeHead, 32, 32);

        }
    }
}