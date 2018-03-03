export default function loadState() {
    return {
        preload: function () {

            var loadingLabel = this.game.add.text(80, 150, 'loading...',
                { font: '30px Courier', fill: '#fff' });

            this.game.scale.scaleMode = window.Phaser.ScaleManager.NO_SCALE;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            //game.stage.backgroundColor = '#eee';

            this.game.load.image('ball', 'img/snake/shinyball.png');

            //set up the loading sprites
            this.background = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBackground');
            this.background.anchor.setTo(0.5, 0.5);
            this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
            this.preloadBar.anchor.setTo(0, 0.5);
            this.preloadBar.x = this.world.centerX - this.preloadBar.width * 0.5;

            this.load.setPreloadSprite(this.preloadBar);

            //all the game sprites have been combined into a single image
            this.load.atlas('spriteSet', 'img/snake/spriteSet.png', 'img/snake/spriteSet.jsona');
            //load game font
            // this.load.bitmapFont('olijo', 'img/font/font.png', 'assets/font/font.fnt');
            // //load game sounds
            // this.load.audio('eat', ['img/sounds/eat.mp3', 'assets/sounds/eat.ogg', 'assets/sounds/eat.wav', 'assets/sounds/eat.m4a']);
        },
        create: function () {
            this.game.state.start('play')
        }

    }
}