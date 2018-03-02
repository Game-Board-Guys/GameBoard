export default function loadState() {
    return {
        preload: function () {
            var loadingLabel = this.game.add.text(80, 150, 'loading...',
                { font: '30px Courier', fill: '#fff' });

            this.game.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;

            this.game.load.image('bullet', 'img/asteroids/bullets.png');
            this.game.load.image('ship', 'img/asteroids/ship.png');
        },
        create: function () {
            this.game.state.start('play');
        }

    }
}