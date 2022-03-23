// Create form and book container variables //
const form = document.getElementById('form');
const bookKeeper = document.getElementById('book-keeper');

// Create book object
const awesomeBook =  function(){

    this.data = {};
    this.record = [];
// Creat add book method
  this.addRecord= function(title, author) {
    this.data = { title, author };
    this.record.push(this.data);
    return this.data;
  };

  this.local= function() {
      // Set localStorage
    localStorage.setItem('books', JSON.stringify(this.record));
    this.returnInfo();
  };

  this.returnInfo =function() {
    bookKeeper.innerHTML = '';

    // Get items from local storage
    this.record = JSON.parse(localStorage.getItem('books'));
    if (this.record === null) {
      this.record = [];
    } else {
      let count = 0;
      this.record.forEach((element) => {
        count += 1;
       
     return   bookKeeper.innerHTML += ` 
            <div class="bTitle">${element.title}</div>
            <div class="bAuthor">${element.author}</div>
            <button class="delete">Remove</button>
            <hr width="175" align="left">
          </div>
          `;
      });
    }
  },

  // Create   delete method
  this.eliminate= function(title, author) {
    let indexArray;
    this.record.forEach((element, index) => {
      if (element.title === title && element.author === author) {
        indexArray = index;
      }
    });
    this.record.splice(indexArray, 1);
    this.local();
  }
}

const awesome = new awesomeBook();

// Creat event to add book  //
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  if (title === '' || author === '') {
    alert('missing information');
  } else {
    awesome.addRecord(title, author);
    awesome.local();
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
});

// Create event to remove book
bookKeeper.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.innerHTML === 'Remove') {
    const eliminateBook = e.path[1].childNodes[1].childNodes[0].data;
    const eliminateAuthor = e.path[1].childNodes[3].childNodes[0].data;
    awesome.eliminate(eliminateBook, eliminateAuthor);
  }
});

// event when the page loads 
document.addEventListener('DOMContentLoaded', awesome.returnInfo());