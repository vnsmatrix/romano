$(document).ready(function () {

    $(document).mousemove(function(e) {
            $(".pointer").css('top', + (e.clientY - 90));
            $(".pointer").css('left', + (e.clientX - 30));
    });


    var audio = $("audio")[0];
    $("#home").mouseenter(function() {
         var playPromise = audio.play();
         if (playPromise !== undefined) {
           playPromise.then(function() {

           }).catch(function(error) {
             // Automatic playback failed.
             // Show a UI element to let the user manually start playback.
           });
       }
    });


});
