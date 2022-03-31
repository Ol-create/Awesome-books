import fromLS from './modules/localStorage.mjs';
import displayBook from './modules/showBook.mjs';
import navLinks from './modules/menu.mjs';
import {
  bookShelf, navlist, section, newBook, book, datePlace,
} from './modules/nodeVariables.mjs';
import { bookList } from './modules/books.mjs';
import addListener from './modules/addBook.mjs';
import { DateTime } from './modules/luxon.js';

fromLS(bookList);
displayBook(bookList, bookShelf);
addListener(newBook, book, bookList, bookShelf);

const dt = DateTime.now();
datePlace.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);

navLinks(navlist, section);
