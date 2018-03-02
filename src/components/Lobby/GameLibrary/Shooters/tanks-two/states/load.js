export default function loadState() {

    return {
        preload: function () {
            var loadingLabel = this.game.add.text(80, 150, 'loading...',
                { font: '30px Courier', fill: '#fff' });

            this.game.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            //game.stage.backgroundColor = '#eee';

            this.game.load.atlas('tank', 'img/tanks-two/tanks.png', 'img/tanks-two/tanks.json');
            this.game.load.atlas('enemy', 'img/tanks-two/enemy-tanks.png', 'img/tanks-two/tanks.json');
            this.game.load.image('logo', 'img/tanks-two/logo.png');
            this.game.load.image('bullet', 'img/tanks-two/bullet.png');
            this.game.load.image('earth', 'img/tanks-two/scorched_earth.png');
            this.game.load.spritesheet('kaboom', 'img/tanks-two/explosion.png', 64, 64, 23);

        },
        create: function () {
            this.game.state.start('play')
        }
    }
}