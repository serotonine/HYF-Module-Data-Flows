const api_key = "05d35f8ddeb44a6e36ac85ecb2ff0e19"
const base_url= "http://api.openweathermap.org/";
const unsplash_api_key ="b-lWu6upAVsOuNv4vQ0l3hl52LryC0uUsXdPAsurrHQ";

function fetchDatas(URL){
  return fetch(URL)
  .then( (response) => {
    if(!response.ok){
      console.dir(response);
      throw new Error(response);
    }
    return response.json();

  })
    .catch((error)=> {
      console.error(error);
      throw error;
    });
  }

export async function getDatas(URL){
  try{
  const images = await fetchDatas(URL);
  return images;

  }
  catch(e){ 
    console.log(e.message);
    return null;

  }
}
export function getGeoLocationUrl(location){
  return `${base_url}geo/1.0/direct?q=${location}&limit=5&appid=${api_key}`;

}
export function getWeatherUrl(lat,lon){
  return `${base_url}data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;;
}
export function getImagesUrl(keyword){
  return `https://api.unsplash.com/search/photos?query=${keyword}&orientation=squarish&page=1&per_page=30&client_id=${unsplash_api_key}`
}