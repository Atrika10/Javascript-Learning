// You are creating a website for your college. Create a class User with 2 properties, name &email. It also has a method called viewData( ) that allows user to view website data.
//Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data

// make a random data
let data = "College data";

class user {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("viewdata")
    }
}
// admin class is a child class of user class
class admin extends user{
    constructor(name, mail){
        super(name, mail);      // as this is a child class, we have to call constructor of parent class
    }
    editData(){
        data = "data edited";
        console.log(`this is new data => ${data}`);
    }
}

// create object of user class
let stu = new user("atrika", "a@gmail.com");
console.log(stu.name);
console.log(stu.email);
console.log(stu.viewData());

// create object of admin class
let admin1 = new admin("admin", "admin@gmail.com");

console.log(admin1);    // name & email will be undefined as we have not passed 
console.log(admin1.editData());