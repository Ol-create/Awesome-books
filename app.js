// Create form and book container variables 
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