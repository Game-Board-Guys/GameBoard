export default function bootState() {
    return {
        preload: function(){
            this.load.image('preloaderBackground', 'img/menu-stuffs/preloadbck.png');
            this.load.image('preloaderBar', 'img/menu-stuffs/preloadbar.png');
            //load all game text from text file to make localization in different games easy
            this.load.text('textList','img/snake/BasicGame.txt');
        },
        create: function () {
            this.game.physics.startSystem(window.Phaser.Physics.ARCADE);
            this.game.state.start('load');
        }
    }
}