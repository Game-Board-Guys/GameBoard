export default function menuState(){
    var textType = {
        font: '14pt Arial',
        fill: '#fff',
        align: 'center'
    }
    return{
        create: function () {
            var nameLabel = this.game.add.text(80, 80, 'Match Three', { font: '50px Arial', fill: '#fff' });
            
            this.createButton(this.game, "Endless", this.game.world.width * 0.5, this.game.world.height * 0.5, 190, 47.4, this.endless);

            this.createButton(this.game, "Endless Rotation", this.game.world.width * 0.5, this.game.world.height * 0.65, 190, 47.4, this.rotation);

        },
        help: function () {
            this.game.state.start('howto')
        },
        endless: function () {
            this.game.state.start('play')
        },
        rotation: function () {
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