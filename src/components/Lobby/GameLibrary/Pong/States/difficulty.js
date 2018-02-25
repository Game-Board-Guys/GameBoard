export default function difficultyState() {
    var nameLabel, easyLabel, mediumLabel, hardLabel, ekey, mkey, hkey;

    return {
        create: function () {
            nameLabel = this.game.add.text(80, 80, 'Pick your difficulty', { font: '50px Arial', fill: '#fff' });
            easyLabel = this.game.add.text(80, this.game.world.height - 80,
                'press the "E" for Easy', { font: '25px Arial', fill: '#fff' });
            mediumLabel = this.game.add.text(80, this.game.world.height - 150,
                'press the "M" for Medium', { font: '25px Arial', fill: '#fff' });
            hardLabel = this.game.add.text(80, this.game.world.height - 220,
                'press the "H" for Hard', { font: '25px Arial', fill: '#fff' });
            ekey = this.game.input.keyboard.addKey(window.Phaser.Keyboard.E);
            ekey.onDown.addOnce(this.easy, this);
            mkey = this.game.input.keyboard.addKey(window.Phaser.Keyboard.M);
            mkey.onDown.addOnce(this.medium, this);
            hkey = this.game.input.keyboard.addKey(window.Phaser.Keyboard.H);
            hkey.onDown.addOnce(this.hard, this);
        },
        easy: function () {
            this.game.state.start('play', true, false, { maxSpeed: 150 })
        },
        medium: function () {
            this.game.state.start('play', true, false, { maxSpeed: 300 })
        },
        hard: function () {
            this.game.state.start('play', true, false, { maxSpeed: 400 })
        }
    }
}