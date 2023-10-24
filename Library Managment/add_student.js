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

function add_student(){
    let input_data = getinputArray();

    new Student(...input_data);
}