export default function loadState() {
    return {
        preload: function () {
            this.bck = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBackground');
            this.bck.anchor.setTo(0.5, 0.5);
            this.bck.scale.setTo(0.5, 0.5);
            this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
            this.preloadBar.anchor.setTo(0, 0.5);
            this.preloadBar.scale.setTo(0.5, 1);
            this.preloadBar.x = this.world.centerX - this.preloadBar.width / 2;


            this.load.setPreloadSprite(this.preloadBar);


            this.game.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            //game.stage.backgroundColor = '#eee';

            this.game.load.image('bullet', 'img/invaders-two/bullet.png');
            this.game.load.image('enemyBullet', 'img/invaders-two/enemy-bullet.png');
            this.game.load.spritesheet('invader', 'img/invaders-two/invader32x32x4.png', 32, 32);
            this.game.load.image('ship', 'img/invaders-two/player.png');
            this.game.load.spritesheet('kaboom', 'img/invaders-two/explode.png', 128, 128);
            this.game.load.image('starfield', 'img/invaders-two/starfield.png');
            this.game.load.image('background', 'img/invaders-two/background2.png');
            this.game.load.spritesheet('button', 'img/menu-stuffs/blueSheet.png', 190, 47.4);

        },
        create: function () {
            this.game.state.start('menu')
        }
    }
}