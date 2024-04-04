let flashSequence = [];
let level = 0;
let isGameOn = false;

function newSequence() {
    randomBox = Math.floor(Math.random() * 4)
    switch (randomBox) {
        case 0:
            flashSequence.push('green')
            break;
        case 1:
            flashSequence.push('red')
            break;
        case 2:
            flashSequence.push('yellow')
            break;
        case 3:
            flashSequence.push('blue')
            break;
        default:
            console.log("Error in adding new sequence", randomBox);
            break;

    }
    lastItem = flashSequence[flashSequence.length - 1]
    playSfx(lastItem);
    flash(lastItem)
    level++;
    $('.game-status').text(`Level ${level}`);
}
function playSfx(button) {
    let sxf = new Audio(`./sounds/${button}.mp3`);
    sxf.play();
}
function flash(element) {
    a = $(`.${element}  div`)
    a.addClass('pulse');
    setTimeout(() => a.removeClass('pulse'), "200");
}


function sequenceCheck(playerChoice) {
    for (n = 0; n < flashSequence.length; n++) {
        if (playerChoice == flashSequence[n]) {
            continue;
        }
        else {
            playSfx("wrong");
            return false;
        }
    }
    console.log("Hello There")
    return true;
}



$('body').on('keydown mousedown touchdown', function () {
    if (!isGameOn) {
        isGameOn = true;
        newSequence();
    }
});

$('.game-box').on('click', function () {
    playerChoice = $(this).attr('class').split(' ')[1];
    sequenceCheck(playerChoice);
});

/*
Any Button Press
New Sequence 

plaver clicks
checked to order


*/



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