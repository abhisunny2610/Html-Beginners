class Book{

    static PrimaryKey = 1000;
    static CoutBook = 0;
    static BookDatabase = [];

    constructor(name, title, author, pages, price){
        this.name = name;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.price = price;
        this.PrimaryKey = Book.PrimaryKey;

        Book.BookDatabase.push(this);
        Book.PrimaryKey++;
        Book.CoutBook++;
    }
};

function getinputArray(){
    const form = document.forms[0];

    const book_name = form["bookname"].value;
    const book_title = form["booktitle"].value;
    const book_author = form["authorname"].value;
    const book_pages = form["bookpages"].value;
    const book_price = form["bookprice"].value;

    console.log([book_name, book_title, book_author, book_pages, book_price]);
    return[book_name, book_title, book_title, book_pages, book_price];
}

function add_book(){
    let input_data = getinputArray();
    new Book(...input_data);
}