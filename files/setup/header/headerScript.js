const header = document.getElementById("pgHeader"); // Contents of Header
const footer = document.getElementById("pgFooter"); // Contents of Footer
const pgHead = document.getElementById("pgHead"); // Title, meta data, etc.
const pgLoader = document.getElementById("pgLoader"); // Loading Screen

const websiteLink = "https://reuvenrey.github.io/visitds/";

// Populate contents of page head - necessary for proper display on user-side
pgHead.innerHTML += '<meta charset="UTF-8">  <meta name="viewport" content="width=device-width, initial-scale=1.0">\
    <link href="https://fonts.googleapis.com/css?family=Funnel+Sans|Lexend+Deca|Corinthia" rel="stylesheet"> \
    <link rel="icon" type="image/x-icon" href="'+websiteLink+'files/images/siteIcon.ico">'; 

// Populate the HEADER
header.innerHTML = "<div id='headerBar'><div id='hbContent'></div> \
    <div class='hbMenu hidden' id='exploreMenuLarge'><h3 style='margin:0px 0px 10px 0px;'>Explore <span class='cursive' style='color:gold;'>DS</span></h3><div class='hbBoldLinks'><a href='"+websiteLink+"explore'>&#8594; Explore Desert Springs</a><a href='"+websiteLink+"explore/places-to-visit'>&#8594; Discover Districts & Cities</a><a>&#8594; View Events Calendar</a></div>\
        </div></div> \
    <div class='hbMenu hidden' id='infoMenuLarge'><h3 style='margin:0px 0px 10px 0px;'>Visitor Information</h3><div class='hbBoldLinks'><a>&#8594; Travel Guides & Articles</a> <a>&#8594; Transportation & Parking</a></div></div> \
    </div>\
     <div class='hbSideMenu hidden' id='headerSideMenu'><div class='hbBoldLinks'><a href=''>Discover <span class='cursive'>DS</span> Districts</a> <a href='"+websiteLink+"explore'>Explore Desert Springs</a> <a>View Events Calendar</a></div> <br><div class='spacer noMargin'></div> \
     <br><div class='hbBoldLinks'><a href='"+websiteLink+"explore/attractions?categories=0'>Places to Stay</a></div> <br><div class='spacer noMargin'></div> \
     <br><div class='hbBoldLinks'><a>Visitor Guides & Articles</a> <a>Transportation & Parking</a></div> </div>\
     </div>"; // <--  end of setting up header bar with menus

    // Setup header links
    const headerContent = document.getElementById('hbContent');
    headerContent.innerHTML = "<img id='headerLogo' src='"+websiteLink+"files/images/desertSpringsLogo-grayscale.png' onclick='window.open(\""+websiteLink+"\",\"_self\")'>\
        <div id='headerLinks'></div>"; // holds the links to pages and menus ETC.

        // Contents of the Header Links Section:
        const smallHeaderContents = "<a href='"+websiteLink+"search'><img src='"+websiteLink+"files/images/icons/search-white.png'></a> <a onclick='toggleMenu(\"headerSideMenu\");'><img src='"+websiteLink+"files/images/icons/menu-white.png'></a>";
        const largeHeaderContents = "<a onclick='toggleMenu(\"exploreMenuLarge\");'>Explore <span class='cursive'>DS</span> &#11206;</a> <a href='"+websiteLink+"explore/attractions?categories=0'>Hotels & Resorts</a> <a onclick='toggleMenu(\"infoMenuLarge\");'>Information &#11206;</a> <a href='"+websiteLink+"search'><img src='"+websiteLink+"files/images/icons/search-white.png'></a>";

    if(window.innerWidth <= 1000){ // Reduced Header
        document.getElementById("headerLinks").innerHTML = smallHeaderContents;
    }
    else{ // Full-size Header
        document.getElementById("headerLinks").innerHTML = largeHeaderContents;
    }

// Populate the FOOTER
footer.innerHTML = "<div id='footerContent'><p style='color:lightgray'>© 2025 Desert Springs Ministry of Recreation | Department of Tourism</p><p><a href='"+websiteLink+"files/setup/attraction-object-builder.html'>Attraction Builder</a></p></div>";

// Populate the loader
pgLoader.innerHTML = "<img src='"+websiteLink+"files/images/siteIcon.ico'>";

// Hide loading screen after page finished loading
function finishLoad(){
    pgLoader.classList.add("hidden");
    setTimeout(function(){pgLoader.style.display='none';},500);
}



// Functions
    // Resize header everytime the window is resized
		window.onresize = function(event) {
	        // Your code to execute on window resize
	        if(window.innerWidth <= 1000){ // Reduced Header
                document.getElementById("headerLinks").innerHTML = smallHeaderContents;
            }
            else{ // Full-size Header
                document.getElementById("headerLinks").innerHTML = largeHeaderContents;
            }

            var allMenus = document.getElementsByClassName('hbMenu');
            for(i=0; i<allMenus.length;i++){
                if(allMenus[i].classList.contains('hidden') != true){
                    allMenus[i].classList.add('hidden');
                }
            }
            allMenus = document.getElementsByClassName('hbSideMenu');
            for(i=0; i<allMenus.length;i++){
                if(allMenus[i].classList.contains('hidden') != true){
                    allMenus[i].classList.add('hidden');
                }
            }
    	};

    function toggleMenu(name){
        //first, hide all other menus:
        let allMenus = document.getElementsByClassName('hbMenu');
        for(i=0; i<allMenus.length;i++){
            if(allMenus[i].classList.contains('hidden') != true && allMenus[i].id != name){
                allMenus[i].classList.add('hidden');
            }
        }
        document.getElementById(name).classList.toggle('hidden');
    }

    function toggleHbIcon(name){
        //first, hide all other icons:
        let allMenus = document.getElementsByClassName('hbmIcon');
        for(i=0; i<allMenus.length;i++){
            if(allMenus[i].classList.contains('hidden') != true){
                allMenus[i].classList.add('hidden');
            }
        }
        document.getElementById(name).classList.remove('hidden');
    }
