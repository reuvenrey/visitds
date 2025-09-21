// Get the slideshow container
const ssContainer = document.querySelector(".slideshowContainer");

// create an array of the slideshow container's children (the images)
const slides = Array.from(ssContainer.children);

// Ensure first slide is shown
slides[0].classList.add('selected');
// console.log(slides.length);

// Set current slide to 0
var curSlide = 0;

var intervalSet = false; // whether the slideshow is running automatically or not

//Function to advance to next slide
function ssForward(){
    // Advance to next slide and set that slide to visible
    curSlide += 1;
        // Before setting visible, ensure we have not reached beyond last slide
        // if we have -> set last slide to invisible and restart
        if(curSlide == slides.length){
            curSlide = 0;
            slides[slides.length-1].classList.remove('selected');
        }

    // set current slide to visible
    slides[curSlide].classList.add('selected');

    // set previous slide to invisible
    if(curSlide > 0){
        slides[curSlide-1].classList.remove('selected');
    }

    //console.log('slide - ' + curSlide);
    if(controls){document.getElementById('ssDisplay').innerHTML = (curSlide+1) +" of "+slides.length;}
}

function ssBackward(){
    curSlide -= 1;
        if(curSlide < 0){
            curSlide = slides.length-1;
            slides[0].classList.remove('selected');
        }

    // set current slide to visible
    slides[curSlide].classList.add('selected');

    if(curSlide < slides.length-1){
        slides[curSlide+1].classList.remove('selected');
    }

    if(controls){document.getElementById('ssDisplay').innerHTML = (curSlide+1) +" of "+slides.length;}
}

function startSsAuto(){
    setInterval(ssForward,3000);
    intervalSet = true;
}

// SETUP CONTROLS FOR SLIDESHOW
const controls = document.querySelector(".slideshowControls");

if (controls) { // if there are controls in the html doc
    controls.innerHTML = "<button onclick='ssBackward()'>&#8592;</button> <span id='ssDisplay'> 1 of "+slides.length+" </span> <button onclick='ssForward()'>&#8594;</button>"; 
    // left arrow: &#8592;
    // right arrow: &#2192;
} else if(intervalSet != true) { // if there are no controls, set slideshow to run automatically
    startSsAuto();
}


