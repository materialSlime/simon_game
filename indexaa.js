let pulseOrder = [];
let gameBoxes = $(".game-box");
let level = 0;


$('body').on('keydown', gameLogic);

function gameLogic(event) {
    $('.game-status').text('Level ' + level);
    randomBox = Math.floor(Math.random() * 4);
    pulseOrder.push(randomBox);
    console.log("Pulse Order", pulseOrder)
    flash(gameBoxes.eq(randomBox).children('div'));

    for (n = 0; n > pulseOrder.length; n++) {
        playerChoice = $(event.currentTarget).index();
        if (playerChoice == pulseOrder[n]) {
            console.log(true);
        }
        else {
            console.log(false);
            $('.game-status').text('Game Over');
        }
    }
}


// -------------- UI Ineractions --------------
function flash(element) {
    element.addClass('pulse');
    // sfx = new Audio(`./sounds/${}.mp3`);
    setTimeout(() => element.removeClass('pulse'), "200");
}

$('.game-box').on({
    "mousedown touchstart": function () {
        $(this).addClass("bounce");
    },
    "mouseup  touchend": function () {
        $(this).removeClass("bounce");
    },
    "mouseout touchcancel": function (event) {
        $(this).removeClass("bounce");
    }
});