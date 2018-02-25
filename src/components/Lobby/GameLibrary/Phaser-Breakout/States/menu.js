export default function menuState() {
    return {
        create: function () {
            var nameLabel = this.game.add.text(80, 80, 'Breakout', { font: '50px Arial', fill: '#fff' });
            var startButton = this.game.add.button(this.game.world.width * 0.5, this.game.world.height * 0.5, 'button', this.easy, this, 1, 0, 2);
            startButton.anchor.set(0.5)
            var startButton = this.game.add.button(this.game.world.width * 0.5, this.game.world.height * 0.6, 'button', this.medium, this, 1, 0, 2);
            startButton.anchor.set(0.5)
            var startButton = this.game.add.button(this.game.world.width * 0.5, this.game.world.height * 0.7, 'button', this.hard, this, 1, 0, 2);
            startButton.anchor.set(0.5)
        },
        easy: function () {
            this.game.state.start('level1', true, false, { ballSpeed: 250, lives: 3 })
        },
        medium: function () {
            this.game.state.start('level1', true, false, { ballSpeed: 450, lives: 3 })
        },
        hard: function () {
            this.game.state.start('level1', true, false, { ballSpeed: 650, lives: 2 })
        }
    }
}