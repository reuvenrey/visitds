const searchBar = document.getElementById('searchbar');
const searchResults = document.getElementById('resultsBin');
const searchCounts = document.getElementById('resultsDisplay');

searchBar.focus();

function runSearch(rawInput){
    console.log('User is looking for ' + rawInput);

    searchResults.innerHTML = '';
    var resultsTotal = 0;

    // Remove special characters
    let cleaned = rawInput.toLowerCase().replace(/[^a-zA-Z0-9]/g, " ");

    // Seperate words into an array (and remove stray spaces)
     let keywords = cleaned.trim()
        .split(/\s+/) // split on one or more spaces
        .filter(word => word.length > 0);

     console.log("Keywords:", keywords);

     // (1) - Search places / attractions
     const placeResults = []; // will hold the matching places

     for(i=0; i<places.length; i++){

        let place = places[i];

        let keyTags = place.tags.toLowerCase().split(/[, ]+/).filter(Boolean);
        console.log('Place ' + i + ' tags: ', keyTags);

        let keyName = place.name
            .toLowerCase() // all lowercase
            .replace(/[^a-z0-9\s]/g, ' ') // remove special characters
            .split(/\s+/) // split at spaces
            .filter(Boolean); // remove empty strings

        console.log('Place ' + i + ' name: ', keyName);

        
        let keyCategory = place.categories.flatMap(i => 
            categories[i].split(/\s*&\s*|\s+/) // split words by spaces or "&"
        );

        keyCategory = keyCategory.map(word => word.toLowerCase());
        console.log('Place ' + i + ' categories: ', keyCategory);

        let keyDescription = place.shortDescription
            .replace(/[^a-zA-Z0-9\s,]/g, " ")   // replace special chars with space
            .toLowerCase()
            .split(/[\s,]+/) // split on spaces OR commas
            .filter(Boolean); // remove empty strings

        // Match all keywords with search array
        let allKeywords = [...keyTags, ...keyName, ...keyCategory, ...keyDescription]; // ... merges the three arrays into 1

        // Check for matches
        let matches = allKeywords.filter(term => keywords.includes(term));

        if(matches.length > 0){
            let tempObj = {
                title: place.name,
                description: place.shortDescription,
                matchingWords: matches,
                link: place.siteLink,
                matchTerms: matches.join(", "),
                matchTermsLength: matches.length
            };
            placeResults.push(tempObj);
            console.log('Place '+i+' is a match!');
        }

    }// end of search places

    if(placeResults.length != 0){
        searchResults.innerHTML += "<h3>Attractions and Places to Visit</h3>";
        for(s=0; s<placeResults.length; s++){
            let tempVal = placeResults[s];
            searchResults.innerHTML += "<p><a class='searchLink' href='explore/place.html?n="+tempVal.link+"'>"+tempVal.title+"</a>"+tempVal.description+"</p><p class='searchTags'>Matching terms ("+tempVal.matchTermsLength+" total): "+tempVal.matchTerms+"</p>";
            resultsTotal += 1;
        }
    }


    // Show number of results
    searchCounts.innerHTML = "Showing <b>"+resultsTotal+"</b> results";
    if(resultsTotal >= 8){
        searchCounts.innerHTML += "<p style='color:gold;'><em>Seeing alot of results? Try narrowing your search and using only keywords</em></p>"
    }

}