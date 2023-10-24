const addbook_button = document.getElementById("addbook")
const showbook_button = document.getElementById("showbooks")
const update_book = document.getElementById("updatebook")
const delete_book = document.getElementById("deletebook")

const addbook_container = document.getElementById("libmanagement")
const showbook_container = document.getElementById("showdatabase")

const createBook_button = document.getElementById("cbook");
const saveEdit_button = document.getElementById("ebook");

class Book{

    static PrimaryKey = 1000;
    static BookDatabase = [];
    static BookCount;

    constructor(title, author, subject, pages, price){

        this.title = title;
        this.author = author;
        this.subject = subject;
        this.pages = pages;
        this.price = price;
        this.primarykey = Book.PrimaryKey;
 
        Book.BookDatabase.push(this);
        Book.BookCount++;
        Book.PrimaryKey++;

    }

    static getBookKeys(){
        return ["primarykey", "title", "author", "subject", "pages", "price"]
    }

};

new Book("JavaScript", "Abhishek", "Learn JavaScript", 1200, 400);
new Book("HTML", "Varsha", "Fast way to learn HTML", 2000, 1500);
new Book("CSS", "Hanish", "Learn CSS", 800, 120);


class Database{

    static showdatabase_thead = null;
    static showdatabase_tbody = null;

    static load_head(){

        Database.showdatabase_thead = document.getElementById("showdatabase-thead")

        const keys = Book.getBookKeys();

        const tr_element = document.createElement("tr");

        for(let i=0; i<keys.length; i++){

            let th_element = document.createElement("th")

            th_element.innerText = keys[i];

            tr_element.appendChild(th_element);
        }

        Database.showdatabase_thead.appendChild(tr_element);
        return tr_element;

    }

    static load_body(){

        Database.showdatabase_tbody = document.getElementById("showdatabase-tbody")

        const books = Book.BookDatabase;

        for (let i=0; i<books.length; i++){

            let tr_element = document.createElement("tr");
            Database.load_table_row(tr_element, books[i], true, true);

            Database.showdatabase_tbody.appendChild(tr_element);
        }
    }

    static load_table_row(tr_element, book, _update_=false, _delete_ = false){

        let keys = Book.getBookKeys();

        for(let i=0; i<keys.length; i++){

            let td_elemnt = document.createElement("td");
            
            td_elemnt.innerText = book[keys[i]];
            tr_element.appendChild(td_elemnt);
        }

        if(_update_){

            Database.#update("edit", book, tr_element);
        }

        if(_delete_){
            Database.#update("delete", book, tr_element);
        }
    }

    static #update(type, book, tr_element){

        let tdata = document.createElement("td");

        tr_element.appendChild(tdata);

        if(type == "delete"){

            let bt1 = document.createElement("button");

            bt1.setAttribute("PK", book["primarykey"]);

            bt1.innerText = type;

            tdata.appendChild(bt1);


            bt1.onclick =(ev) => {

                tr_element.remove();
                const bk_index = Book.BookDatabase.indexOf(book);
                Book.BookDatabase.splice(bk_index, 1);
            }
        }

        if(type == "edit"){

            let bt2 = document.createElement("button");
            bt2.setAttribute("Pk", book["primarykey"]);
            bt2.innerText = type;
            tdata.appendChild(bt2);

            bt2.onclick = (ev) => {
                Database.#get_data_from_html(tr_element, book);
            }
        }
    }

    static #getItem(id) {
        console.log("id: ", id);

        let item = Book.BookDataBase.filter((bk) => {
            // console.log(bk)
            if (bk["primarykey"] == id) {
                return true
            }
            else {
                return false
            }
        });

        return item[0];
    }


    static #get_data_from_html(tr_element, book) {

        let tds = tr_element.getElementsByTagName("td");
        console.log(tds);

        addbook_container["title"].value = tds[1].innerText
        addbook_container["author"].value = tds[2].innerText
        addbook_container["subject"].value = tds[3].innerText
        addbook_container["pages"].value = tds[4].innerText
        addbook_container["price"].value = tds[5].innerText

        // 3. switching to the form
        addbook_container.style.display = "block";  // show
        showbook_container.style.display = "none"; // hide

        // first hide the creatBook_button
        // then we need to display the saveEdit_button

        createBook_button.style.display = "none";
        saveEdit_button.style.display = "block";

        saveEdit_button.onclick = (ev) => {

            Database.#saveEdit_Changes(book, tr_element);
        }

    }


    static #saveEdit_Changes(book, tr_element) {

        book["title"] = addbook_container["title"].value
        book["author"] = addbook_container["author"].value
        book["subject"] = addbook_container["subject"].value
        book["pages"] = addbook_container["pages"].value
        book["price"] = addbook_container["price"].value


        // 3. switching to the form
        addbook_container.style.display = "none";  // show
        showbook_container.style.display = "block"; // hide

        // first hide the creatBook_button
        // then we need to display the saveEdit_button

        createBook_button.style.display = "block";
        saveEdit_button.style.display = "none";

        let tds = tr_element.getElementsByTagName("td");
        console.log(tds);

        tds[1].innerText = addbook_container["title"].value
        tds[2].innerText = addbook_container["author"].value
        tds[3].innerText = addbook_container["subject"].value
        tds[4].innerText = addbook_container["pages"].value
        tds[5].innerText = addbook_container["price"].value

        addbook_container.reset()
    }


};

Database.load_head();
Database.load_body();

function getinputArray(){

    const form = document.forms[0];

    const book_title = form["title"].value;
    const book_author = form["author"].value;
    const book_subject = form["subject"].value;
    const book_pages = form["pages"].value;
    const book_price = form["price"].value;

    console.log([book_title, book_author, book_pages, book_subject, book_price])
    return [book_title, book_author, book_pages, book_subject, book_price];
}

function getinputArray() {
    const form = document.forms[0];


    const book_title = form["title"].value;
    const book_author = form["author"].value;
    const book_subject = form["subject"].value;
    const book_pages = form["pages"].value;
    const book_price = form["price"].value;

    console.log([book_title, book_author, book_pages, book_subject, book_price])
    return [book_title, book_author, book_pages, book_subject, book_price];
}

function add_book() {

    let input_data = getinputArray();
    new Book(...input_data)

}

function addBook() {
    console.log("add book button is pressed");

    addbook_container.style.display = "block";
    showbook_container.style.display = "none";
}

function showBooks() {
    console.log("show books button is pressed.");

    addbook_container.style.display = "none";
    showbook_container.style.display = "block";


}


// binding the onclick event

addbook_button.onclick = addBook;
showbook_button.onclick = showBooks;