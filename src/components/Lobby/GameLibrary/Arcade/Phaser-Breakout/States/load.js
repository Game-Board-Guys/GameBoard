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
            this.game.stage.backgroundColor = '#eee';

            this.game.load.spritesheet('ball', 'img/brick-breaker/wobble.png', 20, 20);
            this.game.load.image('paddle', 'img/brick-breaker/paddle.png');
            this.game.load.image('brick', 'img/brick-breaker/brick.png');
            this.game.load.spritesheet('button', 'img/menu-stuffs/blueSheet.png', 190, 47.4);
        },
        create: function () {
            this.game.state.start('menu')
        }
    }
}