


// -------------- UI Ineractions --------------
$(".game-box").on({
    mouseenter: function () {
        $(this).toggleClass("shadow");
    },
    mouseleave: function () {
        $(this).toggleClass("shadow");
    }
});


$('.game-box').on({
    "mousedown touchstart": function() {
        $(this).toggleClass("bounce-down");
    },
    "mouseup  touchend": function() {
        $(this).toggleClass("bounce-up");
    },
    "mouseout touchcancel": function(event) {
        $(this).removeClass("bounce-down");
        $(this).toggleClass("bounce-up");
    }
})