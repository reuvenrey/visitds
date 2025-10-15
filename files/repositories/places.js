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

iter+=1;places[iter] = { // INFINITY CASINO AND BJS
  name:"Infinity Casino & Resort", siteLink:"infinity-casino",
  shortDescription: "A luxurious high-rise Casino & Hotel featuring the world's largest BJ's Restaurant and Brewhouse",
  coverImg: "https://i.imgur.com/G9B01BQ.png",
  categories: [0,1,2], age:"0", price:"2",
  tags: "BJ's Restaurant and Brewhouse,Piezookie,Gambling,Resort,Hotel,Luxury Accomodations,Rooftop Pool,Gambler's Club",
  location:"Entertainment District, Desert City"
}
  placeDetails[iter] = {
    slideShowLinks: ['https://i.imgur.com/P948Ybw.png', 'https://i.imgur.com/4yObJfi.png', 'https://i.imgur.com/qvAlxgs.png', 'https://i.imgur.com/HNscxC4.png', 'https://i.imgur.com/eTuEFTX.png', 'https://i.imgur.com/Satd6kY.png', 'https://i.imgur.com/OvULKck.png', 'https://i.imgur.com/MIxW4Xh.png', 'https://i.imgur.com/EBVec55.png'], // put 'none' if none
    externalLink: "externalLink", // put 'none' if none
    accessibility: ['Wheelchair Accessible', 'Service Animals Allowed', 'etc'],
    contactInfo: ['mailingAddress', 'emailAddress', 'phoneNumber'], // put 'none' if Not Available for any item
    dateEstablished: "MMMM-DD-YYYY",
    longDescription: "<p>A dazzling fusion of excitement and elegance, the Infinity Casino & Resort delivers nonstop gaming, world-class luxurious accommodations, and the world’s largest BJ’s Restaurant & Brewhouse.</p><p>Guests can unwind at rooftop pools, indulge in spa treatments, and experience legendary hospitality — all steps away from the world’s largest BJ’s Restaurant & Brewhouse, where craft beer and California-inspired dishes keep the energy high from lunch through late night.</p><br><div class='spacer'></div><br><div class='columnContainer'><img src='https://i.imgur.com/HNscxC4.png'><div><h3>Brewhouse Brawesomness</h3>Spanning multiple stories with panoramic views of West Ave and the E-District, this flagship location takes everything guests love about BJ’s and scales it to Desert City proportions. This location also features one of our largest breweries for barrel-to-tap tastiness.</div></div><br><div class='spacer'></div><br><div class='columnContainer'><div><h3>Gaming & More</h3>Explore an expansive Casino featuring a multitude of gaming options as well as exclusive gamer's lounges for high-betters and willing winners.</div><img src='https://i.imgur.com/LnfUCii.png'></div>"
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

iter+=1;places[iter] = { // NEON-WEST
  name:"Neon-West Mall & Hotel", siteLink:"neon-west-mall",
  shortDescription: "A colorful shopping & entertainment metroplex featuring a deluxe cinema with IMAX and 4D theaters, shops, restaurants, and a family hotel",
  coverImg: "https://i.imgur.com/NQzwpQ0.png",
  categories: [0, 2, 5], age:"0", price:"0",
  tags: "Mall,Indoor,Movies,4D Cinema,Imax,Food Court,Movie Theater",
  location:"Entertainment District, Desert City"
}
  placeDetails[iter] = {
    slideShowLinks: ["https://i.imgur.com/ELKsMTW.png","https://i.imgur.com/HBWOnAQ.png","https://i.imgur.com/zaD5nyA.png",'https://i.imgur.com/lGOV0uR.png',"https://i.imgur.com/SXeX2Ls.png"],
    externalLink: "none",
    accessibility: ["Wheelchair Accessible","Service Animals Allowed (mall only)"],
    contactInfo: ["none"],
    dateEstablished: "September-30-2025",
    longDescription: "The Neon-West metroplex is an anchor of Desert City's West. Ave Entertainment District. Originally opened in 2005 as <em>West Avenue Mall</em>, the complex didn’t gain its iconic neon color scheme or six-story hotel until Quartz Malls LLC re-imagined the property in 2025. Today, it stands as a towering symbol of nightlife, shopping, and entertainment.<p>Neon-West is your getaway for the day. Enjoy the air-conditioned indoors while browsing a diverse selection of stores and eateries. Step into other worlds at the cutting-edge cinema on the second floor. Or extend your experience overnight with a stay in the luxurious six-story hotel — complete with floor-to-ceiling views overlooking <a href='place?the-alley'>The Alley</a> and the glittering cityscape beyond.</p><br><div class='spacer'></div><br><div class='columnContainer'><img src='https://i.imgur.com/HdVm507.png'><div><h3>LAB<em>Cinema</em> featuring 4Dx</h3>Be transported at Desert City’s most advanced movie destination. Neon-West’s <b>LABCinema</b> delivers three distinct ways to experience film: a massive 3-story IMAX screen, an advanced ultimate-surround-sound Aztech<em>Soundscapes</em> theater, and Next-gen 4D theaters with movement, effects, and atmosphere for three completely unique and immersive viewing experiences. This is a cinema experience you WON'T want to miss!</div></div><br><div class='spacer'></div><br><div class='columnContainer'><div><h3>Luxury Hotel High-Rise</h3>Stay in style at the Neon-West Hotel, where modern design meets comfort. Choose from spacious rooms and versatile layouts, all crafted for your perfect night’s rest. Guests enjoy:<div class='halfContainer'> <div> <ul> <li>Complimentary Wi-Fi</li> <li>5th-story rooftop pool & bar</li> <li>In-room food delivery from Neon-West eateries</li> </ul> </div> <div> <ul> <li>Covered parking (with fee)</li> <li>Complimentary family activity center</li> <li>Exclusive fitness center</li></ul> </div></div></div><img src='https://i.imgur.com/iaRNgy1.png'></div><br><div class='spacer'></div><br><div class='columnContainer'><img src='https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/42d0c6ec-d3fc-423a-a859-628944d28c51/MallLuxury_screenshot_2.jpg'><div> <h3>Shops & More</h3> At Neon-West you'll also find a diverse selection of shops and eateries including <div class='halfContainer'><div><ul><li>CYAN Spa & Wellness Club</li> <li>CVS Pharmacy</li> <li>Block Boba & Tea</li> <li>Heads</li></ul></div><div><ul><li>Baker's Block</li> <li>Leather & Chain Clothiers</li> <li>Coochie Sushi</li> <li>Giovani's Italian Bistro</li></ul></div></div></div></div>"
  }

iter+=1;places[iter] = { // ARROW-CLUB
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

iter+=1;places[iter] = { // ISLANDS ON CENTER AND ARENA
  name:"Islands (Center and Arena)", siteLink:"islands-on-center",
  shortDescription: "Classic Islands Fine Burgers and Drinks located across from Grindr Stadium in the Entertainment District. ",
  coverImg: "https://i.imgur.com/8iUZ3rr.png",
  categories: [2, 9], age:"0", price:"1",
  tags: "Indoor,Tiki,Cocktails,Cheddar Fries,Mules,Tiki Tenders",
  location:"Downtown, Desert City"
}
placeDetails[iter] = {
  slideShowLinks: ["none"],
  externalLink: "none",
  accessibility: ["Wheelchair Accessible Tables"],
  contactInfo: ["none"],
  dateEstablished: "July-15-2025",
  longDescription: "Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries<img class='inline' src='https://olo-images-live.imgix.net/0f/0f57db2f3b0b4f8b83258197e563ae8c.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=8616d958f9d91bba69336db61e67162d'><p class='caption'>Cheddar Fries</p>Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries, Cheddar Fries. Need we say anything else?"
}