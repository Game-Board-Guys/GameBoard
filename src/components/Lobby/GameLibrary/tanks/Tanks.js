import bootState from './state/boot';
import loadState from './state/load';
import menuState from './state/menu';
import playState from './state/play';
import winState from './state/win';
import loseState from './state/lose';

window.PIXI = require('phaser-ce/build/custom/pixi');
window.p2 = require('phaser-ce/build/custom/p2');
window.Phaser = require('phaser-ce/build/custom/phaser-split');

export default function Game() {
    var game = new window.Phaser.Game(800, 600, window.Phaser.CANVAS, 'myCanvas');

    game.state.add('boot', bootState);
    game.state.add('load', loadState);
    game.state.add('menu', menuState);
    game.state.add('play', playState);
    game.state.add('win', winState);
    game.state.add('lose', loseState);

    game.state.start('boot');
}