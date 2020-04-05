$(document).ready(()=>{
    $("nav li").click((event)=>{
        console.log($(event.target).text());
        $(".active").removeClass("active");
        $(event.target).addClass("active");
    })
});