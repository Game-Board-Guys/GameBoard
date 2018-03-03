export default function bootState(){
    return{
        preload: function () {
            this.load.image('preloaderBackground', 'img/menu-stuffs/preloadbck.png');
            this.load.image('preloaderBar', 'img/menu-stuffs/preloadbar.png');
        },
        create:function(){
            this.game.state.start('load');
        }
    }
}