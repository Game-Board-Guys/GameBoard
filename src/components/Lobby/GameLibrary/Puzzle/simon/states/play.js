export default function playState(game) {
    var simon;
    var N = 1;
    var userCount = 0;
    var currentCount = 0;
    var sequenceCount = 16;
    var sequenceList = [];
    var simonSez = false;
    var timeCheck;
    var litSquare;
    var winner;
    var loser;
    var intro;
    var self;
    return {
        create: function () {
            self = this;
            simon = game.add.group();
            var item;

            for (var i = 0; i < 3; i++) {
                item = simon.create(150 + 168 * i, 150, 'item', i);
                // Enable input.
                item.inputEnabled = true;
                item.input.start(0, true);
                item.events.onInputDown.add(this.select);
                item.events.onInputUp.add(this.release);
                item.events.onInputOut.add(this.moveOff);
                simon.getAt(i).alpha = 0;
            }

            for (var i = 0; i < 3; i++) {
                item = simon.create(150 + 168 * i, 318, 'item', i + 3);
                // Enable input.
                item.inputEnabled = true;
                item.input.start(0, true);
                item.events.onInputDown.add(this.select);
                item.events.onInputUp.add(this.release);
                item.events.onInputOut.add(this.moveOff);
                simon.getAt(i + 3).alpha = 0;
            }

            this.introTween();
            this.setUp();
            setTimeout(function () { self.simonSequence(); intro = false; }, 6000);
        },
        restart: function () {

            N = 1;
            userCount = 0;
            currentCount = 0;
            sequenceList = [];
            winner = false;
            loser = false;
            this.introTween();
            this.setUp();
            setTimeout(function () { self.simonSequence(); intro = false; }, 6000);

        },

        introTween: function () {

            intro = true;

            for (var i = 0; i < 6; i++) {
                var flashing = game.add.tween(simon.getAt(i)).to({ alpha: 1 }, 500, window.Phaser.Easing.Linear.None, true, 0, 4, true);
                var final = game.add.tween(simon.getAt(i)).to({ alpha: .25 }, 500, window.Phaser.Easing.Linear.None, true);

                flashing.chain(final);
                flashing.start();
            }

        },

        update: function () {

            if (simonSez) {
                if (game.time.now - timeCheck > 700 - N * 40) {
                    simon.getAt(litSquare).alpha = .25;
                    game.paused = true;

                    setTimeout(function () {
                        if (currentCount < N) {
                            game.paused = false;
                            self.simonSequence();
                        }
                        else {
                            simonSez = false;
                            game.paused = false;
                        }
                    }, 400 - N * 20);
                }
            }
        },

        playerSequence: function (selected) {

            var correctSquare = sequenceList[userCount];
            userCount+=1;
            var thisSquare = simon.getIndex(selected);

            if (thisSquare == correctSquare) {
                if (userCount == N) {
                    if (N == sequenceCount) {
                        winner = true;
                        setTimeout(function () { self.restart(); }, 3000);
                    }
                    else {
                        userCount = 0;
                        currentCount = 0;
                        N++;
                        simonSez = true;
                    }
                }
            }
            else {
                loser = true;
                setTimeout(function () { self.restart(); }, 3000);
            }

        },

        simonSequence: function () {

            simonSez = true;
            litSquare = sequenceList[currentCount];
            simon.getAt(litSquare).alpha = 1;
            timeCheck = game.time.now;
            currentCount++;

        },

        setUp: function () {

            for (var i = 0; i < sequenceCount; i++) {
                var thisSquare = game.rnd.integerInRange(0, 5);
                sequenceList.push(thisSquare);
            }

        },

        select: function (item, pointer) {

            if (!simonSez && !intro && !loser && !winner) {
                item.alpha = 1;
            }

        },

        release: function (item, pointer) {

            if (!simonSez && !intro && !loser && !winner) {
                item.alpha = .25;
                self.playerSequence(item);
            }
        },

        moveOff: function (item, pointer) {

            if (!simonSez && !intro && !loser && !winner) {
                item.alpha = .25;
            }

        },

        render: function () {

            if (!intro) {
                if (simonSez) {
                    game.debug.text('Simon Sez', 360, 96, 'rgb(255,0,0)');
                }
                else {
                    game.debug.text('Your Turn', 360, 96, 'rgb(0,255,0)');
                }
            }
            else {
                game.debug.text('Get Ready', 360, 96, 'rgb(0,0,255)');
            }

            if (winner) {
                game.debug.text('You Win!', 360, 32, 'rgb(0,0,255)');
            }
            else if (loser) {
                game.debug.text('You Lose!', 360, 32, 'rgb(0,0,255)');
            }

        }
    }
}
