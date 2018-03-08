export default function bootState(){
    return{
        preload: function () {
            this.load.image('preloaderBackground', 'img/menu-stuffs/preloadbck.png');
            this.load.image('preloaderBar', 'img/menu-stuffs/preloadbar.png');
        },
        create: function () {
            

            this.game.renderer.renderSession.roundPixels = true;

            this.game.world.setBounds(0, 0, 992, 480);
            this.physics.startSystem(window.Phaser.Physics.ARCADE);
            this.physics.arcade.gravity.y = 200;

            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = true;
//makes the game center in the div
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            if (this.game.device.desktop) {

                //code for desktop devices
                this.game.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
            } else {
                //code for mobile devices

              this.game.scale.startFullScreen(false);
               this.game.scale.fullScreenScaleMode = window.Phaser.ScaleManager.SHOW_ALL;
               
            };
            this.game.state.start('load');
        }
    }
}