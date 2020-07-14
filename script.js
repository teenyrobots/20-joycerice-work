// scripts for my jquery demo

$(document).ready(function(){
    
    let hasItBeenClicked = false;
    let cycling = 1;
    
    
    
    $(".closer").click(function(){
        $(this).hide();
    });
    
    
    $(".hider").hide();
    
    $("#showImage").click(function(){
        $(".hider").show();
        console.log("the button has been clicked");
    });
    
    $(".hider").click(function(){
        $(this).css("background-color", "purple");
    });
    
    $(".imgChanger").click(function(){
        $(this).attr("src", "assets/2.jpg");
    });
    
    $("#thirdImg").click(function(){
        $(this).addClass("specialBorder");
    });
    
    $("#boolChanger").click(function(){
        if (hasItBeenClicked === false){
            $(this).addClass("specialBorder");
            hasItBeenClicked = true;
        } else {
            $(this).removeClass("specialBorder");
            hasItBeenClicked = false;
        }
    });
    
    $("#cycler").click(function(){
        if (cycling < 4){
            cycling += 1;
            $(this).attr("src", "assets/"+cycling+".jpg");
        } else {
            cycling = 1;
            $(this).attr("src", "assets/"+cycling+".jpg");
        }
    });
    
    $(".hider").hover(
        function(){
            $(this).attr("src", "path/to/new/source.jpg")
            $(this).addClass("specialBorder");
        }, function(){
            $(this).attr("src", "path/to/new/source.jpg")
            $(this).removeClass("specialBorder");
        }
    );
    
    
    
    
    
    
    
    
    
    
    
    
});