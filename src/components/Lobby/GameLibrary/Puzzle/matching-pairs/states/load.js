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


            this.game.scale.scaleMode = window.Phaser.ScaleManager.NO_SCALE;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            //game.stage.backgroundColor = '#eee';
            this.game.load.tilemap('matching', 'img/matching-pairs/tiles.json', null, window.Phaser.Tilemap.TILED_JSON);
            this.game.load.image('tiles', 'img/matching-pairs/tiles.png');//, 100, 100, -1, 1, 1);    
            this.game.load.spritesheet('button', 'img/menu-stuffs/blueSheet.png', 190, 47.4);

            this.bck = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBackground');
            this.bck.anchor.setTo(0.5, 0.5);
            this.bck.scale.setTo(0.5, 0.5);
            this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
            this.preloadBar.anchor.setTo(0, 0.5);
            this.preloadBar.scale.setTo(0.5, 1);
            this.preloadBar.x = this.world.centerX - this.preloadBar.width / 2;


            this.load.setPreloadSprite(this.preloadBar);

            this.load.image('title', 'img/matching-pairs/title.png');
            this.load.atlas('spriteset', 'img/matching-pairs/spritesheet.png', 'img/matching-pairs/spritesheet.jsona');
            this.load.spritesheet('play', 'img/matching-pairs/play.png', 400, 110);
            this.load.spritesheet('back', 'img/matching-pairs/back.png', 400, 110);
            this.load.spritesheet('musicbutton', 'img/matching-pairs/music.png', 400, 110);
            // this.load.bitmapFont('font', 'img/fnt2_0.png', 'img/fnt2.fnt');
            // this.load.audio('music', ['assets/music.mp3', 'assets/music.ogg', 'assets/music.wav', 'assets/music.m4a']);
            // this.load.audio('blip', ['assets/blip.mp3', 'assets/blip.ogg', 'assets/blip.wav', 'assets/blip.m4a']);

        },
        create: function () {
            this.game.state.start('menu')
        }

    }
}