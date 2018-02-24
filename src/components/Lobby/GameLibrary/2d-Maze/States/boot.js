export default function bootState() {
    return {
        preload: function () {
            this.load.image('preloaderBg', 'img/loading-bg.png');
            this.load.image('preloaderBar', 'img/loading-bar.png');
        },
        create: function () {
            this.game.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true; this.game.scale.pageAlignVertically = true;
            this.game.state.start('load');
        }
    }
}