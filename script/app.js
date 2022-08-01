// Get Items
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const addBtn = document.querySelector(".btn-add");
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
const  bookAwesome = {
  title:'',
  author:'',
  bookList:[],
}
// Saving To storage
function saveToStorage(bookAwesome){
  bookAwesome.bookList = books;
  bookAwesome.title = titleInput.value;
  bookAwesome.author = authorInput.value;
  const storeBooks = JSON.stringify(bookAwesome);
  localStorage.setItem('bookAwesome',storeBooks);

}

// Events =>> Display Books

// Events =>> Add a Books
// Events =>> Remove a Books
//
