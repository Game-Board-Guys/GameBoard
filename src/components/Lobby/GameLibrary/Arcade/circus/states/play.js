export default function play(game) {
    var score = 0;

    /* If the music in your game needs to play through-out a few State swaps, then you could reference it here */
    var music = null;

    /* Your game can check GameCtrl.orientated in internal loops to know if it should pause or not */
    var orientated = false;


    var lion;
    var clown;
    var floor;
    var endStage;
    var firecirclesRight;
    var firecirclesLeft;
    var cursors;
    var recicleFireCirclesWall;
    return {
        /**
    * Draw the distance
    */
        _createMeters: function () {
            var graphics = this.add.graphics(0, 0);
            var x;
            for (var i = 10; i >= 0; i--) {
                x = (10 - i) * 780;
                this.add.text(x + 15, 694, (i * 10) + ' m', {
                    font: '46px "arcadeclasic"',
                    fill: '#fff',
                    align: 'left'
                });


                graphics.lineStyle(2, 0x000000, 1);
                graphics.beginFill(0x000000, 1);
                graphics.drawRect(x, 690, 130, 50);
                graphics.lineStyle(5, 0xd42700, 1);
                graphics.drawRect(x + 5, 695, 120, 40);

            }


        },
        /**
         * Create player group (the clown and the lion)
         */
        _createPlayer: function () {
            lion = game.add.sprite(85, 630, 'clown', 'lion0000');
            game.physics.enable(lion, window.Phaser.Physics.ARCADE);


            lion.body.setSize(90, 50, -5, 0);

            clown = game.add.sprite(7, -22, 'clown', 'clownStand0000');
            game.physics.enable(clown, window.Phaser.Physics.ARCADE, true);
            lion.addChild(clown);


            lion.scale.x = 3;
            lion.scale.y = 3;


            lion.animations.add('runLion', window.Phaser.Animation.generateFrameNames('lion', 0, 2, '', 4), 3 /*fps */, true);
            lion.animations.add('idleLion', window.Phaser.Animation.generateFrameNames('lion', 0, 0, '', 4), 1 /*fps */, true);


            clown.isRunning = false;
            lion.body.collideWorldBounds = true;

        },

        /**
         * Create the static obstacles (firepots)
         */
        _createObstacles: function () {
            this.obstacles = this.add.group();
            var w = game.world.bounds.width - 200;
            for (var i = 1200; i < w; i += 800) {
                var firepot = this.add.sprite(i, 585, 'clown', 'firepot0000');
                this.physics.enable(firepot, window.Phaser.Physics.ARCADE);
                firepot.body.setSize(38, 48, -14, -15);
                //firepot.body.setPolygon( 10,0,14,0,20,30, 5,30 );
                firepot.body.x = i;
                firepot.body.y = 600;
                firepot.body.immovable = true;
                firepot.scale.x = 3;
                firepot.scale.y = 3;

                this.obstacles.add(firepot);

            }

            this.obstacles.callAll('animations.add', 'animations', 'burnPot', window.Phaser.Animation.generateFrameNames('firepot', 0, 1, '', 4), 10, true);
            this.obstacles.callAll('animations.play', 'animations', 'burnPot');
        },
        _createFireCirclesLeft: function () {
            var burnCircleLeft = window.Phaser.Animation.generateFrameNames('firecirclel', 0, 1, '', 4);
            firecirclesLeft = this.add.group();
            for (var i = 800; i < game.world.bounds.width; i += 800) {
                if (i % 2) {
                    i -= 300 + Math.floor(Math.random() * 100) + 1;
                }
                i += 1;


                var fireCircleLeft = this.add.sprite(i, 335, 'clown', 'firecirclel0000');
                game.physics.enable(fireCircleLeft, window.Phaser.Physics.ARCADE);
                fireCircleLeft.animations.add('burnCircleLeft', burnCircleLeft, 5, true);

                firecirclesLeft.add(fireCircleLeft);
            }

            firecirclesLeft.setAll('scale.x', 3);
            firecirclesLeft.setAll('scale.y', 3);
            firecirclesLeft.setAll('body.velocity.x', -70);

            firecirclesLeft.callAll('animations.play', 'animations', 'burnCircleLeft');

        },
        _createFireCirclesRight: function () {
            var burnCircleRigth = window.Phaser.Animation.generateFrameNames('firecircler', 0, 1, '', 4);
            firecirclesRight = this.add.group();

            firecirclesLeft.forEach(function (e) {
                var x = e.body.x + 30;
                var fireCircleRight = game.add.sprite(x, 335, 'clown', 'firecircler0000');
                game.physics.enable(fireCircleRight, window.Phaser.Physics.ARCADE);
                fireCircleRight.animations.add('burnCircleRigth', burnCircleRigth, 5, true);

                firecirclesRight.add(fireCircleRight);

            }, this);
            firecirclesRight.setAll('scale.x', 3);
            firecirclesRight.setAll('scale.y', 3);
            firecirclesRight.setAll('body.velocity.x', -70);

            firecirclesRight.callAll('animations.play', 'animations', 'burnCircleRigth');

        },
        _createFireCirclesCollision: function () {
            this.fireCollisionGroup = this.add.group();
            firecirclesLeft.forEach(function (e) {
                var x = e.body.x + 30;

                var touchFire = game.add.sprite(x - 10, 554);
                this.physics.enable(touchFire, window.Phaser.Physics.ARCADE);
                touchFire.body.setSize(25, 150);
                this.fireCollisionGroup.add(touchFire);
            }, this);
            this.fireCollisionGroup.setAll('body.velocity.x', -70);
        },
        create: function () {
            game.physics.startSystem(window.Phaser.Physics.ARCADE);
            this.gameover = false;
            // this.music = this.add.audio('stage1');
            // this.music.play();


            cursors = game.input.keyboard.createCursorKeys();
            game.world.setBounds(0, 0, 1024 * 8, 800);
            //this.background=this.game.add.tileSprite(0, 200, 1024, 552, 'background');
            this.background = this.add.tileSprite(0, 200, 1024 * 8, 552, 'stage01');



            this._createMeters();
            this._createFireCirclesLeft();
            this._createPlayer();
            this._createFireCirclesRight();
            this._createObstacles();

            this._createFireCirclesCollision();

            floor = game.add.sprite(0, 678);
            endStage = game.add.sprite(1024 * 8 - 300, 620, 'clown', 'endLevel1');
            this.physics.enable(floor, window.Phaser.Physics.ARCADE);
            this.physics.enable(endStage, window.Phaser.Physics.ARCADE);
            endStage.scale.x = 3;
            endStage.scale.y = 3;
            endStage.body.immovable = true;

            //this.endStage.body.checkCollision.left = false;
            //this.endStage.body.checkCollision.right = false;
            endStage.body.collideWorldBounds = true;


            floor.body.immovable = true;
            floor.body.collideWorldBounds = true;
            floor.body.width = game.world.width;

            recicleFireCirclesWall = this.game.add.sprite(-12, 600);
            this.physics.enable(recicleFireCirclesWall, window.Phaser.Physics.ARCADE);
            recicleFireCirclesWall.body.immovable = true;
            recicleFireCirclesWall.body.height = 500;
            recicleFireCirclesWall.body.width = 2;

        },
        triggerGameover: function () {
            // var that = this;
            // this.music.stop();
            // this.failureSound = this.add.audio('failure');
            // this.failureSound.play();

            setTimeout(function () {
                lion.animations.stop();
                clown.frameName = 'clownburn0000';
                lion.frameName = 'lionburn0000';

                lion.body.gravity.y = 0;
                lion.body.speed = 0;
                lion.body.velocity.y = 0;
                lion.body.velocity.x = 0;

                firecirclesRight.setAll('body.velocity.x', 0);
                firecirclesLeft.setAll('body.velocity.x', 0);
            }, 1);

            setTimeout(function () {
                game.state.start('Stage01');
                // failureSound.stop();
            }, 3100);

            this.gameover = true;
        },
        _recicleFireCircle: function () {
            var fLeft = firecirclesLeft.getFirstExists();
            var fRight = firecirclesRight.getFirstExists();
            var fObstable = this.fireCollisionGroup.getFirstExists();
            fLeft.body.x = this.world.width;
            fRight.body.x = this.world.width + 30;
            fObstable.body.x = this.world.width + 20;
            fObstable.body.velocity.x = fLeft.body.velocity.x;

            firecirclesLeft.remove(fLeft);
            firecirclesLeft.add(fLeft);
            firecirclesRight.remove(fRight);
            firecirclesRight.add(fRight);
            this.fireCollisionGroup.remove(fObstable);
            this.fireCollisionGroup.add(fObstable);

        },
        triggerWin: function () {
            // GameCtrl.data = { textToRender: 'STAGE 02', nextState: 'Stage02' };
            setTimeout(function (_this) {
                _this.game.state.start('Prestage');
            }, 10, this);
        },
        update: function () {
            if (this.gameover) {
                return;
            }

            if (lion.body.x < (game.world.width - 1600)) {
                game.physics.arcade.collide(this.recicleFireCirclesWall, this.fireCollisionGroup, this._recicleFireCircle, null, this);
            }



            this.game.physics.arcade.collide(lion, this.fireCollisionGroup, this.triggerGameover, null, this);
            this.game.physics.arcade.collide(lion, this.obstacles, this.triggerGameover, null, this);


            this.game.physics.arcade.collide(lion, this.endStage, this.triggerWin, null, this);

            this.game.physics.arcade.collide(this.endStage, lion);
            this.game.physics.arcade.collide(floor, lion);


            lion.body.gravity.y = 700;

            var isJumping = lion.body.touching.down;

            this.game.camera.x = lion.x - 100;
            if (isJumping) {
                clown.frameName = 'clownStandJump0000';
                lion.frameName = 'lion0002';
            } else {
                clown.frameName = 'clownStand0000';
            }

            if (game.input.keyboard.isDown(window.Phaser.Keyboard.W) && !isJumping) {
                lion.body.velocity.y = -480;
            }


            if (isJumping) {
                // Mantengo la velocidad del fondo

                return;
            }

            if (game.input.keyboard.isDown(window.Phaser.Keyboard.D)) {
                clown.isRunning = true;
                //this.background.tilePosition.x -= 4;

                lion.body.velocity.x = 200;
                lion.animations.play('runLion', 10, true);
            } else if (game.input.keyboard.isDown(window.Phaser.Keyboard.A)) {
                clown.isRunning = true;
                //this.background.tilePosition.x -= 4;

                lion.body.velocity.x = -100;
                lion.animations.play('runLion', 6, true);
            } else {
                lion.body.velocity.x = 0;

                clown.isRunning = false;
                lion.animations.stop(0);
                lion.animations.play('idleLion');
            }


        },
        // render: function () {
        //     /* global CIRCUSDEBUG */
        //     //        CIRCUSDEBUG=true;
        //     if (CIRCUSDEBUG) {
        //         this.game.debug.bodyInfo(this.lion, 32, 320);

        //         this.game.debug.body(this.lion);
        //         this.game.debug.body(this.clown);
        //         this.game.debug.body(this.recicleFireCirclesWall);

        //         this.game.debug.body(this.floor);
        //         this.obstacles.forEach(function (e) {
        //             this.game.debug.body(e);
        //         }, this);

        //         this.fireCollisionGroup.forEach(function (e) {
        //             this.game.debug.body(e);
        //         }, this);
        //     }



        /*this.game.debug.renderPhysicsBody(this.endStage.body);
        this.game.debug.renderPhysicsBody(this.floor.body);
        
        this.obstacles.forEach(function (e) {
                this.game.debug.renderPhysicsBody(e.body);
        }, this);*/
        // },
        quitGame: function () {

            //        Here you should destroy anything you no longer need.
            //        Stop music, delete sprites, purge caches, free resources, all that good stuff.

            //        Then let's go back to the main menu.
            this.game.state.start('menu');

        }

    };
}