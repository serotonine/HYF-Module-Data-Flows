const dom = {
  btnAdd: document.getElementById("add-dog"),
  btnReset: document.getElementById("reset-dog-list"),
  list: document.querySelector(".doggies"),
  error: document.querySelector(".error"),
  doggies: document.querySelectorAll(".doggy"),
};

const setUp = function () {
  dom.btnAdd.addEventListener("click", addDog);
  dom.btnReset.addEventListener("click", emptyList);
};

window.load = setUp();

async function addDog() {
  dom.btnAdd.disabled = true; // Désactive le bouton
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    if (!response.ok) throw new Error(response.status);
    const data = await response.json();
    const url = data.message;

    dom.list.classList.add("vanish");
    await new Promise(resolve => setTimeout(resolve, 1000));
    addImage(url);
    dom.list.classList.remove("vanish");
  } catch (error) {
    dom.error.textContent = error.message;
    dom.error.classList.remove("hidden");
  } finally {
    dom.btnAdd.disabled = false;
  }
}

function addImage(url) {
  const li = document.createElement("li");
  li.classList.add("doggy");
  const figure = document.createElement("figure");
  const img = new Image();
  img.src = url;
  figure.appendChild(img);
  li.appendChild(figure);
  dom.list.insertAdjacentElement("afterbegin", li);
}

function emptyList(){
   dom.list.innerHTML="";

}
