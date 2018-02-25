import bootState from './States/boot';
import loadState from './States/load';
import menuState from './States/menu';
import winState from './States/win';
import loseState from './States/lose';

import level1State from './Levels/level1';
import level2State from './Levels/level2';
import level3State from './Levels/level3';

window.PIXI = require('phaser-ce/build/custom/pixi');
window.p2 = require('phaser-ce/build/custom/p2');
window.Phaser = require('phaser-ce/build/custom/phaser-split');

export default function Breakout() {
    var game = new window.Phaser.Game(600, 400, window.Phaser.AUTO, 'myCanvas')

    game.state.add('boot', bootState);
    game.state.add('load', loadState);
    game.state.add('menu', menuState);
    game.state.add('win', winState);
    game.state.add('lose', loseState);

    game.state.add('level1', level1State);
    game.state.add('level2', level2State);
    game.state.add('level3', level3State);

    game.state.start('boot');
}