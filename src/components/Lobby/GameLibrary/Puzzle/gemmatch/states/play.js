export default function playState(game) {
    var GEM_SIZE = 64;
    var GEM_SPACING = 2;
    var GEM_SIZE_SPACED = GEM_SIZE + GEM_SPACING;
    var BOARD_COLS;
    var BOARD_ROWS;
    var MATCH_MIN = 3; // min number of same color gems required in a row to be considered a match

    var gems;
    var selectedGem = null;
    var selectedGemStartPos;
    var selectedGemTween;
    var tempShiftedGem = null;
    var allowInput;
    var self;
    return {
        create: function() {
            self= this;
            // fill the screen with as many gems as possible
            self.spawnBoard();

            // currently selected gem starting position. used to stop player form moving gems too far.
            selectedGemStartPos = { x: 0, y: 0 };

            // used to disable input while gems are dropping down and respawning
            allowInput = false;

            game.input.addMoveCallback(self.slideGem, self);
        },
        releaseGem: function() {
            if (tempShiftedGem === null) {
                selectedGem = null;
                return;
            }

            // when the mouse is released with a gem selected
            // 1) check for matches
            // 2) remove matched gems
            // 3) drop down gems above removed gems
            // 4) refill the board

            var canKill = self.checkAndKillGemMatches(selectedGem);
            canKill = self.checkAndKillGemMatches(tempShiftedGem) || canKill;

            if (!canKill) // there are no matches so swap the gems back to the original positions
            {
                var gem = selectedGem;

                if (gem.posX !== selectedGemStartPos.x || gem.posY !== selectedGemStartPos.y) {
                    if (selectedGemTween !== null) {
                        game.tweens.remove(selectedGemTween);
                    }

                    selectedGemTween = self.tweenGemPos(gem, selectedGemStartPos.x, selectedGemStartPos.y);

                    if (tempShiftedGem !== null) {
                        self.tweenGemPos(tempShiftedGem, gem.posX, gem.posY);
                    }

                    self.swapGemPosition(gem, tempShiftedGem);

                    tempShiftedGem = null;

                }
            }

            self.removeKilledGems();

            var dropGemDuration = self.dropGems();

            // delay board refilling until all existing gems have dropped down
            game.time.events.add(dropGemDuration * 100, self.refillBoard);

            allowInput = false;

            selectedGem = null;
            tempShiftedGem = null;
        },
        slideGem: function(pointer, x, y) {
            // check if a selected gem should be moved and do it

            if (selectedGem && pointer.isDown) {
                var cursorGemPosX = self.getGemPos(x);
                var cursorGemPosY = self.getGemPos(y);

                if (self.checkIfGemCanBeMovedHere(selectedGemStartPos.x, selectedGemStartPos.y, cursorGemPosX, cursorGemPosY)) {
                    if (cursorGemPosX !== selectedGem.posX || cursorGemPosY !== selectedGem.posY) {
                        // move currently selected gem
                        if (selectedGemTween !== null) {
                            game.tweens.remove(selectedGemTween);
                        }

                        selectedGemTween = self.tweenGemPos(selectedGem, cursorGemPosX, cursorGemPosY);

                        gems.bringToTop(selectedGem);

                        // if we moved a gem to make way for the selected gem earlier, move it back into its starting position
                        if (tempShiftedGem !== null) {
                            self.tweenGemPos(tempShiftedGem, selectedGem.posX, selectedGem.posY);
                            self.swapGemPosition(selectedGem, tempShiftedGem);
                        }

                        // when the player moves the selected gem, we need to swap the position of the selected gem with the gem currently in that position 
                        tempShiftedGem = self.getGem(cursorGemPosX, cursorGemPosY);

                        if (tempShiftedGem === selectedGem) {
                            tempShiftedGem = null;
                        }
                        else {
                            self.tweenGemPos(tempShiftedGem, selectedGem.posX, selectedGem.posY);
                            self.swapGemPosition(selectedGem, tempShiftedGem);
                        }
                    }
                }
            }
        },
        spawnBoard: function(){
            BOARD_COLS = Math.floor(game.world.width / GEM_SIZE_SPACED);
            BOARD_ROWS = Math.floor(game.world.height / GEM_SIZE_SPACED);

            gems = game.add.group();

            for (var i = 0; i < BOARD_COLS; i++) {
                for (var j = 0; j < BOARD_ROWS; j++) {
                    var gem = gems.create(i * GEM_SIZE_SPACED, j * GEM_SIZE_SPACED, "GEMS");
                    gem.name = 'gem' + i.toString() + 'x' + j.toString();
                    gem.inputEnabled = true;
                    gem.events.onInputDown.add(self.selectGem, self);
                    gem.events.onInputUp.add(self.releaseGem, self);
                    self.randomizeGemColor(gem);
                    self.setGemPos(gem, i, j); // each gem has a position on the board
                    gem.kill();
                }
            }

            self.removeKilledGems();

            var dropGemDuration = self.dropGems();

            // delay board refilling until all existing gems have dropped down
            game.time.events.add(dropGemDuration * 100, self.refillBoard);

            allowInput = false;

            selectedGem = null;
            tempShiftedGem = null;
        },
        selectGem: function(gem) {
            if (allowInput) {
                selectedGem = gem;
                selectedGemStartPos.x = gem.posX;
                selectedGemStartPos.y = gem.posY;
            }
        },
        getGem: function(posX, posY) {
            return gems.iterate("id", self.calcGemId(posX, posY), window.Phaser.Group.RETURN_CHILD);
        },
       getGemPos: function(coordinate) {

            return Math.floor(coordinate / GEM_SIZE_SPACED);
        
        },
        setGemPos: function(gem, posX, posY) {
            gem.posX = posX;
            gem.posY = posY;
            gem.id = self.calcGemId(posX, posY);
        },
        calcGemId: function(posX, posY) {
            return posX + posY * BOARD_COLS;
        },
        getGemColor: function(gem) {
            return gem.frame;
        },
        randomizeGemColor:function(gem) {
            gem.frame = game.rnd.integerInRange(0, gem.animations.frameTotal - 1);
        },
        checkIfGemCanBeMovedHere: function(fromPosX, fromPosY, toPosX, toPosY) {
            if (toPosX < 0 || toPosX >= BOARD_COLS || toPosY < 0 || toPosY >= BOARD_ROWS) {
                return false;
            }

            if (fromPosX === toPosX && fromPosY >= toPosY - 1 && fromPosY <= toPosY + 1) {
                return true;
            }

            if (fromPosY === toPosY && fromPosX >= toPosX - 1 && fromPosX <= toPosX + 1) {
                return true;
            }

            return false;
        },
        countSameColorGems: function(startGem, moveX, moveY) {
            var curX = startGem.posX + moveX;
            var curY = startGem.posY + moveY;
            var count = 0;

            while (curX >= 0 && curY >= 0 && curX < BOARD_COLS && curY < BOARD_ROWS && self.getGemColor(self.getGem(curX, curY)) === self.getGemColor(startGem)) {
                count++;
                curX += moveX;
                curY += moveY;
            }

            return count;
        },
        swapGemPosition: function(gem1, gem2) {
            var tempPosX = gem1.posX;
            var tempPosY = gem1.posY;
            self.setGemPos(gem1, gem2.posX, gem2.posY);
            self.setGemPos(gem2, tempPosX, tempPosY);
        },
        checkAndKillGemMatches: function(gem) {
            if (gem === null) { return; }

            var canKill = false;

            // process the selected gem

            var countUp = self.countSameColorGems(gem, 0, -1);
            var countDown = self.countSameColorGems(gem, 0, 1);
            var countLeft = self.countSameColorGems(gem, -1, 0);
            var countRight = self.countSameColorGems(gem, 1, 0);

            var countHoriz = countLeft + countRight + 1;
            var countVert = countUp + countDown + 1;

            if (countVert >= MATCH_MIN) {
                self.killGemRange(gem.posX, gem.posY - countUp, gem.posX, gem.posY + countDown);
                canKill = true;
            }

            if (countHoriz >= MATCH_MIN) {
                self.killGemRange(gem.posX - countLeft, gem.posY, gem.posX + countRight, gem.posY);
                canKill = true;
            }

            return canKill;
        },
        killGemRange: function(fromX, fromY, toX, toY) {
            fromX = window.Phaser.Math.clamp(fromX, 0, BOARD_COLS - 1);
            fromY = window.Phaser.Math.clamp(fromY, 0, BOARD_ROWS - 1);
            toX = window.Phaser.Math.clamp(toX, 0, BOARD_COLS - 1);
            toY = window.Phaser.Math.clamp(toY, 0, BOARD_ROWS - 1);

            for (var i = fromX; i <= toX; i++) {
                for (var j = fromY; j <= toY; j++) {
                    var gem = self.getGem(i, j);
                    gem.kill();
                }
            }
        },
        removeKilledGems: function() {
            gems.forEach(function (gem) {
                if (!gem.alive) {
                    self.setGemPos(gem, -1, -1);
                }
            });

        },
        tweenGemPos: function(gem, newPosX, newPosY, durationMultiplier) {
            if (durationMultiplier === null || typeof durationMultiplier === 'undefined') {
                durationMultiplier = 1;
            }

            return game.add.tween(gem).to({ x: newPosX * GEM_SIZE_SPACED, y: newPosY * GEM_SIZE_SPACED }, 100 * durationMultiplier, window.Phaser.Easing.Linear.None, true);
        },
        dropGems: function() {
            var dropRowCountMax = 0;

            for (var i = 0; i < BOARD_COLS; i++) {
                var dropRowCount = 0;

                for (var j = BOARD_ROWS - 1; j >= 0; j--) {
                    var gem = self.getGem(i, j);

                    if (gem === null) {
                        dropRowCount++;
                    }
                    else if (dropRowCount > 0) {
                        gem.dirty = true;
                        self.setGemPos(gem, gem.posX, gem.posY + dropRowCount);
                        self.tweenGemPos(gem, gem.posX, gem.posY, dropRowCount);
                    }
                }

                dropRowCountMax = Math.max(dropRowCount, dropRowCountMax);
            }

            return dropRowCountMax;

        },
        refillBoard: function() {
            var maxGemsMissingFromCol = 0;

            for (var i = 0; i < BOARD_COLS; i++) {
                var gemsMissingFromCol = 0;

                for (var j = BOARD_ROWS - 1; j >= 0; j--) {
                    var gem = self.getGem(i, j);

                    if (gem === null) {
                        gemsMissingFromCol++;
                        gem = gems.getFirstDead();
                        gem.reset(i * GEM_SIZE_SPACED, -gemsMissingFromCol * GEM_SIZE_SPACED);
                        gem.dirty = true;
                        self.randomizeGemColor(gem);
                        self.setGemPos(gem, i, j);
                        self.tweenGemPos(gem, gem.posX, gem.posY, gemsMissingFromCol * 2);
                    }
                }

                maxGemsMissingFromCol = Math.max(maxGemsMissingFromCol, gemsMissingFromCol);
            }

            game.time.events.add(maxGemsMissingFromCol * 2 * 100, self.boardRefilled);
        },
        boardRefilled: function() {
            var canKill = false;
            for (var i = 0; i < BOARD_COLS; i++) {
                for (var j = BOARD_ROWS - 1; j >= 0; j--) {
                    var gem = self.getGem(i, j);

                    if (gem.dirty) {
                        gem.dirty = false;
                        canKill = self.checkAndKillGemMatches(gem) || canKill;
                    }
                }
            }

            if (canKill) {
                self.removeKilledGems();
                var dropGemDuration = self.dropGems();
                // delay board refilling until all existing gems have dropped down
                game.time.events.add(dropGemDuration * 100, self.refillBoard);
                allowInput = false;
            } else {
                allowInput = true;
            }
        }
    }
}