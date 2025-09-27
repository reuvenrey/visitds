// Counting Variable
var iter = -1;

places = []; placeDetails = [];

/* PLACES - Attractions, Hotels, Etc. 

  CATEGORIES - Pre defined, a location can be in multiple categories (IE - Casino AND Resort)
  TAGS - Can be whatever you want, used to identify things in search

iter+=1;places[iter] = { // NAME
  name:"Name_of_Place", siteLink:"page_link",
  shortDescription: "brief_description",
  coverImg: "img_link",
  categories: [index1,index2], age:"age_index", price:"price_index",
  tags: "tag1,tag2,etc",
  location:"district, city"
}
  placeDetails[iter] = {
    slideShowLinks: ['link1', 'link2'], // put 'none' if none
    externalLink: "externalLink", // put 'none' if none
    accessibility: ['Wheelchair Accessible', 'Service Animals Allowed', 'etc'],
    contactInfo: ['mailingAddress', 'emailAddress', 'phoneNumber'], // put 'none' if Not Available for any item
    dateEstablished: "MMMM-DD-YYYY",
    longDescription: "longDescription" // remember, if you want an inline img, use <img class='inline' src=''>
  }

  Notes:
  within descriptions, use \" or ' ONLY, do not put just the quotation -> this will cause errors
  Remember: <p></p> = paragraph, <br> = linebreak, <div class='spacer'></div> = horizontal line, <img src=''> = inline img [automatically formatted when in pageContent]

*/

const webLink = 'https://reuvenrey.github.io/visitds/';

 categories = [
  "Hotels & Resorts",        // 0
  "Casinos & Gaming",        // 1
  "Restaurants",             // 2
  "Attractions & Landmarks", // 3
  "Shows & Entertainment",   // 4
  "Shopping",                // 5
  "Wellness & Relaxation",   // 6
  "Outdoor Adventures",      // 7
  "Culture & Nightlife",     // 8
  "Family Fun"               // 9
];

ages = [
  "All Ages",               // 0
  "Ages 12+",               // 1
  "Ages 18+",               // 2
  "Ages 21+",               // 3
  "Mature Audiences Only"   // 4
];

prices = [
  "$",     // 0 - Budget
  "$$",    // 1 - Moderate
  "$$$",   // 2 - Expensive
  "$$$$"   // 3 - Luxury
];

// PLACES OF DESERT SPRINGS

iter+=1;places[iter] = { // GRINDR STADIUM
  name:"Grindr Stadium", siteLink:"grindr-stadium",
  shortDescription: "A premier indoor arena hosting concerts, sports, and the annual Golden City Awards.",
  coverImg: "../files/images/placeholder.jpg",
  categories: [3], age:"0", price:"1",
  tags: "Sports,Concert Venue,Events,Awards,Golden City Awards",
  location:"Entertainment District, Desert City"
}
  placeDetails[iter] = {
    slideShowLinks: ['link1', 'link2'], // put 'none' if none
    externalLink: "externalLink", // put 'none' if none
    accessibility: ['Wheelchair Accessible', 'Service Animals Allowed', 'etc'],
    contactInfo: ['mailingAddress', 'emailAddress', 'phoneNumber'], // put 'none' if Not Available for any item
    dateEstablished: "MMMM-DD-YYYY",
    longDescription: "longDescription" // remember, if you want an inline img, use <img class='inline' src=''>
  }

iter+=1;places[iter] = { // NEON - WEST
  name:"Neon West", siteLink:"neon-west",
  shortDescription: "A colorful shopping & entertainment metroplex featuring a deluxe 4D cinema, shops, restaurants, and family hotel",
  coverImg: "../files/images/placeholder.jpg",
  categories: [0,4,5], age:"0", price:"0",
  tags: "Mall,Cinema,Movies,Aquarium,Indoor",
  location:"Entertainment District, Desert City"
}
  placeDetails[iter] = {
    slideShowLinks: ['none'], // put 'none' if none
    externalLink: "externalLink", // put 'none' if none
    accessibility: ['Wheelchair Accessible', 'Service Animals Allowed', 'etc'],
    contactInfo: ['mailingAddress', 'emailAddress', 'phoneNumber'], // put 'none' if Not Available for any item
    dateEstablished: "MMMM-DD-YYYY",
    longDescription: "longDescription" // remember, if you want an inline img, use <img class='inline' src=''>
  }


iter+=1;places[iter] = { // LUCKY RED CASINO
  name:"Lucky Red Casino", siteLink:"lucky-red-casino",
  shortDescription: "A historic Casino with a large selection of roullette, blackjack, and other games under a roof full of chandeliers. Located on West Ave. and Neon Blvd.",
  coverImg: "../files/images/placeholder.jpg",
  categories: [1], age:"3", price:"0",
  tags: "Historic,Indoor",
  location:"Entertainment District, Desert City"
}
  placeDetails[iter] = {
    slideShowLinks: ["../files/images/placeholder.jpg", "../files/images/placeholder.jpg"], // put 'none' if none
    externalLink: "externalLink", // put 'none' if none
    accessibility: ['Wheelchair Accessible', 'Service Animals Allowed', 'etc'],
    contactInfo: ['mailingAddress', 'emailAddress', 'phoneNumber'], // put 'none' if Not Available for any item
    dateEstablished: "MMMM-DD-YYYY",
    longDescription: "longDescription" // remember, if you want an inline img, use <img class='inline' src=''>
  }