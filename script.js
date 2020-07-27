$(document).ready(function(){

    $(".gallery img").click(function(){
        $(this).addClass("big");
        $(".big-bg").css("display", "block");
    })

    $(".big-bg").click(function(){
        $(this).css("display", "none");
        $(".gallery img").removeClass("big");
    })


})
