$(document).ready(function () {
    $("#qkb").hover(function () {
        $("video")[0].play();
        $("#qkbtech").show();
    }, function () {
        $("video")[0].pause();
        $("video")[0].currentTime = 0;
        $("#qkbtech").hide();
    });
    $("#artgallery").hover(function () {
        $("video")[1].play();
        $("#c4tech").show();
    }, function () {
        $("video")[1].pause();
        $("video")[1].currentTime = 0;
        $("#c4tech").hide();
    });
    $("#social").hover(function () {
        $("video")[2].play();
        $("#socialtech").show();
    }, function () {
        $("video")[2].pause();
        $("video")[2].currentTime = 0;
        $("#socialtech").hide();
    });
    $("#petition").hover(function () {
        $("video")[3].play();
        $("#petitiontech").show();
    }, function () {
        $("video")[3].pause();
        $("video")[3].currentTime = 0;
        $("#petitiontech").hide();
    });
});
