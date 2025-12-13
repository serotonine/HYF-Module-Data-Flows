let myLibrary = [];

window.addEventListener("load", function (e) {
  populateStorage();
  render();
});

function populateStorage() {
  if (myLibrary.length == 0) {
    let book1 = new Book(
      "Robison Crusoe",
      "Daniel Defoe",
      "252",
      true);
    let book2 = new Book(
      "The Old Man and the Sea",
      "Ernest Hemingway",
      "127",
      true
    );
    myLibrary.push(book1);
    myLibrary.push(book2);
    render();
  }
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const check = document.getElementById("check");
const formInputs = document.querySelectorAll(".form-control");
const read = document.querySelector(".form-check-input");

// Check the right input from forms and if its ok -> add the new book (object in array).
// Via Book function and start render function.
function submit() {
  if (
    title.value == null ||
    title.value == "" ||
    pages.value == null ||
    pages.value == "" ||
    author.value =="" ||
    author.value == null
  ) {
    alert("Please fill all fields!");
    return false;
  } else {
    let book = new Book(title.value, author.value, pages.value, check.checked);
     myLibrary.push(book);
    render();
    reset();
  }
}

function reset(){
  for(input of formInputs){
    input.value ="";
  }
  read.checked = false;

}

function Book(title, author, pages, check) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = check;
}

function render() {
  let table = document.getElementById("display");
  let rowsNumber = table.rows.length;
  // Delete old table.
  for (let n = rowsNumber - 1; n > 0; n--) {
    table.deleteRow(n);
  }
  // Insert updated row and cells.
  let length = myLibrary.length;
  for (let i = 0; i < length; i++) {
    let row = table.insertRow(1);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let wasReadCell = row.insertCell(3);
    let deleteCell = row.insertCell(4);
    titleCell.innerHTML = myLibrary[i].title;
    authorCell.innerHTML = myLibrary[i].author;
    pagesCell.innerHTML = myLibrary[i].pages;

    // Add and wait for action for read/unread button.
    let changeBut = document.createElement("button");
    changeBut.id = i;
    changeBut.className = "btn btn-success";
    wasReadCell.appendChild(changeBut);
    changeBut.innerText = !(myLibrary[i].check) ? "No" : "Yes";

    changeBut.addEventListener("click", function () {
      myLibrary[i].check = !myLibrary[i].check;
      render();
    });

    // Add delete button to every row and render again.
    const delBtn = document.createElement("button");
    delBtn.id = i + 5;
    delBtn.className = "btn btn-warning";
    delBtn.innerHTML = "Delete";
    deleteCell.appendChild(delBtn);
    delBtn.addEventListener("click", function () {
      alert(`You've deleted title: ${myLibrary[i].title}`);
      myLibrary.splice(i, 1);
      render();
    });
  }
}
