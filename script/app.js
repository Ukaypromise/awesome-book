// Get Items
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const addBtn = document.querySelector(".add-btn");
const body = document.querySelector("body");

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
    return book.title !== title && book.author !== author;
  });
}
// Store function (To handle storage)
const bookAwesome = {
  title: "",
  author: "",
  bookList: [],
};
// Saving To storage
function saveToStorage(bookAwesome) {
  bookAwesome.bookList = books;
  bookAwesome.title = titleInput.value;
  bookAwesome.author = authorInput.value;
  const storeBooks = JSON.stringify(bookAwesome);
  localStorage.setItem("bookAwesome", storeBooks);
}

// Events =>> Display Books Dynamically

function loadcontent() {
  const bookContainer = document.createElement("div");
  body.appendChild(bookContainer);

  bookContainer.className = "book-container";
  const h1 = document.querySelector("h1");

  if (bookContainer) {
    body.removeChild(bookContainer);
  }

  for (let i = 0; i < books.length; i++) {
    const div = document.createElement("div");
    div.className = "outputItem";
    const p1 = document.createElement("p");
    p1.className = `book-title_${i}`;
    p1.innerText = '"' + books[i].title + '"' + books[i].author;
    div.appendChild(p1);

    const button = document.createElement("button");
    button.className = `btn-remove_${i} btn-remove`;
    button.innerText = "Remove";
    button.type = "button";
    div.appendChild(button);
    bookContainer.appendChild(div);
  }

  h1.insertAdjacentElement("afterend", bookContainer);
  const btnRemove = document.querySelectorAll(".btn-remove");
  btnRemove.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const title = document.querySelector(
        `.book-title_${e.target.classList[0].substr(11)}`
      );
      const author = document.querySelector(
        `.book-title_${e.target.classList[0].substr(11)}`
      );
      removeBook(title.innerText, author.innerText);
      saveToStorage();
      loadcontent();
    });
  });
}

// Events =>> Add a Books
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBook(titleInput.value, authorInput.value);
  saveToStorage();
  loadcontent();
});

loadcontent();

function loadFromStorage() {
  const currentBook = JSON.parse(localStorage.getItem("bookAwesome"));
  if (currentBook) {
    books = currentBook.bookList;
    titleInput.value = currentBook.title;
    authorInput.value = currentBook.author;
    loadcontent();
  }
}

if (!localStorage.getItem("bookAwesome")) {
  loadFromStorage();
} else {
  loadFromStorage();
}

titleInput.addEventListener("input", (e) => {
  saveToStorage();
});

authorInput.addEventListener("input", (e) => {
  saveToStorage();
});

// Events =>> Remove a Books
//
