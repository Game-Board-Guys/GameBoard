export default function menuState(){
    return{
        create: function () {
            this.add.tileSprite(0, 0, 800, 600 , 'sky');
            this.gameTitle = this.add.sprite(20* 0.5, 40, 'title');
            this.gameTitle.anchor.set(0.5, 0);
            this.startButton = this.add.button(20 * 0.5, 200, 'button-start', this.startGame, this, 2, 0, 1)
            this.startButton.anchor.set(0.5, 0);
            this.startButton.input.useHandCursor = true;
        },
        startGame: function () {
            this.game.state.start('Howto')
        }
    }
}