export default function winState() {
    var score =0;
    return {
        init: function(data){
            score = data.score;
        },
        create: function () {

            this.game.world.bounds.x = 0;

            this.game.world.bounds.y = 0;

            this.game.world.bounds.width = 400;

            this.game.world.bounds.height = 600;



            this.winimage = this.game.add.sprite(0, 0, 'win');

            this.playbutton = this.add.button(this.game.world.centerX, 500, 'play', this.playclicked, this, 1, 0, 2);

            this.playbutton.anchor.setTo(0.5, 0.5);

            this.tweenplay = this.game.add.tween(this.playbutton).to({ y: 550 }, 1000, window.Phaser.Easing.Sinusoidal.InOut, true, 0, 100, true);

        },

        playclicked: function () {

            score = 0;

            this.game.state.start('Game');

        },
    }
}