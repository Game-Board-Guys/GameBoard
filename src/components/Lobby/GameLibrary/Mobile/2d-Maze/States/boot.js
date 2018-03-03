export default function bootState() {
    return {
        preload: function () {
            this.load.image('preloaderBackground', 'img/menu-stuffs/preloadbck.png');
            this.load.image('preloaderBar', 'img/menu-stuffs/preloadbar.png');
        },
        create: function () {
            this.game.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true; this.game.scale.pageAlignVertically = true;
            this.game.state.start('load');
        }
    }
}