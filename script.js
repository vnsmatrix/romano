$(document).ready(function () {
    $("#qkb").hover(function () {
        $("video")[0].play();
    }, function () {
        $("video")[0].pause();
        $("video")[0].currentTime = 0;
    });
    $("#artgallery").hover(function () {
        $("video")[1].play();
    }, function () {
        $("video")[1].pause();
        $("video")[1].currentTime = 0;
    });
    $("#social").hover(function () {
        $("video")[2].play();
    }, function () {
        $("video")[2].pause();
        $("video")[2].currentTime = 0;
    });
    $("#petition").hover(function () {
        $("video")[3].play();
    }, function () {
        $("video")[3].pause();
        $("video")[3].currentTime = 0;
    });


});
