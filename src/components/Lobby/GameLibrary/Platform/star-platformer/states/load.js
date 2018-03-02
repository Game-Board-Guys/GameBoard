export default function loadState() {
    return {
        preload: function () {
            var loadingLabel = this.game.add.text(80, 150, 'loading...',
                { font: '30px Courier', fill: '#fff' });

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
            this.game.state.start('play')
        }
    }
}