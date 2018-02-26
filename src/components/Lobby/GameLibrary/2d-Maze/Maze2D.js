import bootState from './States/boot';
import loadState from './States/load';
import menuState from './States/menu';
import playState from './States/play';
import winState from './States/win';
import HowtoState from './States/Howto';

window.PIXI = require('phaser-ce/build/custom/pixi');
window.p2 = require('phaser-ce/build/custom/p2');
window.Phaser = require('phaser-ce/build/custom/phaser-split');

//Global Ball - window size
var Ball = {
    _WIDTH: 320,
    _HEIGHT: 480
};

/* Main Loop */
export default function Maze2D() {
    var game = new window.Phaser.Game(320, 480, window.Phaser.AUTO, 'myCanvas');

    game.state.add('boot', bootState);
    game.state.add('load', loadState);
    game.state.add('menu', menuState);
    game.state.add('Howto', HowtoState);
    game.state.add('play', playState);
    game.state.add('win', winState);

    game.state.start('boot');
    
}