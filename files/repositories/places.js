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
  "Family Fun",              // 9
  "Residential Complex"      // 10
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

iter+=1;places[iter] = {
  name:"The Torchlight Theater", siteLink:"torchlight-theater",
  shortDescription: "A historic maximalist 104 seat theater rooted in Desert Springs arts and culture",
  coverImg: "https://i.imgur.com/XPbbuGz.png",
  categories: [3, 4, 8], age:"0", price:"0",
  tags: "Comedy,Shows,The Alley,Historic,Musical,Local",
  location:"Entertainment District, Desert City"
}
placeDetails[iter] = {
  slideShowLinks: ["https://i.imgur.com/F40wAu7.png","https://i.imgur.com/QEBkrEK.png","https://i.imgur.com/oLGZaiv.png"],
  externalLink: "none",
  accessibility: ["Wheelchair Accessible seating and elevator available. Service animals with permit only."],
  contactInfo: ["none"],
  dateEstablished: "",
  longDescription: "<div class='columnContainer'><img src='https://i.imgur.com/57VRjdZ.png'><div><h3>History on Stage</h3>Nestled in the heart of the city, the Torchlight Theater is a meticulously preserved 114‑seat playhouse that has been delighting audiences for over a century. Born during Desert Springs' entertainment boom, its period architecture, warm glow of vintage lighting, and intimate sightlines create a cozy, up‑close theatrical experience — the kind of venue where every laugh, note, and step feels personal and memorable.</div></div><br><br><p>Today the Torchlight remains a vibrant community stage, showcasing a lively mix of small-scale productions: local musical ensembles, stand-up and sketch comedy nights, spirited dance competitions, and colorful pageants. With a year‑round calendar of performances and community events, the theater is the perfect place to discover local talent, celebrate special occasions, or simply enjoy an affordable evening of live entertainment in a historic, welcoming setting. </p>"
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

iter+=1;places[iter] = { // EXOTHERMAL THEATER
  name:"The Exothermal Theater", siteLink:"exothermal-theater",
  shortDescription: "A massive 2000-seat live-entertainment landmark and iconic home of the annual Villager Awards.",
  coverImg: "https://reuvenrey.github.io/visitds/files/images/placeholder.jpg",
  categories: [3, 4], age:"0", price:"1",
  tags: "Villager Awards,Indoor,Broadway,Theater,Musical,Event,Conference,Venue",
  location:"Entertainment District, Desert City"
}
placeDetails[iter] = {
  slideShowLinks: ["none"],
  externalLink: "",
  accessibility: ["Wheelchair accessible entrances and seating","Service animals with proper permit allowed","Audio/Visual assistance available"],
  contactInfo: [""],
  dateEstablished: "January-7-2026",
  longDescription: "<h2>About the Exothermal Theater</h2><p>Anchored above the iconic E-District Metro Station, the Exothermal Theater stands tall as a bold icon of performance, innovation, and cultural celebration. Sponsored by <em>Exothermal Technologies</em> and powered by next-gen Aztech Cinema and LABSound systems, this 2000-seat complex was designed not just as a venue, but as a destination- where storytelling, technology, and architectural prowess are showcased.</p><br><div class='spacer'></div><br><div class='columnContainer'><img src=''><div><h3>An International Stage Beyond Imagination</h3>At the core of the theater lies Minecraftia's largest performance stage, a 6-story canvas for productions of unprecedented scale. This iconic stage has been experienced around the world as the backdrop for the Villager Awards, Minecraftia Music Awards, X-Factor Live, and more. From immersive theatrical epics to large-format concerts and screenings, the Exothermal stage enables artists to explore creative possibilities unmatched anywhere else in the world. </div></div><br><div class='spacer'></div><br><div class='columnContainer'><div><h3>Artistry Fueled by Innovation</h3>Every detail of the venue integrates cutting-edge technology with storytelling prowess. The theater boasts advanced Aztech Cinema visual systems paired with LABSound audio technology to fuel all five senses in a richly dynamic immersive experience. Sponsored by Exothermal Technologies, the theater's aesthetic follows the company's modern and sleek visual identity. </div><img src=''></div><br><div class='spacer'></div><br><div class='columnContainer'><img src=''><div><h3>A Destination for Creativity and Connection</h3>Beyond larger-than-life performances, the Exothermal Theater provides versatile conference facilities and event spaces, originally developed to house the multitude of activities and breakout-sessions during the Villager Awards. These spaces are ideal for corporate gatherings, expos, and celebrations with modular designs to support events of any size. Like the theater, these spaces feature advanced technical infrastructure.</div></div><br><div class='spacer'></div><br><h2>More Information</h2>For the fun of it, here are some facts about the Exothermal Theater you may not know:<p><b>Minecraftia's Largest Screen</b> The advanced Aztech Cinema projection-mapping system converts the theater's massive stage and 180 degrees of surrounding surface into a 50,000sqft screen, the largest in Minecraftia powered by two-dozen laser projectors. </p><p><b>A Sound System that Breathes</b> The theater's LABSound system features \"adaptive resonance\" which automatically tunes acoustics in real-time based on audience size and performance type.</p><p><b>Secret Tunnel Secret Tunnel</b> During award nights and premiers, VIP guests can avoid the crowds through a network of hidden corridors connecting the hotel and other facilities.</p><p><b>Desert City's Largest Chandelier</b> The theater's iconic circular chandelier weighs nearly 2000 pounds (900kg) and spans an area of 3000sqft.</p>"
}

iter+=1;places[iter] = { // The WAVE Resort & Casino
  name:"The WAVE Resort, Casino & Club", siteLink:"wave-resort",
  shortDescription: "A modern resort and casino where the era of disco, dancing, and divas comes out to play.",
  coverImg: "",
  categories: [0, 1, 3, 8], age:"1", price:"1",
  tags: "Bowling,Nightclub,Disco,Family,E-District,Neon Ave,Games,Arcade,Karaoke,Diner",
  location:"Entertainment District, Desert City"
}
placeDetails[iter] = {
  slideShowLinks: [""],
  externalLink: "",
  accessibility: [""],
  contactInfo: [""],
  dateEstablished: "",
  longDescription: "The WAVE Resort features<ul><li>Neon Bowling Alley - 2nd Floor</li><li>The WAVE Disco Club - 1st Floor</li><li>Nostalgic Arcade - 2nd floor</li><li>Disco Diner - 2nd floor</li><li>Casino - 1st floor</li></ul>"
}

iter+=1;places[iter] = {// THE CRUX CASINO AND RESORT
  name:"The CRUX Casino & Resort", siteLink:"cruX-casino-resort",
  shortDescription: "A world-class luxury destination of elevated indulgence rising above the city skyline.",
  coverImg: "https://i.imgur.com/BvvAaFx.png",
  categories: [1, 0, 4], age:"2", price:"2",
  tags: "Steakhouse,Luxury,Theater,Gambling,Deluxe,E-District,Neon,West Ave,Event Space,Conference Center",
  location:"Entertainment District, Desert City"
}
placeDetails[iter] = {
  slideShowLinks: ["none"],
  externalLink: "",
  accessibility: ["Wheelchair accessible","Service animals with valid permit allowed"],
  contactInfo: [""],
  dateEstablished: "",
  longDescription: "<h2>Experience at its Peak</h2>Welcome to The CRUX Casino, a world-class luxury destination where cutting-edge entertainment, elevated indulgence, and unforgettable moments converge. Rising above the city skyline, The CRUX is more than a casino—it’s the epicenter of nightlife, fine dining, and high-stakes excitement.<p>This is where nights stretch longer, flavors run deeper, and every detail is designed to thrill.</p><div class='spacer'></div><div class='columnContainer'><img src='https://www.nerdly.co.uk/wp-content/uploads/2024/08/casino-new.jpg'><div><h3>Higher Stakes - Higher Standards</h3>Step into an expansive, impeccably designed casino floor that blends timeless glamour with next-generation technology. From classic table games to the latest immersive gaming experiences, The CRUX delivers excitement at every turn. Whether you’re here to play, watch, or simply soak in the energy—this is where the action lives.</div></div><div class='columnContainer'><div><h3>The CRUX Theater</h3>Our state-of-the-art high-tech theater sets a new standard for live performance and cinematic spectacle. Featuring world-class acoustics, immersive visuals, and a sleek modern design, the CRUX Theater hosts top-tier concerts, exclusive events, and unforgettable performances.</div><img src='https://assets.simpleviewcms.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://lasvegas.simpleviewcrm.com/images/listings/original_Pearl-Theater_9CD4A038-07E1-6909-B413659417F06185-9cd49ba0cc2d831.jpeg'></div>"
}

iter+=1;places[iter] = { // SKYLINE APARTMENTS ON NEON
  name:"Skyline on Neon Luxury Living", siteLink:"skyline-neon",
  shortDescription: "A luxury high-rise apartment complex with shopping and dining adjacent to E-District.",
  coverImg: "img_link",
  categories: [10], age:"0", price:"0",
  tags: "Living,Apartment,Target,Grocery",
  location:"Entertainment District, Desert City"
}
  placeDetails[iter] = {
    slideShowLinks: ['link1', 'link2'], // put 'none' if none
    externalLink: "externalLink", // put 'none' if none
    accessibility: ['Wheelchair Accessible', 'Service Animals Allowed', 'etc'],
    contactInfo: ['mailingAddress', 'emailAddress', 'phoneNumber'], // put 'none' if Not Available for any item
    dateEstablished: "MMMM-DD-YYYY",
    longDescription: "Live the high life, 20 stories above the hustle and bustle of Minecraftia's most iconic city. Skyline Apartments brings the luxury high-rise lifestyle of the movies to reality. Whether you're looking for a 1-bedroom or 2-bedroom layout, you'll find your home - and your new life - at Skyline.<img class='inline' src='https://thumbs.6sqft.com/wp-content/uploads/2016/08/12131833/Target-East-Village-e1471022334665.png?w=1560&format=webp'>\
    <p><h3>Right above the action</h3> In addition to being located less then a crosswalk's distance away from The Alley, the Skyline complex features both a Target and a TJ's Grocery for all your groceries, essentials, and goodies - right downstairs!</p>" // remember, if you want an inline img, use <img class='inline' src=''>
  }