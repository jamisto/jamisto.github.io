function hidePages(page){
    $("#content-container").children().hide();
};

function showPage(page){
    $("#menuItems").find(".active").removeClass("active");
    $("."+page).css("display", "block");

    //if (page === "page4"){
    //    map.invalidateSize();
    //}

    $("#"+page).addClass("active");
};

$(document).ready(function(){
    makeMap("page4")
    
    showPage("page1")
    $("#sideMenu").click(function(){
        $("#menuItems").toggle();
    });
    
    $("#menuItems").find("button").click(function(){
        hidePages(this.id)
        showPage(this.id)
    });

});