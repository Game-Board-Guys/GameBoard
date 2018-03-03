export default function loadState() {
    return {
        preload: function(){
            this.bck = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBackground');
            this.bck.anchor.setTo(0.5, 0.5);
            this.bck.scale.setTo(0.5, 0.5);
            this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
            this.preloadBar.anchor.setTo(0, 0.5);
            this.preloadBar.scale.setTo(0.5, 1);
            this.preloadBar.x = this.world.centerX - this.preloadBar.width / 2;


            this.load.setPreloadSprite(this.preloadBar);
            this.game.load.spritesheet('button', 'img/menu-stuffs/blueSheet.png', 190, 47.4);

            this.load.baseURL = 'img/';
            this.load.image('board');
            this.load.image('glow');
            this.load.image('roll');
            this.load.atlas('dice');
        },
        create: function () {
            this.game.state.start('menu');
        }
    }
}