
$(document).ready(function(){

     $.getJSON({
        url: "./data/books.json",
        success:function(d){
            console.log(d);

        },
        error: function(){

        }
    })


});

class Book{
 constructor(id, title, author, isbn, coverUrl){
     this.id=id;
     this.title=title;
     this.author=author;
     this.isbn=isbn;
     this.coverUrl=coverUrl;
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
