export default function loadState() {
    return {
        preload: function () {
            var loadingLabel = this.game.add.text(80, 150, 'loading...',
            { font: '30px Courier', fill: '#fff' });

        this.game.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;

            this.game.load.image('player', 'img/defender/ship.png');
            this.game.load.image('star', 'img/defender/star2.png');
            this.game.load.image('baddie', 'img/defender/space-baddie.png');
            this.game.load.atlas('lazer', 'img/defender/laser.png', 'img/defender/laser.json');
        },
        create: function () {
            this.game.state.start('play');
        }
    }
}