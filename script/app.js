/* eslint-disable max-classes-per-file */
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const submitBtn = document.querySelector('.add-btn');
const bookSection = document.querySelector('.books');
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
class BookSet {
  // Constructor with array of books
  constructor(books = []) {
    this.books = books;
  }

  // Events =>> Add a Books
  add(bookItem) {
    this.books.push(bookItem);
    this.display(bookItem);
    this.remove();
    this.saveToStorage();
    inputAuthor.value = '';
    inputTitle.value = '';
  }

  remove() {
    const removeBtns = document.querySelectorAll('.remove-button');
    removeBtns[removeBtns.length - 1].addEventListener('click', (e) => {
      this.removeFromColl(e.target);
      bookSection.removeChild(e.target.parentNode);
    });
  }

  // Events =>> Display Books Dynamically
  display(data) {
    if (this) {
      const div = document.createElement('div');
      div.className = 'book-wraper';
      div.innerHTML = `<h4 class="m-h">"${data.title}" by
                    ${data.author}</h4>
                    <button data-value="${data.title}-${data.author}" type="button" class ="remove-button">Remove</button>`;
      bookSection.appendChild(div);
    }
  }

  // Remove Books
  removeFromColl(data) {
    const arr = data.getAttribute('data-value').split('-');
    this.books = this.books.filter(
      (item) => item.title + item.author !== arr[0] + arr[1],
    );
    this.saveToStorage();
  }

  // Saving To storage
  saveToStorage() {
    localStorage.setItem('bookItems', JSON.stringify({ bookColl: this.books }));
  }
}
// Book Constructor function (representing a book).
const coll = new BookSet();
if (localStorage.getItem('bookItems')) {
  const localBooks = JSON.parse(localStorage.getItem('bookItems'));
  localBooks.bookColl.forEach((item) => {
    coll.add(new Book(item.title, item.author));
  });
}
submitBtn.addEventListener('click', () => {
  coll.add(new Book(inputTitle.value, inputAuthor.value));
});
const dateVisit = document.querySelector('.userDate');
dateVisit.innerHTML = new Date();
const listLink = document.querySelector('.books');
const booksAddition = document.querySelector('.bookAdded');
const contactUs = document.querySelector('.contactUs');
const navigator = document.querySelectorAll('.book-nav');
navigator.forEach((n, index) => n.addEventListener('click', () => {
  navigator.forEach((link, number) => {
    if (number === index) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  if (index === 0) {
    listLink.classList.remove('hidden');
    booksAddition.classList.add('hidden');
    contactUs.classList.add('hidden');
  } else if (index === 1) {
    listLink.classList.add('hidden');
    booksAddition.classList.remove('hidden');
    contactUs.classList.add('hidden');
  } else {
    listLink.classList.add('hidden');
    booksAddition.classList.add('hidden');
    contactUs.classList.remove('hidden');
  }
}));