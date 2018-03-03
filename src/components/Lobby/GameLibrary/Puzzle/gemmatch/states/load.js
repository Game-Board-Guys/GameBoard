export default function loadState() {
    var GEM_SIZE = 64;
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
            this.game.load.spritesheet('button', 'img/menu-stuffs/blueSheet.png', 190, 47.4);

            this.game.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;

            this.game.load.spritesheet("GEMS", "img/gemmatch/diamonds32x5.png", GEM_SIZE, GEM_SIZE);

        },
        create: function () {
            this.game.state.start('menu');
        }
    }
}