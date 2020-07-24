$(document).ready(function(){
    $("h1").click(function(){
        $(this).css("background", "red");
    })

    $(".gallery img").click(function(){
        $(this).css("border", "2px dashed red");
        $(this).addClass("big");
    })
})
