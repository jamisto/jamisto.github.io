function hidePages(){
    $("#content-container").children().hide();
};

function showPage(page){
    $("."+page).css("display", "block")
};

$(document).ready(function(){

    showPage("page1")

    $("#sideMenu").click(function(){
        $("#menuItems").toggle();
    });

    $("#menuItems").children().find("a").click(function(){
        console.log(this.id)
        $("#menuItems").toggle();
        hidePages()
        showPage(this.id)
    });

});