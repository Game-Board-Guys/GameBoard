export default function loadState(){
    return{
        preload : function(){
            this.stage.backgroundColor = "#000";
            this.bck = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBackground');
            this.bck.anchor.setTo(0.5, 0.5);
            this.bck.scale.setTo(0.5, 0.5);
            this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
            this.preloadBar.anchor.setTo(0, 0.5);
            this.preloadBar.scale.setTo(0.5, 1);
            this.preloadBar.x = this.world.centerX - this.preloadBar.width / 2;


            this.load.setPreloadSprite(this.preloadBar);

    
            this.load.spritesheet('play','img/tetris/play.png',100,80);
            this.load.image('pause','img/tetris/Pause.png');
            this.load.image('reset','img/tetris/refresh.png');
            this.load.image('lose','img/tetris/lose.png');
            this.load.image('arrow','img/tetris/arrow.png');
            this.load.image('title','img/tetris/Title.png');
            this.load.image('logo','img/tetris/logo2.png');
            this.load.image('win','img/tetris/win.png');
            this.load.spritesheet('blocks','img/tetris/blocks.png',30,30);
            this.load.image('bck','img/tetris/Bck.png');
            this.game.load.spritesheet('button', 'img/menu-stuffs/blueSheet.png', 190, 47.4);
        },
        create : function(){
            this.game.state.start('menu');
        }
    }
}