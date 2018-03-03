export default function loadState() {
    var Ball = {
        _WIDTH: 320,
        _HEIGHT: 480
    };
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


            this.load.image('ball', 'img/2d-maze/ball.png');
            this.load.image('hole', 'img/2d-maze/hole.png');
            this.load.image('element-w', 'img/2d-maze/element-w.png');
            this.load.image('element-h', 'img/2d-maze/element-h.png');
            this.load.image('panel', 'img/2d-maze/panel.png');
            this.load.image('title', 'img/2d-maze/title.png');
            this.load.image('button-pause', 'img/2d-maze/button-pause.png');
            this.load.image('screen-bg', 'img/2d-maze/screen-bg.png');
            this.load.image('screen-mainmenu', 'img/2d-maze/screen-mainmenu.png');
            this.load.image('screen-howtoplay', 'img/2d-maze/screen-howtoplay.png');
            this.load.image('border-horizontal', 'img/2d-maze/border-horizontal.png');
            this.load.image('border-vertical', 'img/2d-maze/border-vertical.png');

            this.load.spritesheet('button-audio', 'img/2d-maze/button-audio.png', 35, 35);
            this.load.spritesheet('button-start', 'img/2d-maze/button-start.png', 146, 51);

            this.load.audio('audio-bounce', ['audio/bounce.ogg', 'audio/bounce.mp3', 'audio/bounce.m4a']);
        },
        create: function () {
            this.game.state.start('menu')
        }
    }
}