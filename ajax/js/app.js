
$(document).ready(function(){

     $.getJSON({
        url: "./data/books.json",
        success:function(d){
            
            //console.log(d.books);
            var myBooks = new Catolog();
            $.each(d.books, function(i,book){
                   // console.log(book.title);
                    var newBook = new Book(book.id,book.title,book.author,book.isbn,book.coverUrl);
                    myBooks.addBook(newBook);
                    
                    
                    
            })
          

            
            myBooks.build("#bookTable");
            var currentBook = getQueryParameterByName("bookId");
           
            var bookDetail = myBooks.getDetails(currentBook);
            bookDetail.toDetailsPage();
            //$("#bookTitle").val(bookDetail._title);
          

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
    this._author.push(authorName);
 }
get id(){
    return this._id;
}
toDetailsPage(){
    $("#bookTitle").val(this._title);
    $("#bookId").val(this._id);
    $("#bookISBN").val(this._isbn);
    $("#bookUrl").val(this._coverUrl);
    $("#bookAuthor").val(bookDetail._title);
}
 toTableRow(){
     var $tr = $("<tr>");
     $tr.append("<td>"+ this._id + "</td>");
     $tr.append('<td><img src="' + this._coverUrl + '" /></td>');
     $tr.append('<td><a href="./details.html?bookId=' + this._id + '">' + this._title + '</a></td>');
     $tr.append('<td>'+ this._author +"</td>");
     $tr.append('<td>' + this._isbn + "</td>");

     return $tr;

 }

}

class Catolog{
    constructor(){
        this._books = []
    }

    addBook(book){
        this._books.push(book);
    }

    build(target){
        var $tbody = $(target);

        $.each(this._books, function(b, book){
            $tbody.append(book.toTableRow());
        });
    }

    getDetails(bookId){
        $.each(this._books, function(c, book){
           if(book.id == bookId){
               return book;
           } 
        });
    }
    
}
