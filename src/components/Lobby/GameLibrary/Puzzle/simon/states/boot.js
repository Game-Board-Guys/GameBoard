export default function bootState(){
    return{
        preload: function () {

            this.load.image('preloaderBackground', 'img/simon/preloadbck.png');
            this.load.image('preloaderBar', 'img/simon/preloadbar.png');
    
        },    
        create: function(){
            this.game.physics.startSystem(window.Phaser.Physics.ARCADE);
            this.game.state.start('load');
        }
    }
}