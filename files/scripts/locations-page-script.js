const mainDiv = document.getElementById('locationsContainerDiv');

/* from other script:
specificLocation = location names array
locationDescription = description || image (indeces should match)
*/

mainDiv.innerHTML = '';

function setupLocationPage(){
	for(i=0;i<specificLocation.length;i++){
		let placeName = specificLocation[i];
		let [placeDesc, placeImg] = locationDescription[i].split(" || ");

		var placeContent;

		if(i % 2 === 0){
			// even DIV (img comes first)
			placeContent = "<img src='"+placeImg+"'><div><h2>"+placeName+"</h2>"+placeDesc+"<p><a class='btn cyan filled noLeft' href='../explore?locations="+i+"'>View places in "+placeName+"</a></p></div>";
		}else{
			// odd DIV (img comes last)
			placeContent = "<div><h2>"+placeName+"</h2>"+placeDesc+"<p><a class='btn gold filled noLeft' href='../explore?locations="+i+"'>View places in "+placeName+"</a></p></div><img src='"+placeImg+"'>";
		}

		mainDiv.innerHTML += "<div class='container'><div class='columnContainer'>"+placeContent+"</div></div>";

		let spot = i + 1;
		if(spot<specificLocation.length){
			mainDiv.innerHTML += "<div class='spacer'></div>";
		}
	}
}// end of function setupLocationPage

setupLocationPage();
