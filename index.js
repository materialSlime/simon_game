let pulseOrder = [];
let playerOrder = [];
let gameBoxes = $(".game-box");

$("body").on("keydown touchstart", function () {
    let pulseRandom = Math.floor(Math.random()*4);
    pulseOrder.push(pulseRandom);
    console.log(pulseOrder);
});

// -------------- UI Ineractions --------------

$('.game-box').on({
    "mousedown touchstart": function() {
        $(this).addClass("bounce");
    },
    "mouseup  touchend": function() {
        $(this).removeClass("bounce");
    },
    "mouseout touchcancel": function(event) {
        $(this).removeClass("bounce");
    }
});