class Remove_book{

    static bookDatabase = [];

    constructor(name, title, author){
        this.name = name;
        this.title = title;
        this.author = author

        Remove_book.bookDatabase.pop(this);
    }
};

function getinputArray(){

    const form = document.forms[0];

    const book_name = form["bookname"].value;
    const book_title = form["booktitle"].value;
    const book_author = form["authorname"].value;

    console.log([book_name, book_title, book_author]);
    return[book_name, book_title, book_author];
}

function remove_book(){
    let input_data = getinputArray();

    new Remove_book(... input_data);
}