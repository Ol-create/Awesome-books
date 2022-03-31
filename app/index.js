import fromLS from './modules/localStorage.js';
import displayBook from './modules/showBook.js';
import navLinks from './modules/menu.js';
import {
  bookShelf, navlist, section, newBook, book, datePlace,
} from './modules/nodeVariables.js';
import { bookList } from './modules/books.js';
import addListener from './modules/addBook.js';
import { DateTime } from './modules/luxon.js';

fromLS(bookList);
displayBook(bookList, bookShelf);
addListener(newBook, book, bookList, bookShelf);

const dt = DateTime.now();
datePlace.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);

navLinks(navlist, section);
