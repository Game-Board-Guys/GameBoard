export default function menuState(){
    var GAME_WIDTH = 640;
	var GAME_HEIGHT = 960;
    return{
        create: function(){
            // display images
            this.add.sprite(0, 0, 'background');
            this.add.sprite(-130, GAME_HEIGHT-514, 'monster-cover');
            this.add.sprite((GAME_WIDTH-395)/2, 60, 'title');
            // add the button that will start the game
            this.add.button(GAME_WIDTH-401-10, GAME_HEIGHT-143-10, 'button-start', this.startGame, this, 1, 0, 2);
        },
        startGame: function() {
            // start the Game state
            this.state.start('play');
        }
    }
}