function hidePages(page){
    $("#content-container").children().hide();
};

function showPage(page){
    $("#menuItems").find(".active").removeClass("active");
    $("."+page).css("display", "block");
    if (page==="page4"){
        makeMap("page4")
    }
    $("#"+page).addClass("active");
};

$(document).ready(function(){

    
    showPage("page1")
    $("#sideMenu").click(function(){
        $("#menuItems").toggle();
    });
    
    $("#menuItems").find("button").click(function(){
        hidePages(this.id)
        showPage(this.id)
    });

});