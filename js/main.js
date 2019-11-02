$(document).ready(()=>{

    $( window ).resize(function() {
        if ($(window).width() < 800 ){
            $("#menuBar").css("width","");
        }
    });
    
    $(".works-jobs div").click(function() {
        openJob($(this).attr("id"));
    });
    
    
    
    function popUpCloser(){
        $(".pop-up").remove();
        $("#popUpcloser").remove();
        $("body").css("overflow","initial");
    }
    
    
    function openJob(job){
        $.getJSON("jobs.json", function (data){
            let jobPopUp = $("<div>", {
                id: job + "-pop-up",
                class: "pop-up"
            });
            
            let closePopUp = $("<button>", {
                id: "closePopUp"
            }).text("X").click(()=>{
                popUpCloser();
            });
            jobPopUp.append(closePopUp);

            let jobPopUpHeader = $("<h1>").text(data.jobs[job].employer);
            jobPopUp.append(jobPopUpHeader);
            for(item in data.jobs[job].times){
                let jobContainer = $("<div>", {
                    class: "jobContainer"
                });
                let jobTitle = $("<h2>").text(data.jobs[job].times[item].title);
                let jobDesc = $("<p>").text(data.jobs[job].times[item].description);
                jobContainer.append(jobTitle,jobDesc)
                jobPopUp.append(jobContainer);
            }
            
            let closer = $("<div>",{
                id:"popUpcloser"
            }).click(()=>{
            });
            closer.append(jobPopUp);
            $("body").prepend(closer).css("overflow","hidden");
        })
    }
    
    window.onclick = function(event) {
        if (event.target.id == "popUpcloser") {
            popUpCloser();
        }
    }
    
});
function openMenu(){
    $("#menuBar").css("width", "50%");
    let closer = $("<div>",{
        id:"closer"
    }).click(()=>{
        closeMenu();
        $("body").css("overflow","initial");
    });
    
    $("body").prepend(closer);
    $("#menuBar a").click(()=>{
        closeMenu();
        $("body").css("overflow","initial");
    });
    $("body").css("overflow","hidden");
}

function closeMenu(){
    $("#menuBar").css("width", "");
    $("#closer").remove();
}