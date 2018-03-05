export default function loadState(){
    var preloadBar = null;
    return{
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
           //load images
             preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloadBar');
            preloadBar.anchor.setTo(0.5, 0.5);
            this.time.advancedtiming = true;
            this.load.setPreloadSprite(preloadBar)

            this.load.image('tank', 'img/tanks/tank.png');
            this.load.image('turret', 'img/tanks/turret.png');
            this.load.image('bullet', 'img/tanks/bullet.png');
            this.load.image('background', 'img/tanks/background.png');
            this.load.image('flame', 'img/tanks/flame.png');
            this.load.image('target', 'img/tanks/target.png');
            this.load.image('land', 'img/tanks/land.png');
            //  Note: Graphics from Amiga Tanx Copyright 1991 Gary Roberts

        
           //load audio
        },
        create: function () {
           this.game.state.start('menu')
        }
    }
}