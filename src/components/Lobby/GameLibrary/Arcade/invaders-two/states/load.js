export default function loadState() {
    return {
        preload: function () {
            var loadingLabel = this.game.add.text(80, 150, 'loading...',
                { font: '30px Courier', fill: '#fff' });

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

        },
        create: function () {
            this.game.state.start('play')
        }
    }
}