export default function playState(game) {
    var timeCheck = 0;
    var flipFlag = false;

    var startList = new Array;
    var squareList = new Array;

    var masterCounter = 0;
    var squareCounter = 0;
    var clickCount = 0;
    var square1Num;
    var square2Num;
    var savedSquareX1;
    var savedSquareY1;
    var savedSquareX2;
    var savedSquareY2;

    var map;
    var tileset;
    var layer;

    var marker;
    var currentTile;
    var currentTilePosition;

    var tileBack = 25;
    var timesUp = '+';
    var youWin = '+';

    var myCountdownSeconds;

    var myString1;
    var myString2;
    return {
        create: function () {
            map = game.add.tilemap('matching');

            map.addTilesetImage('Desert', 'tiles');

            //tileset = game.add.tileset('tiles');

            layer = map.createLayer('Ground');//.tilemapLayer(0, 0, 600, 600, tileset, map, 0);

            //layer.resizeWorld();

            marker = game.add.graphics();
            marker.lineStyle(2, 0x00FF00, 1);
            marker.drawRect(0, 0, 100, 100);

            this.randomizeTiles();
        },
        update: function () {

            this.countDownTimer();

            if (layer.getTileX(game.input.activePointer.worldX) <= 5) // to prevent the marker from going out of bounds
            {
                marker.x = layer.getTileX(game.input.activePointer.worldX) * 100;
                marker.y = layer.getTileY(game.input.activePointer.worldY) * 100;
            }

            if (flipFlag == true) {
                if (game.time.totalElapsedSeconds() - timeCheck > 0.5) {
                    this.flipBack();
                }
            }
            else {
                this.processClick();
            }
        },


        countDownTimer: function () {

            var timeLimit = 120;

            var mySeconds = game.time.totalElapsedSeconds();
            myCountdownSeconds = timeLimit - mySeconds;

            if (myCountdownSeconds <= 0) {
                // time is up
                timesUp = 'Time is up!';
                myCountdownSeconds = 0;

            }
        },

        processClick: function () {

            currentTile = map.getTile(layer.getTileX(marker.x), layer.getTileY(marker.y));
            currentTilePosition = ((layer.getTileY(game.input.activePointer.worldY) + 1) * 6) - (6 - (layer.getTileX(game.input.activePointer.worldX) + 1));

            if (game.input.mousePointer.isDown) {
                // check to make sure the tile is not already flipped
                if (currentTile.index === tileBack) {
                    // get the corresponding item out of squareList
                    let currentNum = squareList[currentTilePosition - 1];
                    this.flipOver();
                    squareCounter += 1;
                    clickCount += 1;

                    // is the second tile of pair flipped?
                    if (squareCounter == 2) {
                        // reset squareCounter
                        squareCounter = 0;
                        square2Num = currentNum;
                        // check for match
                        if (square1Num == square2Num) {
                            masterCounter += 1;

                            if (masterCounter == 18) {
                                // go "win"
                                youWin = 'Got them all!';
                                if (clickCount == 18) {
                                    youWin = 'Hard-mode achieved';
                                }
                            }
                            else {
                                savedSquareX2 = layer.getTileX(marker.x);
                                savedSquareY2 = layer.getTileY(marker.y);
                                flipFlag = true;
                                timeCheck = game.time.totalElapsedSeconds();
                            }
                        }
                        else {
                            savedSquareX1 = layer.getTileX(marker.x);
                            savedSquareY1 = layer.getTileY(marker.y);
                            square1Num = currentNum;
                        }
                    }
                }
            }
        },
        flipOver: function () {

            map.putTile(this.currentNum, layer.getTileX(marker.x), layer.getTileY(marker.y));
        },
        flipBack: function () {

            flipFlag = false;

            map.putTile(tileBack, savedSquareX1, savedSquareY1);
            map.putTile(tileBack, savedSquareX2, savedSquareY2);

        },
        randomizeTiles: function () {
            var arr = []
            for (let num = 1; num <= 18; num += 1) {
                startList.push(num);
            }
            for (let num = 1; num <= 18; num += 1) {
                startList.push(num);
            }

            // for debugging
            var myString1 = startList.toString();

            // randomize squareList
            for (let i = 1; i <= 36; i++) {
                var randomPosition = game.rnd.integerInRange(0, startList.length - 1);

                var thisNumber = startList[randomPosition];

                squareList.push(thisNumber);
                var a = startList.indexOf(thisNumber);

                startList.splice(a, 1);
            }

            // for debugging
            var myString2 = squareList.toString();

            for (let col = 0; col < 6; col++) {
                for (let row = 0; row < 6; row++) {
                    map.putTile(tileBack, col, row);
                }
            }
        },
        getHiddenTile: function () {

            var thisTile = squareList[currentTilePosition - 1];
            return thisTile;
        },
        render: function () {

            game.debug.text(timesUp, 620, 208, 'rgb(0,255,0)');
            game.debug.text(youWin, 620, 240, 'rgb(0,255,0)');

            game.debug.text('Time: ' + myCountdownSeconds, 620, 15, 'rgb(0,255,0)');

            game.debug.text('squareCounter: ' + squareCounter, 620, 272, 'rgb(0,0,255)');
            game.debug.text('Matched Pairs: ' + masterCounter, 620, 304, 'rgb(0,0,255)');
            game.debug.text('Matched Pairs: ' + clickCount, 620, 320, 'rgb(0,0,255)');


            // game.debug.text('startList: ' + myString1, 620, 208, 'rgb(255,0,0)');
            // game.debug.text('squareList: ' + myString2, 620, 240, 'rgb(255,0,0)');


            // game.debug.text('Tile: ' + map.getTile(layer.getTileX(marker.x), layer.getTileY(marker.y)).index, 620, 48, 'rgb(255,0,0)');

            game.debug.text('LayerX: ' + layer.getTileX(marker.x), 620, 80, 'rgb(255,0,0)');
            game.debug.text('LayerY: ' + layer.getTileY(marker.y), 620, 112, 'rgb(255,0,0)');

            game.debug.text('Tile Position: ' + currentTilePosition, 620, 144, 'rgb(255,0,0)');
            game.debug.text('Hidden Tile: ' + this.getHiddenTile(), 620, 176, 'rgb(255,0,0)');
        }
    }
}