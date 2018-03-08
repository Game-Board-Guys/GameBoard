export default function bootState(){
    return{
        preload: function () {
            this.load.image('preloaderBackground', 'img/menu-stuffs/preloadbck.png');
            this.load.image('preloaderBar', 'img/menu-stuffs/preloadbar.png');
        },
    
        create: function () {
    
            // if (this.game.device.desktop)
            // {
            //     this.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
    
            //     this.scale.pageAlignHorizontally = true;
            // }
            // else
            // {
               
            //     this.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
            //     this.scale.minWidth = 150;
            //     this.scale.minHeight = 250;
            //     this.scale.maxWidth = 600;
            //     this.scale.maxHeight = 1000;
            //     this.scale.forceLandscape = false;
            //     this.scale.pageAlignHorizontally = true;
            // }
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
    
            // this.scale.setScreenSize(true);
            this.state.start('load');
    
        }
    }
}