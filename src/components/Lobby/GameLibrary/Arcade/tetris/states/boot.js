export default function bootState(){
    return{
        preload: function () {
            this.load.image('preloaderBackground', 'img/menu-stuffs/preloadbck.png');
            this.load.image('preloaderBar', 'img/menu-stuffs/preloadbar.png');
        },
        create: function(){
            
            // start the physics engine
		    this.physics.startSystem(window.Phaser.Physics.ARCADE);            
            // // set scale options
            this.scale.scaleMode = window.Phaser.ScaleManager.NO_SCALE;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            // this.scale.setScreenSize(true);
            // start the Preloader state
            this.state.start('load');
        }
    }
}