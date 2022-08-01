// Get Items
const title = document.getElementById("title")
const author = document.getElementById("author")
const addBtn = document.querySelector(".btn-add")
const body = document.querySelector("body")

// Array of objects container books
let books = [{
  title: 'The Cake Baker',
  author: 'Miss Evelyn',
}, {
  title: 'Javascript Mastery',
  author: 'John Doe',
}];

// Book Constructor function (representing a book).
function Book(){
    this.title =title;
    this.author =author;
}


// UI constructor (To handle UI Tasks)
// Store constructor function (To handle storage)
// Events =>> Display Books
// Events =>> Add a Books
// Events =>> Remove a Books
// 