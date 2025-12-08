import { getDatas, getGeoLocationUrl, getWeatherUrl, getImagesUrl } from "./includes/httpRequest.js";
import { dom as allDom } from "./includes/dom.js";

// Dom.
let dom;

function setUp(){
  dom = allDom.getDom();
  // Search Event.
  dom.searchForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const location = dom.searchLocation?.value;
    if (!location) {
      return;
    }
    // Reset dom.
    allDom.emptyDom();
    // Request.
    const latLon = await getDatas(getGeoLocationUrl(location));
    const { lat, lon } = latLon[0];

    const result = await getDatas(getWeatherUrl(lat, lon));
    const weather = result.weather[0].description;
    dom.conditions.textContent = weather;

    const { results: images } = await getDatas(
      getImagesUrl(encodeURI(weather))
    );
    if (!images.length) {
      return;
    }
    dom.photo.classList.remove("init");
    // Populate credits.
    const credits = new Map();
    // Populate img.
    const gallery = new Map();
    // Display.
    for (let image of images) {
      const {
        id,
        alt_description,
        user:{name, links:{html:linkTo}},
        urls: { thumb, regular },
      } = image;
      
      // Thumbnails.
      const thumbnail = allDom.createThumbnail(id, alt_description, thumb);
      dom.thumbnails.appendChild(thumbnail);
      // Gallery;
      const galleryItem = new Image();
      galleryItem.src = regular;
      galleryItem.alt = alt_description; 
      gallery.set(id, galleryItem);
      // credits.
      credits.set(id,{name, linkTo});
    }

     // Init display.
     const firstImg = dom.thumbnails.firstElementChild.querySelector(".thumb");
     const imgId = firstImg.id;
     firstImg.classList.add("active");

     photo.replaceChildren(gallery.get(imgId));
     allDom.setCredit(credits.get(imgId));
    
    // Thumbnails event.
    dom.thumbnails.addEventListener("click", (e) => {
      const target = e.target, id = target.id;
      // Check the tharget is a thumb.
      if (id === "thumbs") { return; }
      // Reset Thumbnails.
      allDom.resetThumbnails(target);
      // Display photo.
      photo.replaceChildren(gallery.get(id));
      // Credit.
      allDom.setCredit(credits.get(id));
    });
  });
  dom.searchLocation.addEventListener("focus", function(){this.value = ""});
}

window.onload = setUp();
