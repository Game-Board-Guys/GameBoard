export default function playState(game) {
    var stars;
    var baddies;
    var lazers;
    var lazer;
    var player;
    var cursors;
    var fireButton;
    var bulletTime = 0;
    var frameTime = 0;
    var frames;
    var prevCamX = 0;
    return {
        create: function () {
            game.world.setBounds(0, 0, 800 * 4, 600);

            frames = window.Phaser.Animation.generateFrameNames('frame', 2, 30, '', 2);
            frames.unshift('frame02');

            stars = game.add.group();

            for (var i = 0; i < 128; i++) {
                stars.create(game.world.randomX, game.world.randomY, 'star');
            }

            baddies = game.add.group();

            for (var i = 0; i < 16; i++) {
                baddies.create(game.world.randomX, game.world.randomY, 'baddie');
            }

            lazers = game.add.group();

            player = game.add.sprite(100, 300, 'player');
            player.anchor.x = 0.5;

            game.camera.follow(player, window.Phaser.Camera.FOLLOW_LOCKON, 0.1);

            cursors = game.input.keyboard.createCursorKeys();
            fireButton = game.input.keyboard.addKey(window.Phaser.Keyboard.SPACEBAR);

            prevCamX = game.camera.x;
        },
        update: function () {
            if (cursors.left.isDown) {
                player.x -= 8;
                player.scale.x = -1;
            }
            else if (cursors.right.isDown) {
                player.x += 8;
                player.scale.x = 1;
            }

            if (cursors.up.isDown) {
                player.y -= 8;
            }
            else if (cursors.down.isDown) {
                player.y += 8;
            }

            if (fireButton.isDown) {
                this.fireBullet();
            }

            lazers.forEachAlive(this.updateBullets, this);

            prevCamX = game.camera.x;
        },
        updateBullets: function (lazer) {
            //  Adjust for camera scrolling
            var camDelta = game.camera.x - prevCamX;
            lazer.x += camDelta;

            if (lazer.animations.frameName !== 'frame30') {
                lazer.animations.next();
            }
            else {
                if (lazer.scale.x === 1) {
                    lazer.x += 16;

                    if (lazer.x > (game.camera.view.right - 224)) {
                        lazer.kill();
                    }
                }
                else {
                    lazer.x -= 16;

                    if (lazer.x < (game.camera.view.left - 224)) {
                        lazer.kill();
                    }
                }
            }
        },
        fireBullet: function () {
            if (game.time.now > bulletTime) {
                //  Grab the first bullet we can from the pool
                lazer = lazers.getFirstDead(true, player.x + 24 * player.scale.x, player.y + 8, 'lazer');

                lazer.animations.add('fire', frames, 60);
                lazer.animations.frameName = 'frame02';

                lazer.scale.x = player.scale.x;

                if (lazer.scale.x === 1) {
                    // lazer.anchor.x = 1;
                }
                else {
                    // lazer.anchor.x = 0;
                }

                //  Lazers start out with a width of 96 and expand over time
                // lazer.crop(new Phaser.Rectangle(244-96, 0, 96, 2), true);

                bulletTime = game.time.now + 250;
            }
        }
    }
}