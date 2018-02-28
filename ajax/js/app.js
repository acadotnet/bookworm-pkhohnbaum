
$(document).ready(function(){

     $.getJSON({
        url: "./data/books.json",
        success:function(d){
            //console.log(d.books);
            var myBooks = [];
            $.each(d.books, function(i,book){
                   // console.log(book.title);
                    var newBook = new Book(book.id,book.title,book.author,book.isbn,book.coverUrl);
                    myBooks.push(newBook);
                    
            })
                var body = $("#bookTable");
            $.each(myBooks, function(i, myBook){
                
                var row = $("<tr>");
                row.append("<td>" + myBook.id + "</td>");
                row.append("<td>" + myBook.coverUrl + "</td>");
                row.append("<td>" + myBook.title + "</td>");
                row.append("<td>" + myBook.author + "</td>");
                row.append("<td>" + myBook.isbn + "</td>");
        
                body.append(row);

               

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
     return this._id;
 }
 get title(){
     return this._title;
 }
 get author(){
    return this._author;
 } 
 get isbn(){
     return this._isbn;
 }
 get coverUrl(){
     return this._coverUrl;
 }
}
