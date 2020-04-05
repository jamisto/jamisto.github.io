$(document).ready(()=>{
    var page = 0;
    $("nav li").click((event)=>{
        let target = $(event.target).text();
        changePage(target);
        $(event.target).addClass("active");
    });

    $("#carusel .left").click(()=>{
        console.log(page)
        page--;
        console.log(page)
        page = checkPage(page)
        console.log(page)
        caruselPageChange(page);
    });

});

function changePage(target){
    //console.log(target);

    $(".active").removeClass("active");
    
    $("." + target).addClass("active");
    $("#Home,#About,#Experience,#Works").css("display","none");

    $("#" + target).css("display", "grid");
}

function checkPage(page){
    if (page < 1){
        return 4
    } else if (page >5){
        return 0
    }else{
        return page;
    }
}

function caruselPageChange(active){
    switch(active){
        case 1:
            changePage("Works")
            break;
        case 2:
            changePage("Experience")
            break;
        case 3:
            changePage("Works")
            break;
        case 4:
            changePage("Home")
            break;
    
    }
}