const header = document.getElementById("pgHeader"); // Contents of Header
const footer = document.getElementById("pgFooter"); // Contents of Footer
const pgHead = document.getElementById("pgHead"); // Title, meta data, etc.
const pgLoader = document.getElementById("pgLoader"); // Loading Screen

const websiteLink = "https://reuvenrey.github.io/visitds/";

// Populate contents of page head - necessary for proper display on user-side
pgHead.innerHTML += '<meta charset="UTF-8">  <meta name="viewport" content="width=device-width, initial-scale=1.0">\
    <link rel="stylesheet" href="'+websiteLink+'files/setup/styleSheet.css">\
    <link href="https://fonts.googleapis.com/css?family=Funnel+Sans" rel="stylesheet"> \
    <link rel="icon" type="image/x-icon" href="'+websiteLink+'files/images/siteIcon.ico">'; 

// Populate the header
header.innerHTML = "<div id='headerBar'><div id='hbContent'></div></div>"; // create the header bar
    const headerContent = document.getElementById('hbContent');
    headerContent.innerHTML = "<img id='headerLogo' src='"+websiteLink+"files/images/desertSpringsLogo-grayscale.png' onclick='window.open(\""+websiteLink+"\",\"_self\")'>";

// Populate the footer
footer.innerHTML = "<div id='footerContent'><p style='color:lightgray'>© 2025 Desert Springs Ministry of Recreation | Department of Tourism</p></div>";

// Hide loading screen after page finished loading
function finishLoad(){
    pgLoader.classList.add("hidden");
    setTimeout(function(){pgLoader.style.display='none';},500);
}
