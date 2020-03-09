var numSubtemas = 12;

$(document).ready(function () {

    $('.leftCol li ul').toggle(300);

    $(".itemHover").click(function () {
        $(this).find('ul').toggle(300)
    });
    $(".leftCol li").click(function (e) {
        e.stopPropagation();
    });
    showHome();
});

function showHome() {
    $("#home").show();
    for (var i = 0; i <= numSubtemas; i++) {
        $("#tema" + i).hide();
    }
}
function hider(id) {
    $("#home").hide(300);
    for (var i = 0; i <= numSubtemas; i++) {
        $("#tema" + i).hide(300);
    }
    $("#tema" + id).show(300);
}