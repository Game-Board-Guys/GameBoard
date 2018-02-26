export default function loadState(){
    var preloadBar = null;
    return{
        preload: function () {
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
           this.game.state.start('play')
        }
    }
}