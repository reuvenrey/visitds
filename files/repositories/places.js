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

iter+=1;places[iter] = { // LUCKY RED CASINO
  name:"Lucky Red Casino", siteLink:"lucky-red-casino",
  shortDescription: "A historic Casino with a large selection of roulette, blackjack, and other games under a roof full of chandeliers. Located on West Ave. and Neon Blvd.",
  coverImg: "https://i.imgur.com/y9JOLml.png",
  categories: [1], age:"3", price:"0",
  tags: "Historic,Indoor",
  location:"Entertainment District, Desert City"
}
  placeDetails[iter] = {
    slideShowLinks: ["https://i.imgur.com/OkgGVHb.png", "https://i.imgur.com/tGWPonw.png", 'https://i.imgur.com/RyeyQ22.png'], // put 'none' if none
    externalLink: "externalLink", // put 'none' if none
    accessibility: ['Wheelchair Accessible', 'Service Animals Allowed', 'etc'],
    contactInfo: ['mailingAddress', 'emailAddress', 'phoneNumber'], // put 'none' if Not Available for any item
    dateEstablished: "MMMM-DD-YYYY",
    longDescription: "longDescription" // remember, if you want an inline img, use <img class='inline' src=''>
  }

iter+=1;places[iter] = { // NAME
  name:"The Hungry Bookworm", siteLink:"the-hungry-bookworm",
  shortDescription: "A sprawling bookstore on the first floor, and a classy speakeasy on the second",
  coverImg: "https://i.imgur.com/5WJqeFL.png",
  categories: [2,8], age:"3", price:"2",
  tags: "Speakeasy,Bar,Lounge,Cocktails,Bookstore,Library",
  location:"The Alley, Desert City"
}
  placeDetails[iter] = {
    slideShowLinks: ['https://i.imgur.com/OXJgujd.png', 'https://i.imgur.com/Y3NyMCL.png', 'https://i.imgur.com/kp0Bo8W.png', 'https://i.imgur.com/pY1K6Iz.png'], // put 'none' if none
    externalLink: "externalLink", // put 'none' if none
    accessibility: ['Wheelchair Accessible', 'Service Animals Allowed', 'etc'],
    contactInfo: ['mailingAddress', 'emailAddress', 'phoneNumber'], // put 'none' if Not Available for any item
    dateEstablished: "MMMM-DD-YYYY",
    longDescription: "longDescription" // remember, if you want an inline img, use <img class='inline' src=''>
  }

iter+=1;places[iter] = { // NAME
  name:"The Torchlight Theater", siteLink:"torchlight-theater",
  shortDescription: "A classic maximalist theater rooted in the history of Desert Springs arts and culture",
  coverImg: "https://i.imgur.com/XPbbuGz.png",
  categories: [3,4,8], age:"0", price:"1",
  tags: "musical,historic,the alley",
  location:"The Alley, Desert City"
}
  placeDetails[iter] = {
    slideShowLinks: ['https://i.imgur.com/57VRjdZ.png', 'https://i.imgur.com/F40wAu7.png', 'https://i.imgur.com/QEBkrEK.png', 'https://i.imgur.com/oLGZaiv.png'], // put 'none' if none
    externalLink: "externalLink", // put 'none' if none
    accessibility: ['Wheelchair Accessible', 'Service Animals Allowed', 'etc'],
    contactInfo: ['mailingAddress', 'emailAddress', 'phoneNumber'], // put 'none' if Not Available for any item
    dateEstablished: "MMMM-DD-YYYY",
    longDescription: "longDescription" // remember, if you want an inline img, use <img class='inline' src=''>
  }

iter+=1;places[iter] = { // NAME
  name:"Infinity Casino & BJs", siteLink:"infinity-casino",
  shortDescription: "The world's largest BJs restaurant and brewhouse nestled inside a multi-story Casino Resort with rooftop pool deck",
  coverImg: "https://i.imgur.com/G9B01BQ.png",
  categories: [0,1,2], age:"0", price:"2",
  tags: "tag1,tag2,etc",
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

iter+=1;places[iter] = {
  name:"Arrow", siteLink:"arrow-club",
  shortDescription: "A trendy nightclub anchoring The Alley on West Avenue featuring three floors of nonstop energy and good vibes.",
  coverImg: "https://reuvenrey.github.io/visitds/files/images/placeholder.jpg",
  categories: [8], age:"2", price:"0",
  tags: "Nightclub,Dancing,EDM,House,Country,Straight,Club",
  location:"Entertainment District, Desert City"
}
placeDetails[iter] = {
  slideShowLinks: ['none'],
  externalLink: "none",
  accessibility: ["Wheelchair Accessible","MDA Restroom"],
  contactInfo: ["none"],
  dateEstablished: "September-25-2025",
  longDescription: "Arrow isn’t just a nightclub—it’s an experience stacked high. Located in the heart of the Entertainment District, Arrow brings together three distinct atmospheres under one roof.<p>The ground floor pulses with chart-topping EDM and dazzling lights that set the tone for the night. Ascend to the second floor and you’ll find a sleek lounge with house and hip-hop rhythms, perfect for dancing or conversation. Finally, the rooftop deck offers panoramic views of the neon skyline, with cocktails flowing and a more relaxed vibe under the desert stars.</p><p>Whether you’re chasing high-energy beats, a chic social setting, or a rooftop escape, Arrow hits the mark.</p>"
}