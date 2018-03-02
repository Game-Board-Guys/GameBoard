export default function bootState(){
    return{
        preload: function () {
            //load images for loading and stuff
        },
        create: function () {
            this.game.physics.startSystem(window.Phaser.Physics.ARCADE);
            this.game.scale.scaleMode = window.Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.pageAlignHorizontally = true; 
            this.game.scale.pageAlignVertically = true;

            this.game.state.start('load');
        }
    }
}