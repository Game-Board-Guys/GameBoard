export default function loadState(){
    var GAME_WIDTH = 640;
	var GAME_HEIGHT = 960;
    return{
        preload: function(){
            // set background color and preload image
            this.stage.backgroundColor = '#B4D9E7';
            this.preloadBar = this.add.sprite((GAME_WIDTH-311)/2, (GAME_HEIGHT-27)/2, 'preloaderBar');
            this.load.setPreloadSprite(this.preloadBar);
            // load images
            this.load.image('background', 'img/monsterCandy/background.png');
            this.load.image('floor', 'img/monsterCandy/floor.png');
            this.load.image('monster-cover', 'img/monsterCandy/monster-cover.png');
            this.load.image('title', 'img/monsterCandy/title.png');
            this.load.image('game-over', 'img/monsterCandy/gameover.png');
            this.load.image('score-bg', 'img/monsterCandy/score-bg.png');
            this.load.image('button-pause', 'img/monsterCandy/button-pause.png');
            // load spritesheets
            this.load.spritesheet('candy', 'img/monsterCandy/candy.png', 82, 98);
            this.load.spritesheet('monster-idle', 'img/monsterCandy/monster-idle.png', 103, 131);
            this.load.spritesheet('button-start', 'img/monsterCandy/button-start.png', 401, 143);
        },
        create: function(){
            // start the MainMenu state
            this.state.start('menu');
        }
    }
}