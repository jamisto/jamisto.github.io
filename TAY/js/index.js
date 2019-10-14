function showPage(page){
     
    $(".pageToggle").hide();
    $("."+page).fadeIn();
    
    $("#"+page).addClass("active")
}

function openNav(){
    $("#mobileMenu").css("width","13rem")

    let closer = $("<div>",{
        id:"closer"
    }).click(function() {
        closeNav();
    });

    $("body").prepend(closer)
}

function closeNav(){
    $("#mobileMenu").css("width","0rem")
    $("#closer").remove();
}

$( document ).ready(function () {
    
    $(".menuContent a").click(function(){
        $(".menuContent").find(".active").removeClass("active");
        showPage($(this).attr("id"))
        closeNav();
    });

    $("#closeNav").click(function(){
        closeNav();
    })
    

    $("#openMobileMenu").click(function(){
        openNav();
    });
    $(".partners a").attr("target","_blank");

});