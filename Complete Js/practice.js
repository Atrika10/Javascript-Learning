// You are creating a website for your college. Create a class User with 2 properties, name &email. It also has a method called viewData( ) that allows user to view website data.


class user {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("viewdata")
    }
}

// create object of user class
let stu = new user("atrika", "a@gmail.com");
console.log(stu.name);
console.log(stu.email);
console.log(stu.viewData());