const dom ={
  loader:document.querySelector(".loader"),
  error:document.querySelector(".error"),
  figure:document.querySelector(".figure"),
  caption:document.querySelector(".caption"),

}

async function setUp(){
  try{
    const response = await fetch(`https://xkcd.now.sh/?comic=latest`);
    if(!response.ok){
      throw new Error("Error:" + response.status);
    }
    const {alt, img:url } = await response.json();
    setImage(url, alt);
  }
  catch(error){
    dom.error.textContent = error.message;
  }
  
}

function setImage(url, alt){
  
  const img = new Image;
  img.src = url;
  img.alt = alt;
  img.onload = ()=>{
    dom.loader.classList.add("hidden");
    dom.figure.insertAdjacentElement('afterbegin',img);
    dom.caption.textContent = alt;
  }
}


window.onload = setUp();