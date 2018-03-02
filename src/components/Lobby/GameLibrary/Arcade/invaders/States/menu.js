export default function menuState(){
    var textType = {
        font: '14pt Arial',
        fill: '#fff',
        align: 'center'
    }
    return{
        create: function () {
            this.add.tileSprite(0, 0, 800, 600 , 'sky');
            var nameLabel = this.game.add.text(80, 80, 'Invaders', { font: '50px Arial', fill: '#fff' });
            
            this.createButton(this.game, "Easy", this.game.world.width * 0.5, this.game.world.height * 0.5, 190, 47.4, this.easy);

            this.createButton(this.game, "Medium", this.game.world.width * 0.5, this.game.world.height * 0.65, 190, 47.4, this.medium);

            this.createButton(this.game, "Hard", this.game.world.width * 0.5, this.game.world.height * 0.8, 190, 47.4, this.hard);

        },
        help: function () {
            this.game.state.start('howto')
        },
        easy: function () {
            this.game.state.start('play')
        },
        medium: function () {
            this.game.state.start('play')
        },
        hard: function () {
            this.game.state.start('play')
        },
        createButton: function(game, string, x, y, w, h, callback){
            var button1 = game.add.button(x, y, 'button', callback, this, 1, 0, 2);
            button1.anchor.setTo(0.5, 0.5);
            button1.width = w;
            button1.height = h;

            var text = game.add.text(
                button1.x, button1.y, string, 
                textType
            );
            text.anchor.setTo(0.5, 0.5);
        }
    }
}