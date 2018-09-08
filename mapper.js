function makeMap(page){
    let mapLocation = $("<div>", {
        id:page+"-map"
    }).css("height","150px");
    $("."+page).append(mapLocation)
    
    let map = L.map(page+"-map").setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

    mapLocation.append(map);
}