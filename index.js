gameButtons = ['green', 'red', 'yellow', 'blue'];
flashSequence = [];

function newSequence () {
    randomBox = Math.floor(Math.random() * 4)
    flashSequence.push(randomBox);
}
function playSfx (button) {
    let sxf = new Audio(`./sounds/${button}.mp3`);
    sxf.play();
}
function sequenceCheck (playerChoice) {
    for (n = 0; n < flashSequence.length; n++) {
        if (playerChoice == flashSequence[n]) {
            continue;
        }
        else {
            return false;
        }
        return true;
    }
}

$('.game-box').on({
    "mousedown touchstart": function () {
        $(this).addClass("bounce");
        playSfx(this.classList[1]);
    },
    "mouseup  touchend": function () {
        $(this).removeClass("bounce");
    },
    "mouseout touchcancel": function (event) {
        $(this).removeClass("bounce");
    }
});