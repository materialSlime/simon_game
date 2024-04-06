let buttons = ['green', 'red', 'yellow', 'blue'];
let flashSequence = [];
let playerSequence = [];
let level = 0;
let isGameOn = false;
let gameStatus = $('.game-status');

function newSequence() {
    lastInSq = Math.floor(Math.random() * 4);
    flashSequence.push(buttons[lastInSq]);
    gameStatus.html(`Level ${level}`);
    console.log(flashSequence);
    playSfx(buttons[lastInSq]);
    flash(buttons[lastInSq]);
}
function gameEnd() {
    playerSequence = [];
    flashSequence = [];
    isGameOn = false;
    gameStatus.html(`Game Over!!<br> Score:${level}`);
    playSfx('wrong');
    level = 0;

}
function checkAnswer() {
    let initialAr = flashSequence.length;
    let isEqual;
    if (initialAr === playerSequence.length) {
        if (flashSequence.every((value, index) => value === playerSequence[index])) {
            setTimeout(() => {
                newSequence();
            }, 1000)
            level++;
            playerSequence = [];
        }
        else {
            console.log("SeqErr: No Match");
            gameEnd();
        }
    }
    else {
        console.log("SeqErr: Wrong Size");
    }
}


$('body').on("mousedown keydown touchdown", function () {
    if (!isGameOn) {
        newSequence();
        isGameOn = true;
    }
});

$('.game-box').on('click', function () {
    playerChoice = $(this).attr('class').split(' ')[1];
    playerSequence.push(playerChoice);
    console.log(playerSequence)
    checkAnswer();
});



$('.game-box').on({
    "mousedown touchstart": function () {
        playSfx($(this).attr('class').split(' ')[1]);
        $(this).addClass("bounce");
    },
    "mouseup  touchend": function () {
        $(this).removeClass("bounce");
    },
    "mouseout touchcancel": function (event) {
        $(this).removeClass("bounce");
    }
});

function playSfx(fileName) {
    sfx = new Audio(`./sounds/${fileName}.mp3`);
    sfx.play();
}
function flash(box) {
    flashButton = "." + box + " div"
    $(flashButton).addClass('flash');
    setTimeout(function () {
        $(flashButton).removeClass('flash');
    }, 300);
}