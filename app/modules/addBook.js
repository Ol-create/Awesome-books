import displayBook from './showBook.js';

const addListener = (newBook, book, bookList, bookShelf) => {
  newBook.addEventListener('submit', (e) => {
    e.preventDefault();
    if (book[0].value !== '' && book[1].value !== '') {
      bookList.add(`"${book[0].value}"`, `by ${book[1].value}`);
      displayBook(bookList, bookShelf);
      book[0].value = '';
      book[1].value = '';
    } else if (book[0].value !== '') {
      bookList.add(`"${book[0].value}"`, ' by     Anonymous');
      displayBook(bookList, bookShelf);
      book[0].value = '';
      book[1].value = '';
    }
  });
};

export default addListener;
