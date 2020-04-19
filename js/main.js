$(document).ready(()=>{
    var page = 1;
    $("nav li").click((event)=>{
        let target = $(event.target).text();
        changePage(target);
        $(event.target).addClass("active");
        page = parseInt($("#carusel .active").attr("val"));
    });

    $("#carusel li").click((event)=>{
        let target = $(event.target).attr("class").split(" ");
        target = target[0]
        console.log(target)
        changePage(target);
        $(event.target).addClass("active");
        page = parseInt($("#carusel .active").attr("val"));
    })

    $("#carusel .left").click(()=>{
        page--;
        page = checkPage(page)
        caruselPageChange(page);
    });

    $("#carusel .right").click(()=>{
        page++;
        page = checkPage(page)
        caruselPageChange(page);
    });

    buildExperience();

});

function buildExperience(){
    $.getJSON("jobs.json", function (data){
        for(job in data.jobs){
           let employerContainer = $("<div>",{
               class:"employer"
           });
           let employer =  $("<h2>",{
               class:" employer green-text",
           }).text(data.jobs[job].employer);
           employerContainer.append(employer);

           for(index in data.jobs[job].times){
               let jobContainer = $("<div>",{
                   class:"job"
               })
                let title = $("<p>",{
                    class:"title green-text"
               }).text(data.jobs[job].times[index].title);
               jobContainer.append(title);

               if(data.jobs[job].times[index].time){
                    let time = $("<p>",{
                        class:"time green-text"
                    }).text(data.jobs[job].times[index].time);
                    jobContainer.append(time);
                }
                let description = $("<p>",{
                    class:"description"
                }).text(data.jobs[job].times[index].description)

                jobContainer.append(description);
                employerContainer.append(jobContainer);
            }
           $("#Experience").append(employerContainer);
        }
    });
}

function changePage(target){

    $("#Home,#About,#Experience,#Works").css("display","none");
    $(".active").removeClass("active");
    $("." + target).addClass("active");
    $("#" + target).css("display", "inline-block");
}

function checkPage(page){
    if (page < 1){
        return 4
    } else if (page > 4){
        return 1
    }else{
        return page;
    }
}

function caruselPageChange(active){
        if (active === 1)
            changePage("Home")
        else  if (active === 2)
            changePage("About")
        else  if (active === 3)
            changePage("Experience")
        else  if (active === 4)
            changePage("Works")
    
}