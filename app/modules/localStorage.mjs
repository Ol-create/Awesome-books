const fromLS = (bookList) => {
  if (localStorage.books) {
    const from = JSON.parse(localStorage.books);
    bookList.list = from;
  }
};

export default fromLS;
