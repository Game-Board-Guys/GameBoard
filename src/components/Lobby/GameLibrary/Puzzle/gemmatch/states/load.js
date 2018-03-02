export default function loadState() {
    var GEM_SIZE = 64;
    return {
        preload: function () {
            var loadingLabel = this.game.add.text(80, 150, 'loading...',
                { font: '30px Courier', fill: '#fff' });

            this.game.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;

            this.game.load.spritesheet("GEMS", "img/gemmatch/diamonds32x5.png", GEM_SIZE, GEM_SIZE);

        },
        create: function () {
            this.game.state.start('play');
        }
    }
}