// DOM practice Questions
// Create a new button element. Give it a text “click me”, background color of red & text color of white.Insert the button as the first element inside the body tag

// create a button
let btn = document.createElement("button");
btn.innerText =  "click me"     // added text
btn.style.backgroundColor = "red";  // added styles
btn.style.color = "white";

// populate in body 
let bodyEl = document.querySelector("body");
bodyEl.prepend(btn);    // prepend method help me to insert this element as the first element inside the body tag
