
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

                
                toT

               

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
 addAuthor(authorName){
    this._authors.push(authorName);
 }

 toTableRow(){
     var $tr = $("<tr>");
     $tr.append("<td>"+ this._id+ "<td>");
     $tr.append('<td><img src="' + this._coverUrl + "</td>");
     $tr.append('<td> + <a href"./detail.html?bookId=' + this._id + "</td>");
     $tr.append('<td>'+ this._authors +"</td>");
     $tr.append('<td>' + this._isbn + "</td>");

     return $tr;

 }

}

class Catolog{
    constructor(){
        this._books = []
    }

    addBook(book){
        this._books.push();
    }

    build(target){
        var $body = $(target);

        $.each(this._books, function(b, book){
            $tbody.append(book.toTableRow());
        });
    }
}
