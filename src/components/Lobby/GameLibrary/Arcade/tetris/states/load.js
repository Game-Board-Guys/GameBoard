export default function loadState(){
    return{
        preload : function(){
            this.stage.backgroundColor = "#000";
            this.preloadtext = this.add.text(this.game.world.centerX,this.game.world.centerY,"Loading..."+this.load.progress+"%",{ font: "20px Arial", fill: "#ff0044", align: "center" });
            this.preloadtext.anchor.setTo(0.5,0.5);
    
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
        },
        create : function(){
            this.game.state.start('menu');
        }
    }
}