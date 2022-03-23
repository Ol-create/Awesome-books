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