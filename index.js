$(".game-box").on({
    mouseenter: function () {
        $(this).toggleClass("shadow");
    },
    mouseleave: function () {
        $(this).toggleClass("shadow");
    }
});

$('.game-box').on("mousedown", function() {
    $(this).toggleClass("bounce-down")
})
$('.game-box').on("mouseup", function() {
    $(this).toggleClass("bounce-up")
})