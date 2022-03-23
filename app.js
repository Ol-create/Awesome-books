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