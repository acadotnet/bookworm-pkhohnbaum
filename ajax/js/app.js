
$(document).ready(function(){

     $.getJSON({
        url: "./data/books.json",
        success:function(d){
            console.log(d.books);
            var myBooks = [];
            $.each(d.books, function(i,book){
                    console.log(book.title);
                    var newBook = new Book(book.id,book.title,book.author,book.isbn,book.coverUrl);
                    myBooks.push(newBook);
                    
            })
                
            $.each(myBooks, function(i, myBooks){
                console.log(myBooks);
            })

            
            

        },
        error: function(){

        }
    })


});

class Book{
 constructor(id, title, author, isbn, coverUrl){
     this._id=id;
     this._title=title;
     this._author=author;
     this._isbn=isbn;
     this._coverUrl=coverUrl;
 } 

 get id(){
     return this.id;
 }
 get title(){
     return this.title;
 }
 get author(){
    return this.author;
 } 
 get isbn(){
     return this.isbn;
 }
 get coverUrl(){
     return this.coverUrl;
 }
}
