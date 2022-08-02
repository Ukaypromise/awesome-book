// Get Items
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const addBtn = document.querySelector(".add-btn");
const body = document.querySelector("body");
const section = document.querySelector("section");

// Array of objects containing books
let books = [
  {
    title: "The Cake Baker",
    author: "Miss Evelyn",
  },
  {
    title: "Javascript Mastery",
    author: "John Doe",
  },
];

// Book Constructor function (representing a book).
function Book(title, author) {
  this.title = title;
  this.author = author;
}
// functions to Handle tasks
// Add Books
function addBook(title, author) {
  const newBook1 = new Book(title, author);
  books.push(newBook1);
}
// Remove Books
function removeBook(title, author) {
  books = books.filter((book) => {
    if ((book.title === title) && (book.author === author)) {
      return false;
    }
    return true;
  });
}
// Store function (To handle storage)
const bookAwesome = {
  title: "",
  author: "",
  bookList: [],
};
// Saving To storage
function saveToStorage() {
  bookAwesome.title = titleInput.value;
  bookAwesome.author = authorInput.value;
  bookAwesome.bookList = books;
  const storeBooks = JSON.stringify(bookAwesome);
  localStorage.setItem("data", storeBooks);
}

// Events =>> Display Books Dynamically

function loadContent() {
  const h1 = document.querySelector("h1");
  const bookContainer = document.createElement("div");
  bookContainer.className = "book-container";
  // section.appendChild(bookContainer);
  if (document.querySelector(".book-container")) {
    section.removeChild(document.querySelector(".book-container"));
  }

  for (let i = 0; i < books.length; i ++) {
    const div = document.createElement("div");
    div.className = "outputItem";
    const p1 = document.createElement("p");
    p1.className = `book-title_${i}`;
    p1.innerText = '"' + books[i].title + '" by ' + books[i].author;
    div.appendChild(p1);

    const button = document.createElement("button");
    button.className = `btn-remove_${i} btn-remove`;
    button.innerText = "Remove";
    button.type = "button";
    div.appendChild(button);
    bookContainer.appendChild(div);
  }

  h1.insertAdjacentElement("afterend", bookContainer);
  const btnRemove = document.querySelectorAll(`.btn-remove`);
  btnRemove.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const title = document.querySelector(
        `.book_title_${e.target.classList[0].substr(11)}`
      );
      const author = document.querySelector(
        `.book_author_${e.target.classList[0].substr(11)}`
      );
      bookAwesome.remove(title.innerText, author.innerText);
      saveToStorage();
      loadContent();
    });
  });
}

// Events =>> Add a Books
addBtn.addEventListener("click", () => {
  addBook(titleInput.value, authorInput.value);
  saveToStorage();
  // loadContent();
});

loadContent();

function loadFromStorage() {
  const currentBook = JSON.parse(localStorage.getItem("data"));
  titleInput.value = currentBook.title;
  authorInput.value = currentBook.author;
  books = currentBook.bookList;
  loadContent();
}



titleInput.addEventListener("input", () => {
  saveToStorage();
});

authorInput.addEventListener("input", () => {
  saveToStorage();
});

if (!localStorage.getItem("data")) {
  saveToStorage();
} else {
  loadFromStorage();
}

loadContent();

//
