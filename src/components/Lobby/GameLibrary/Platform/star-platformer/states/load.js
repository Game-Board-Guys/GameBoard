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
            this.game.load.spritesheet('button', 'img/menu-stuffs/blueSheet.png', 190, 47.4);

            this.game.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            //game.stage.backgroundColor = '#eee';

            this.game.load.tilemap('level1', 'img/star-platformer/level1.json', null, window.Phaser.Tilemap.TILED_JSON);
            this.game.load.image('tiles-1', 'img/star-platformer/tiles-1.png');
            this.game.load.spritesheet('dude', 'img/star-platformer/dude.png', 32, 48);
            this.game.load.spritesheet('droid', 'img/star-platformer/droid.png', 32, 32);
            this.game.load.image('starSmall', 'img/star-platformer/star.png');
            this.game.load.image('starBig', 'img/star-platformer/star2.png');
            this.game.load.image('background', 'img/star-platformer/background2.png');

        },
        create: function () {
            this.game.state.start('menu')
        }
    }
}