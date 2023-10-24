const addstudent_button = document.getElementById("form")
const showtudent_button = document.getElementById("showstudent")
const addbook_button = document.getElementById("addbook")
const showbook_button = document.getElementById("showbook")
const issuebook_button = document.getElementById("issuebook")
const returnbook_button = document.getElementById("returnbook")
const logout_button = document.getElementById("logout")

const addstudent_container = document.getElementById("addStudent")
const showstudent_container = document.getElementById("showstudents")

class Student{

    static StudentDatabase = [];
    static StudentCount;

    constructor(name, branch, address, city, pincode, email, mobile, ){

        this.name = name;
        this.branch = branch;
        this.address = address;
        this.city = city;
        this.pincode = pincode;
        this.email = email;
        this.mobile = mobile


        Student.StudentDatabase.push(this);
        Student.StudentCount++;

    }

    static getStudentKeys(){
        return ["name", "branch", "address", "city", "pincode", "email", "mobile"]
    }

};

function getinputArray(){

    const form = document.forms[0];

    const student_name = form["studentname"].value;
    const student_branch = form["branch"].value;
    const address = form["address"].value;
    const city = form["city"].value;
    const pincode = form["pincode"].value;
    const email = form["email"].value;
    const mobile = form["mobile"].value;

    console.log([student_name, student_branch, address, city, pincode, email, mobile]);
    return[student_name, student_branch, address, city, pincode, email, mobile];
}

new Student("Abhishek", "BCA", "Goapl Nagar", "Jaipur", 302018, "abhishek@gmail.com", 1234567890);
new Student("Komal", "BCA", "Goapl Nagar", "Jaipur", 302018, "komal@gmail.com", 0987654321);
new Student("Saloni", "BCA", "Mahesh Nagar", "Jaipur", 302018, "saloni@gmail.com", 1234567890);

class Database{

    static showstudents_thead = null;
    static showstudents_tbody = null;

    static load_head(){
        Database.showstudents_thead = document.getElementById("showstudents-thead")

        const keys = Student.getStudentKeys();

        // first we need to make the table row for content of coloumn headings.
        const tr_element = document.createElement("tr");

        for(let i=0; i < keys.length; i++){
            
            // we need to create th element for each key
            let th_element = document.createElement("th")

            // put the content as the key string inide the th element
            th_element.innerText = keys[i];

            // append each th element into tr_element
            tr_element.appendChild(th_element);
        }

        Database.showstudents_thead.appendChild(tr_element);
        return tr_element;
    }

    static load_body(){
        Database.showstudents_tbody = document.getElementById("showstudents-tbody");

        const student = Student.StudentDatabase;

        for(let i=0; i< student.length; i++){

            let tr_element = document.createElement("tr");

            Database.load_table_row(tr_element, student[i]);

            Database.showstudents_tbody.appendChild(tr_element);
            
        }
    }

    static load_table_row(tr_element, student){
        let keys = Student.getStudentKeys();

        for(let i=0; i<keys.length; i++){

            let th_element = document.createElement("th");

            th_element.innerText = student[keys[i]];

            tr_element.appendChild(th_element);

        }
    }
};

Database.load_head();
Database.load_body();

function add_student(){
    let input_data = getinputArray();

    new Student(...input_data);
}

function addStudent(){
    console.log("add student book is pressed...");
}

function showstudents(){
    console.log("Show student key os pressed...");

    addstudent_container.style.display = "none";
    showstudent_container.style.display = 'block';
    showstudent_container.style.border = "2px solid Yellow";

}

addstudent_button.onclick = addStudent;
showbook_button.onclick = showstudents;