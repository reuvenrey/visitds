/* PLACES - Attractions, Hotels, Etc. 

  CATEGORIES - Pre defined, a location can be in multiple categories (IE - Casino AND Resort)
  TAGS - Can be whatever you want, used to identify things in search

  EXAMPLE:
  iter+=1;places[iter] = {
    name: "Grindr Stadium", link: "grindr-stadium", location: "Entertainment District, Desert City",
    shortDescription: "A large indoor arena hosting many sporting events, awards shows, and concerts",
    categories:[1], age:"0", tags:["Sports","Concerts","Idol Awards","Arena"],
    coverImg: "imgur.com/image", slideshowImg: ["none"], // if no slideshow, put ["none"]
    pageContent:"Home of the annual Idol Awards, Grindr Stadium is a foundational anchor of the Entertainment District in Desert City. <p>Built in 2005 the stadium is a modern venue...</p>",
    externalSite: "www.grindrstadium.com"
  }

  Notes:
  within descriptions, use \" or ' ONLY, do not put just the quotation -> this will cause errors
  Remember: <p></p> = paragraph, <br> = linebreak, <div class='spacer'></div> = horizontal line, <img src=''> = inline img [automatically formatted when in pageContent]

*/

categories = ["none", "Attraction", "Entertainment", "Casino", "Restaurant", "Hotel", "Resort", ""];
// none0  attraction1  entertainment2  casino3  restaurant4  hotel5  resort6
ages = ["none", "All Ages", "Adults and Teens", "Adults only 18+", "Adults only 21+"];
// none0 (unrated), all1, teens2, 18+3, 21+4

// Counting Variable
const iter = -1;

places = [];

// PLACES OF DESERT SPRINGS

iter+=1;places[iter] = {
  name: "Place Name", link: "place-link", location: "place_location", // District, City or City
  shortDescription: "short_description",
  categories:[category1index,category2index], age:"ageIndex", tags:["tag1","tag2","tag3"],
  coverImg: "img_link", slideshowImg: ["img_link1","img_link2"], // if no slideshow, put ["none"]
  pageContent:"page_content",
  externalSite: "link_to_ext_site" // if none, delete this section
}
