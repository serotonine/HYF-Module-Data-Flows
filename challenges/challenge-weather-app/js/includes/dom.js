export const dom = {
  getDom: function () {
    return {
      conditions: document.getElementById("conditions"),
      credit: document.getElementById("credit-user"),
      searchForm: document.getElementById("search"),
      searchLocation: document.getElementById("search-tf"),
      thumbnails: document.getElementById("thumbs"),
      photo: document.getElementById("photo"),
    };
  },
  emptyDom: function () {
    const elements = Object.entries(this.getDom()).filter(
      (el) => !el.at(0).includes("search")
    ).map((el)=> el[1]);
    elements.forEach((el) => (el.innerHTML = ""));
  },
  createThumbnail: function (id, alt, src) {
    const imgLink = document.createElement("figure");
    imgLink.classList.add("thumbs__link");
    const img = new Image();
    img.classList.add("thumb");
    img.id = id;
    img.alt = alt;
    img.src = src;
    imgLink.appendChild(img);
    return imgLink;
  },
  resetThumbnails: function (target) {
    const thumbnails = this.getDom().thumbnails;
    Array.from(thumbnails.children).forEach((el) => {
      el.firstChild.classList.remove("active");
    });
    target.classList.add("active");
  },
  setCredit: function (credit) {
    if(!credit){return;}
    const { name, linkTo } = credit;
    const cl = this.getDom().credit;
    cl.innerHTML = name;
    cl.href = linkTo;
  },
};
