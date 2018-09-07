function hidePages(){
    $("#content-container").children().hide();
};

function showPage(page){
    $("#menuItems").find(".active").removeClass("active")
    $("."+page).css("display", "block")
    $("#"+page).toggleClass("active")
};

$(document).ready(function(){

    showPage("page1")

    $("#sideMenu").click(function(){
        $("#menuItems").toggle();
    });

    $("#menuItems").find("button").click(function(){
        hidePages()
        showPage(this.id)
    });

});