export default function menuState() {
    return {
        create: function () {
            var nameLabel = this.game.add.text(80, 80, 'Breakout', { font: '50px Arial', fill: '#fff' });
            var startButton = this.game.add.button(this.game.world.width * 0.5, this.game.world.height * 0.5, 'button', this.start, this, 1, 0, 2);
            startButton.anchor.set(0.5)
        },
        start: function () {
            this.game.state.start('play')
        }
    }
}