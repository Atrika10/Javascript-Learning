//  create a new input & button
let inp = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "click me"

let bdy = document.getElementsByTagName("body")[0];
bdy.append(inp);
bdy.append(btn);

// q2
// change placeholder value of input to 'username'
inp.setAttribute("placeholder","username");

// Change the id of button to btn
btn.setAttribute("id","btn");

// Q3 Access the btn using  thequerySelector and button id.Change the button backgroundcolor to blue and text color to white
let btnn = document.querySelector("#btn");
btnn.style.backgroundColor = "blue";
btnn.style.color = "white";

// Q4.Create an h1 element on the page and set its text to“DOMPractice” underlined.Change its color  topurple
let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
h1.style.textDecoration = "underline";
h1.style.color = "purple";
bdy.prepend(h1);

//Q5. Create a p tag on the page and set its text to“web development”,whereDeltaisbold

let p = document.createElement("p");
p.innerHTML = "Web Development"
// I want to set it after h1 tag so first select h1 tag
let h1tag = document.querySelector("h1");
h1tag.after(p);

