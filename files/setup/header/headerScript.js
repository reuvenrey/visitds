const header = document.getElementById("pgHeader"); // Contents of Header
const footer = document.getElementById("pgFooter"); // Contents of Footer
const pgHead = document.getElementById("pgHead"); // Title, meta data, etc.
const pgLoader = document.getElementById("pgLoader"); // Loading Screen

// Populate contents of page head - necessary for proper display on user-side
pgHead.innerHTML = '<meta charset="UTF-8">  <meta name="viewport" content="width=device-width, initial-scale=1.0">\
    <link href="https://fonts.googleapis.com/css?family=FONT_NAME" rel="stylesheet"> \ // load in custom website font
    <link rel="icon" type="image/x-icon" href=""'; // website icon
