const itemsContainer = document.getElementById('places-list');

    itemsContainer.innerHTML = "";

var itemsCount = 0;

var filtersApplied = [];

// Get url parameters (for sorting by category)
const urlParams = new URLSearchParams(window.location.search);
const categoriesParam = urlParams.get('categories');


// First, populate category options, and highlight any that are currently applied (based on url params)

    if (categoriesParam) {
        // Check if there’s a comma (multiple categories)
        if (categoriesParam.includes(',')) {
            filtersApplied = categoriesParam.split(',').map(Number);
        } else {
            filtersApplied = [Number(categoriesParam)];
        }
    }

    let categoriesContainer = document.getElementById('catfilters');
        categoriesContainer.innerHTML = '';
    for(i=0; i<categories.length; i++){
        categoriesContainer.innerHTML += "<a onclick='applyFilter("+i+")' id='filterItem-"+i+"'><img src='../files/images/icons/categoryIcon-"+i+".png'>"+categories[i]+"</a>";
        if(filtersApplied.includes(i)){
            document.getElementById('filterItem-'+i).classList.add('selected');
        }
    }

// This function is run when an element is to be created and displayed on the page (see the for loop below this function, which will test items against category and tag filters)
function createNewElement(i){
    let tempVal = places[i];

    // create a new place element
    itemsContainer.innerHTML += "<div class='container filled selectable' id='place-"+i+"'></div>";

    // Create the styled list of categories
    var tempCategories = "<b style='color:midnightblue'>"+categories[tempVal.categories[0]]+"</b>";
    if(tempVal.categories.length > 1){
        for(k=1; k<tempVal.categories.length; k++){
            tempCategories += ", <b style='color:midnightblue'>"+categories[tempVal.categories[k]]+"</b>";
        }
    }

    // populate contents of new element
    let eCreate = "<div class='columnContainer'><img src='"+tempVal.coverImg+"'><div>\
    <h3>"+tempVal.name+"</h3>"+tempVal.shortDescription+"\
    <p>"+tempCategories+"</p><div class='spacer noMargin dark'></div>\
    <div class='linksContainer light'><a>📍 "+tempVal.location+"</a> <a>🧍 "+ages[tempVal.age]+"</a> <a>💵 "+prices[tempVal.price]+"</a></div>\
    </div></div><a href='place.html?n="+tempVal.siteLink+"'></a>";

    // put contents into new element
    document.getElementById('place-' + i).innerHTML = eCreate;
    itemsCount += 1;
}

// this function will first ensure a place matches search criteria, and will then run the create element function if it does
for(i=0; i<places.length; i++){
    if(filtersApplied.length > 0){ // if category filters applied
        let categoryCheck = places[i].categories;
        // check if current element's categories index overlapps with selected categories
        if(categoryCheck.some(categoryIndex => filtersApplied.includes(categoryIndex))){
            createNewElement(i);
        }else{
            console.log('Skipped ' + places[i].name + ' with categories ' + categoryCheck);
        }
    }else{
        createNewElement(i);
    }   
}

// after displaying elemtns, show how many there are
if(itemsCount > 0){
    document.getElementById('items-displayed').innerHTML = "Showing <b>" + itemsCount + "</b> results";
}else{
    document.getElementById('items-displayed').innerHTML = "No results found, try adjusting search terms";
}


// when a user clicks on a filter, either add or remove it from the list of filters applied
function applyFilter(i){
    if(document.getElementById('filterItem-'+i).classList.contains('selected')){
        document.getElementById('filterItem-'+i).classList.remove('selected');
        // remove this category from the array of selected categories.
        const index = filtersApplied.indexOf(i);
        if (index > -1) {
            filtersApplied.splice(index, 1);
        }
    }else{
        document.getElementById('filterItem-'+i).classList.add('selected');
        if (!filtersApplied.includes(i)) {
            filtersApplied.push(i);
        }
    }
    document.getElementById('applyFilterBtn').style.display = 'initial';
    console.log('Selected Categories ' + filtersApplied);
}

function viewFilteredElements(){
    if(filtersApplied.length <= 0){
        window.open('things-to-do','_self');
    }
    else{
        window.open('things-to-do?categories='+filtersApplied,'_self');
    }
}