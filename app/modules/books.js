import { section } from './nodeVariables.js';

export default class Books {
  constructor() {
    this.list = [];
  }

  toLS = () => {
    const to = JSON.stringify(this.list);
    localStorage.setItem('books', to);
  };

  // Add book to bookList(w- Title & Author)
  add = (title, author = 'Anonymous') => {
    const book = {
      title,
      author,
    };

    this.list.push(book);
    this.toLS();

    section[1].style.display = 'none';
    section[0].style.display = 'block';
  }

  // Remove book objects
  remove = (title, author) => {
    this.list = this.list.filter((book) => book.title !== title || book.author !== author);
    this.toLS();
  }
}

export const bookList = new Books();
