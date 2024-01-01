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

// Q1> We are given array of marks of students. Filter our of the marks of students that scored 90+
let marks = [89,59,92,95,99];
const filteredArray = marks.filter((val) =>{
    return val>90;
});

console.log(filteredArray);

// Q2>
// Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array
let n =10;
let arr = [];
//step - 1 creating array 1 to n
for(let i=1; i<=n;i++){
    arr.push(i);
}
// step -2 
const sum = arr.reduce((res,val)=>{
    return res+val;
})
const prod = arr.reduce((res,val)=>{
    return res*val;
})
console.log("sum =>" + sum + " & product =>" + prod);