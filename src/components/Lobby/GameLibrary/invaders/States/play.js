export default function playState() {
    var sky;
    var backgroundV = 1;
    var player;
    var cursors;

    var bullets;
    var bulletTime = 0;
    var fireBtn;

    var enemies;

    var score = 0;
    var scoreText;


    return {
        create: function () {
            sky = this.game.add.tileSprite(0, 0, 2000, 2000, 'sky')

            player = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 100, 'player')

            this.game.physics.enable(player, window.Phaser.Physics.ARCADE);
            player.body.collideWorldBounds = true;

            cursors = this.game.input.keyboard.createCursorKeys();

            bullets = this.game.add.group();
            bullets.enableBody = true; //allows for physics
            bullets.physicsBodyType = window.Phaser.Physics.ARCADE;  //states what type of physics
            bullets.createMultiple(30, 'bullet1')
            bullets.setAll('anchor.x', 0.5);
            bullets.setAll('anchor.y', 1);
            bullets.setAll('outOfBoundsKill', true);//destroys if off screen;
            bullets.setAll('checkWorldBounds', true);

            fireBtn = this.game.input.keyboard.addKey(window.Phaser.Keyboard.SPACEBAR);

            enemies = this.game.add.group();
            enemies.enableBody = true; //allows for physics
            enemies.physicsBodyType = window.Phaser.Physics.ARCADE; //states what type of physics

            this.createEnemies();

            scoreText = this.game.add.text(10, 0, 'Score: 0', { font: '22px Arial', fill: '#fff' });


        },
        update: function () {
            this.game.physics.arcade.overlap(bullets, enemies, this.collisionHandler, null, this);
            this.game.physics.arcade.overlap(enemies, player, this.playerCollision, null, this);
            sky.tilePosition.y += backgroundV; //this scrolls the background up


            /* below is basic player controls */
            player.body.velocity.x = 0;
            if (cursors.left.isDown) {
                player.body.velocity.x = -350;
            } else if (cursors.right.isDown) {
                player.body.velocity.x = 350;
            }

            if (fireBtn.isDown) {
                this.fireBullet();
            }

            scoreText.text = 'Score: ' + score;
            if (score === 3200) {
                score = 0;

                this.game.state.start('win')
            }

        },
        win: function () {

            this.game.state.start('win')
        },
        fireBullet: function () {
            if (this.game.time.now > bulletTime) {
                var bullet = bullets.getFirstExists(false);
                if (bullet) {
                    bullet.reset(player.x + 12, player.y);
                    bullet.body.velocity.y = -400;
                    bulletTime = this.game.time.now + 200;
                }
            }
        },
        createEnemies: function () {
            for (var y = 0; y < 4; y += 1) {
                for (var x = 0; x < 8; x += 1) {
                    var enemy = enemies.create(x * 48, y * 50, 'enemy');
                    enemy.anchor.setTo(0.5, 0.5);
                }
            }

            enemies.x = 10;
            enemies.y = 10;

            var tween = this.game.add.tween(enemies).to({ x: 130 }, 1500, window.Phaser.Easing.Linear.None, true, 0, 1000, true);

            tween.onRepeat.add(this.descend, this)
        },
        descend: function () {
            enemies.y += 10;
        },
        collisionHandler: function (bullet, enemy) {
            bullet.kill();
            enemy.kill();
            score += 100;
        },
        playerCollision: function(enemy, player){
            player.kill();
            score = 0;
            this.game.state.start('lose');
        }
    }
}