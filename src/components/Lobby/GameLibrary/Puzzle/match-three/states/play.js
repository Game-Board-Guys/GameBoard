export default function playState(game) {
    var fieldSize = 7;
    var orbColors = 6;
    var orbSize = 100;
    //
    var swapSpeed = 200;
    var fallSpeed = 1000;
    var destroySpeed = 500;
    var fastFall = true;
    //
    var gameArray = [];
    var removeMap = [];
    var orbGroup;
    var selectedOrb;
    var canPick = true;

    var row;
    var col;

    var score = 0;

    var self;

    game;

    return {
        create: function () {
            canPick = true;
            self = this;
            this.drawField();
            this.game.input.onDown.add(self.orbSelect);
            this.game.input.onUp.add(self.orbDeselect);

        },
        // update: function(){
        //     self.game.input.onDown.add(self.orbSelect);
        //     self.game.input.onUp.add(self.orbDeselect);
        // },
        drawField: function () {
            orbGroup = self.game.add.group();
            for (let i = 0; i < fieldSize; i += 1) {
                gameArray[i] = [];
                for (let j = 0; j < fieldSize; j += 1) {
                    let orb = self.game.add.sprite(orbSize * j + orbSize / 2, orbSize * i + orbSize / 2, "orbs");
                    orb.anchor.set(0.5);
                    orbGroup.add(orb);
                    do {
                        var randomColor = self.game.rnd.between(0, orbColors - 1);
                        orb.frame = randomColor;
                        gameArray[i][j] = {
                            orbColor: randomColor,
                            orbSprite: orb
                        }

                    } while (self.isMatch(i, j));

                }
            }
            selectedOrb = null;
        },
        gemAt: function (row, col) {
            if (row < 0 || row >= fieldSize || col < 0 || col >= fieldSize) {
                return -1;
            }
            return gameArray[row][col];
        },
        orbSelect: function (e) {
            if (canPick) {
                row = Math.floor(game.input.mousePointer.y / 100);
                col = Math.floor(game.input.mousePointer.x / 100);
                var pickedOrb = self.gemAt(row, col);
                if (pickedOrb !== -1) {
                    if (selectedOrb === null) {
                        pickedOrb.orbSprite.scale.setTo(1.2);
                        pickedOrb.orbSprite.bringToTop();
                        selectedOrb = pickedOrb;
                        game.input.addMoveCallback(self.orbMove);
                    }
                    else {
                        if (self.areTheSame(pickedOrb, selectedOrb)) {
                            selectedOrb.orbSprite.scale.setTo(1);
                            selectedOrb = null;
                        }
                        else {
                            if (self.areNext(pickedOrb, selectedOrb)) {
                                selectedOrb.orbSprite.scale.setTo(1);
                                self.swapOrbs(selectedOrb, pickedOrb, true);
                            }
                            else {
                                selectedOrb.orbSprite.scale.setTo(1);
                                pickedOrb.orbSprite.scale.setTo(1.2);
                                selectedOrb = pickedOrb;
                                game.input.addMoveCallback(self.orbMove);
                            }
                        }
                    }
                }
            }
        },
        orbDeselect: function (e) {
            game.input.deleteMoveCallback(self.orbMove);
        },
        orbMove: function (event, pX, pY) {
            if (event.id === 0) {
                var distX = pX - selectedOrb.orbSprite.x;
                var distY = pY - selectedOrb.orbSprite.y;
                var deltaRow = 0;
                var deltaCol = 0;
                if (Math.abs(distX) > orbSize / 2) {
                    if (distX > 0) {
                        deltaCol = 1;
                    }
                    else {
                        deltaCol = -1;
                    }
                }
                else {
                    if (Math.abs(distY) > orbSize / 2) {
                        if (distY > 0) {
                            deltaRow = 1;
                        }
                        else {
                            deltaRow = -1;
                        }
                    }
                }
                if (deltaRow + deltaCol !== 0) {
                    var pickedOrb = self.gemAt(self.getOrbRow(selectedOrb) + deltaRow, self.getOrbCol(selectedOrb) + deltaCol);
                    if (pickedOrb !== -1) {
                        selectedOrb.orbSprite.scale.setTo(1);
                        self.swapOrbs(selectedOrb, pickedOrb, true);
                        self.game.input.deleteMoveCallback(self.orbMove);
                    }
                }
            }
        },
        swapOrbs: function (orb1, orb2, swapBack, game) {
            canPick = false;
            var fromColor = orb1.orbColor;
            var fromSprite = orb1.orbSprite;
            var toColor = orb2.orbColor;
            var toSprite = orb2.orbSprite;
            gameArray[self.getOrbRow(orb1)][self.getOrbCol(orb1)].orbColor = toColor;
            gameArray[self.getOrbRow(orb1)][self.getOrbCol(orb1)].orbSprite = toSprite;
            gameArray[self.getOrbRow(orb2)][self.getOrbCol(orb2)].orbColor = fromColor;
            gameArray[self.getOrbRow(orb2)][self.getOrbCol(orb2)].orbSprite = fromSprite;
            var orb1Tween = self.game.add.tween(gameArray[self.getOrbRow(orb1)][self.getOrbCol(orb1)].orbSprite).to({
                x: self.getOrbCol(orb1) * orbSize + orbSize / 2,
                y: self.getOrbRow(orb1) * orbSize + orbSize / 2
            }, swapSpeed, window.Phaser.Easing.Linear.None, true);
            var orb2Tween = self.game.add.tween(gameArray[self.getOrbRow(orb2)][self.getOrbCol(orb2)].orbSprite).to({
                x: self.getOrbCol(orb2) * orbSize + orbSize / 2,
                y: self.getOrbRow(orb2) * orbSize + orbSize / 2
            }, swapSpeed, window.Phaser.Easing.Linear.None, true);
            orb2Tween.onComplete.add(function () {
                if (!self.matchInBoard() && swapBack) {
                    self.swapOrbs(orb1, orb2, false);
                }
                else {
                    if (self.matchInBoard()) {
                        self.handleMatches();
                    }
                    else {
                        canPick = true;
                        selectedOrb = null;
                    }
                }
            });
        },
        areNext: function (orb1, orb2) {
            return Math.abs(self.getOrbRow(orb1) - self.getOrbRow(orb2)) + Math.abs(self.getOrbCol(orb1) - self.getOrbCol(orb2)) === 1;
        },
        areTheSame: function (orb1, orb2) {
            return self.getOrbRow(orb1) === self.getOrbRow(orb2) && self.getOrbCol(orb1) === self.getOrbCol(orb2);
        },

        getOrbRow: function (orb) {
            return Math.floor(orb.orbSprite.y / orbSize);
        },
        getOrbCol: function (orb) {
            return Math.floor(orb.orbSprite.x / orbSize);
        },
        isHorizontalMatch: function (row, col) {
            return self.gemAt(row, col).orbColor === self.gemAt(row, col - 1).orbColor && self.gemAt(row, col).orbColor === self.gemAt(row, col - 2).orbColor;
        },
        isVerticalMatch: function (row, col) {
            return self.gemAt(row, col).orbColor === self.gemAt(row - 1, col).orbColor && self.gemAt(row, col).orbColor === self.gemAt(row - 2, col).orbColor;
        },
        isMatch: function (row, col) {
            return self.isHorizontalMatch(row, col) || self.isVerticalMatch(row, col);
        },
        matchInBoard: function () {
            for (var i = 0; i < fieldSize; i+=1) {
                for (var j = 0; j < fieldSize; j+=1) {
                    if (self.isMatch(i, j)) {
                        return true;
                    }
                }
            }
            return false;
        },
        handleMatches: function () {
            removeMap = [];
            for (let i = 0; i < fieldSize; i+=1) {
                removeMap[i] = [];
                for (let j = 0; j < fieldSize; j+=1) {
                    removeMap[i].push(0);
                }
            }
            self.handleHorizontalMatches();
            self.handleVerticalMatches();
            self.destroyOrbs();
        },
        handleVerticalMatches: function () {
            for (var i = 0; i < fieldSize; i += 1) {
                var colorStreak = 1;
                var currentColor = -1;
                var startStreak = 0;
                for (var j = 0; j < fieldSize; j += 1) {
                    if (self.gemAt(j, i).orbColor === currentColor) {
                        colorStreak += 1;
                    }
                    if (self.gemAt(j, i).orbColor !== currentColor || j === fieldSize - 1) {
                        if (colorStreak >= 3) {
                            switch (colorStreak) {
                                case 3:
                                    for (var k = 0; k < colorStreak; k += 1) {
                                        removeMap[startStreak + k][i] += 1;
                                        score += 10;
                                    }
                                    break;
                                case 4:
                                    for (var k = 0; k < fieldSize; k += 1) {
                                        removeMap[k][i] += 1;
                                        score += 30;
                                    }
                                    break;
                                default:
                                    for (var k = 0; k < fieldSize; k += 1) {
                                        for (var l = 0; l < fieldSize; l += 1) {
                                            if (self.gemAt(k, l).orbColor === currentColor) {
                                                removeMap[k][l] += 1;
                                            }
                                        }
                                    }
                                    break;
                            }
                        }
                        startStreak = j;
                        colorStreak = 1;
                        currentColor = self.gemAt(j, i).orbColor;
                    }
                }
            }
        },
        handleHorizontalMatches: function () {
            for (var i = 0; i < fieldSize; i += 1) {
                var colorStreak = 1;
                var currentColor = -1;
                var startStreak = 0;
                for (var j = 0; j < fieldSize; j += 1) {
                    if (self.gemAt(i, j).orbColor === currentColor) {
                        colorStreak += 1;
                    }
                    if (self.gemAt(i, j).orbColor !== currentColor || j === fieldSize - 1) {
                        if (colorStreak >= 3) {

                            switch (colorStreak) {
                                case 3:
                                    for (var k = 0; k < colorStreak; k += 1) {
                                        removeMap[i][startStreak + k] += 1;
                                        score+=10;
                                    }
                                    break;
                                case 4:
                                    for (var k = 0; k < fieldSize; k += 1) {
                                        removeMap[i][k] += 1;
                                        score+=30;
                                    }
                                    break;
                                default:
                                    for (var k = 0; k < fieldSize; k += 1) {
                                        for (var l = 0; l < fieldSize; l += 1) {
                                            if (self.gemAt(k, l).orbColor === currentColor) {
                                                removeMap[k][l] += 1;
                                            }
                                        }
                                    }
                                    break;
                            }
                        }
                        startStreak = j;
                        colorStreak = 1;
                        currentColor = self.gemAt(i, j).orbColor;
                    }
                }
            }
        },
        destroyOrbs: function () {
            var destroyed = 0;
            for (var i = 0; i < fieldSize; i+=1) {
                for (var j = 0; j < fieldSize; j+=1) {
                    if (removeMap[i][j] > 0) {
                        var destroyTween = self.game.add.tween(gameArray[i][j].orbSprite).to({
                            alpha: 0
                        }, destroySpeed, window.Phaser.Easing.Linear.None, true);
                        destroyed += 1;
                        destroyTween.onComplete.add(function (orb) {
                            orb.destroy();
                            destroyed -= 1;
                            if (destroyed === 0) {
                                self.makeOrbsFall();
                                if (fastFall) {
                                    self.replenishField();
                                }
                            }
                        });
                        gameArray[i][j] = null;
                    }
                }
            }
        },
        makeOrbsFall: function () {
            var fallen = 0;
            var restart = false;
            for (var i = fieldSize - 2; i >= 0; i-=1) {
                for (var j = 0; j < fieldSize; j+=1) {
                    if (gameArray[i][j] != null) {
                        var fallTiles = self.holesBelow(i, j);
                        if (fallTiles > 0) {
                            if (!fastFall && fallTiles > 1) {
                                fallTiles = 1;
                                restart = true;
                            }
                            var orb2Tween = self.game.add.tween(gameArray[i][j].orbSprite).to({
                                y: gameArray[i][j].orbSprite.y + fallTiles * orbSize
                            }, fallSpeed, window.Phaser.Easing.Linear.None, true);
                            fallen++;
                            orb2Tween.onComplete.add(function () {
                                fallen -= 1;
                                if (fallen === 0) {
                                    if (restart) {
                                        self.makeOrbsFall();
                                    }
                                    else {
                                        if (!fastFall) {
                                            self.replenishField();
                                        }
                                    }
                                }
                            })
                            gameArray[i + fallTiles][j] = {
                                orbSprite: gameArray[i][j].orbSprite,
                                orbColor: gameArray[i][j].orbColor
                            }
                            gameArray[i][j] = null;
                        }
                    }
                }
            }
            if (fallen === 0) {
                self.replenishField();
            }
        },
        replenishField: function () {
            var replenished = 0;
            var restart = false;
            for (var j = 0; j < fieldSize; j+=1) {
                var emptySpots = self.holesInCol(j);
                if (emptySpots > 0) {
                    if (!fastFall && emptySpots > 1) {
                        emptySpots = 1;
                        restart = true;
                    }
                    for (var i = 0; i < emptySpots; i+=1) {
                        var orb = self.game.add.sprite(orbSize * j + orbSize / 2, - (orbSize * (emptySpots - 1 - i) + orbSize / 2), "orbs");
                        orb.anchor.set(0.5);
                        orbGroup.add(orb);
                        var randomColor = self.game.rnd.between(0, orbColors - 1);
                        orb.frame = randomColor;
                        gameArray[i][j] = {
                            orbColor: randomColor,
                            orbSprite: orb
                        }
                        var orb2Tween = self.game.add.tween(gameArray[i][j].orbSprite).to({
                            y: orbSize * i + orbSize / 2
                        }, fallSpeed, window.Phaser.Easing.Linear.None, true);
                        replenished += 1;
                        orb2Tween.onComplete.add(function () {
                            replenished -= 1;
                            if (replenished === 0) {
                                if (restart) {
                                    self.makeOrbsFall();
                                }
                                else {
                                    if (self.matchInBoard()) {
                                        self.game.time.events.add(250, self.handleMatches);
                                    }
                                    else {
                                        canPick = true;
                                        selectedOrb = null;
                                    }
                                }
                            }
                        })
                    }
                }
            }
        },
        holesBelow: function (row, col) {
            var result = 0;
            for (var i = row + 1; i < fieldSize; i+=1) {
                if (gameArray[i][col] === null) {
                    result += 1;
                }
            }
            return result;
        },
        holesInCol: function (col) {
            var result = 0;
            for (var i = 0; i < fieldSize; i+=1) {
                if (gameArray[i][col] === null) {
                    result++;
                }
            }
            return result;
        }

    }
}