const urlParams = new URLSearchParams(window.location.search);
const placeLink = urlParams.get('n');

var placeInfo = false;
var placeDetail = false;

// First, get the index of the selected place
for(i=0; i<places.length; i++){
    if(places[i].siteLink == placeLink){
        placeInfo = places[i];
        placeDetail = placeDetails[i];
        break;
    }
}

if(placeInfo == false){
    // item not found
    console.log('Place Not Found')
}else{
    // Create the page
    document.getElementById('pgTitle').innerHTML = placeInfo.name + " | Things to Do | Visit Desert Springs"; // set title of page
    
    // Create page banner
        document.getElementById('pgBanner').innerHTML = "<img src='"+placeInfo.coverImg+"'><div class='overlay'><div class='container'>\
        <h1>"+placeInfo.name+"</h1>"+placeInfo.shortDescription+"<div class='container'>\
        <div class='linksContainer transparent'><a>📍 "+placeInfo.location+"</a> <a>🧍 "+ages[placeInfo.age]+"</a> <a>💵 "+prices[placeInfo.price]+"</a></div></div>\
        </div></div>";
        // Populate alternate banner (for smaller screens)
        document.getElementById('altBannerContents').innerHTML = "<img src='"+placeInfo.coverImg+"'><div><h2>"+placeInfo.name+"</h2>"+placeInfo.shortDescription+"<p></p>\
        <div class='spacer noMargin'></div><div class='linksContainer transparent'><a>📍 "+placeInfo.location+"</a> <a>🧍 "+ages[placeInfo.age]+"</a> <a>💵 "+prices[placeInfo.price]+"</a></div></div>";

    // Create page slideshow (if applicable)
        if(placeDetail.slideShowLinks[0] != 'none'){
            document.getElementById('pgSlideshow').innerHTML = "<div class='spacer'></div><div class='container'><div class='slideshowContainer' id='mainSlideshow'></div><div class='slideshowControls'></div></div>"
            for(p=0; p<placeDetail.slideShowLinks.length; p++){
                document.getElementById('mainSlideshow').innerHTML += "<img src='"+placeDetail.slideShowLinks[p]+"'>";
            }
        }

    // Explore similar categories
        const similarCategories = document.getElementById('similarCategories');
        for(i=0; i<placeInfo.categories.length; i++){
            similarCategories.innerHTML += "<a href='things-to-do?categories="+placeInfo.categories[i]+"' class='btn gold filled'>Explore "+categories[placeInfo.categories[i]]+"</a>";
        }

    // Attraction tags
        const pgTags = document.getElementById('pgTags');
        let tagList = placeInfo.tags.split(',');
        for(i=0; i<tagList.length; i++){
            pgTags.innerHTML += "<a>"+tagList[i]+"</a>";
        }
}
