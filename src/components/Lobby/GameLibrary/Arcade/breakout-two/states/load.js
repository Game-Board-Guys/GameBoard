export default function loadState() {
    return {
        preload: function () {
            var loadingLabel = this.game.add.text(80, 150, 'loading...',
            { font: '30px Courier', fill: '#fff' });

            this.game.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;

            this.game.load.atlas('breakout', 'img/breakout/breakout.png', 'img/breakout/breakout.json');
            this.game.load.image('starfield', 'img/breakout/starfield.jpg');
        },
        create: function () {
            this.game.state.start('play');
        }
    }
}