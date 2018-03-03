export default function bootState(){
    return{
        preload: function(){
            // preload the loading indicator first before anything else
            this.load.image('preloaderBar', 'img/loading-bar.png');
        },
        create: function(){
            
            // start the physics engine
		this.physics.startSystem(window.Phaser.Physics.ARCADE);            
            // set scale options
            this.input.maxPointers = 1;
            this.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            // this.scale.setScreenSize(true);
            // start the Preloader state
            this.state.start('load');
        }
    }
}