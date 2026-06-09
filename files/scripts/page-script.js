const urlParams = new URLSearchParams(window.location.search);
const placeLink = urlParams.get('n');

var placeInfo = false;
var placeDetail = false;
var placeIndex = 0;

// First, get the index of the selected place
for(i=0; i<places.length; i++){
    if(places[i].siteLink == placeLink){
        placeInfo = places[i];
        placeDetail = placePage[i];
        placeIndex = i;
        break;
    }
}

if(placeInfo == false){
    // item not found
    console.log('Place Not Found');
    document.getElementById('errorWindow').classList.add('shown');
}else{
    // Create the page
    document.getElementById('pgTitle').innerHTML = placeInfo.name + " | Explore Desert Springs"; // set title of page
    
    // Create page banner
        document.getElementById('pgBanner').innerHTML = "<img src='"+placeInfo.coverImg+"'><div class='overlay'><div class='container'>\
        <h1>"+placeInfo.name+"</h1>"+placeInfo.shortDescription+"<div class='container'>\
        <div class='linksContainer transparent'><a>📍 "+specificLocation[placeInfo.location]+"</a> <a>🗺️ "+placeInfo.coordinates+"</a> <a>"+infoCompleteness[placeInfo.completeness]+"</a></div></div>\
        </div></div>";
        // Populate alternate banner (for smaller screens)
        document.getElementById('altBannerContents').innerHTML = "<img src='"+placeInfo.coverImg+"'><div><h2>"+placeInfo.name+"</h2>"+placeInfo.shortDescription+"<p></p>\
        <div class='spacer noMargin'></div><div class='linksContainer transparent'><a>📍 "+specificLocation[placeInfo.location]+"</a> <a>🗺️ "+placeInfo.coordinates+"</a> <a>"+infoCompleteness[placeInfo.completeness]+"</a></div></div>";

    // Populate main details section
    document.getElementById('pgContent').innerHTML = placeDetail.longDescription;

    //Copy Coordinates
    let coordCopy = "/tp @p " + placeInfo.coordinates;
    document.getElementById('copyCoords').innerHTML="<button onclick='navigator.clipboard.writeText(\""+coordCopy+"\")'>Copy Coordinates</button>"

    // Populate Image Section
    if(Object.hasOwn(placeDetail, "slideshowLinks")){
        createImageGallery(placeIndex);
    }else{
        document.getElementById("slideshowSection").style.display = 'none';
    }

    // Explore similar categories
        const similarCategories = document.getElementById('similarCategories');
        for(i=0; i<placeInfo.categories.length; i++){
            similarCategories.innerHTML += "<a href='../explore?categories="+placeInfo.categories[i]+"' class='btn gold filled'>Explore "+specificCategory[placeInfo.categories[i]]+"</a>";
        }

    // Attraction tags
        const pgTags = document.getElementById('pgTags');
        let tagList = placeDetail.tags;
        for(i=0; i<tagList.length; i++){
            pgTags.innerHTML += "<a>"+tagList[i]+"</a>";
        }
}
